import { Dashboard } from "@/components/Dashboard";
import { RawTicket, Ticket } from "@/components/JiraList";
import { NextResponse } from "next/server";

function mapTicket(raw: RawTicket): Ticket {
  return {
    ticketKey: raw.key,
    title: raw.fields.summary,
    ticketType: raw.fields.issuetype.name,
    points: raw.fields.customfield_10032,
  };
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username") ?? "";
    const email = searchParams.get("email") ?? "";
    const jiraId = searchParams.get("jiraId") ?? "";

    const jiraPayload = {
      email: email,
      jql: `assignee=${jiraId}`,
    };
    const headers = { "Content-Type": "application/json" };

    const getGithubPRs = `http://localhost:8080/api/github/prs?name=${username}`;
    const getConfluenceUrl = `http://localhost:8080/api/confluence/pages`;
    const getDatadogDashboardsUrl = `http://localhost:8080/api/datadog/dashboards`;
    const getDatadogMonitorsUrl = `http://localhost:8080/api/datadog/monitors`;
    const getJiraTicketsUrl = `http://localhost:8080/api/jira/issues`;

    const [prs, ddDashboard, ddMonitors, pages, jiraTickets] =
      await Promise.all([
        fetch(getGithubPRs).then((res) => res.json()),
        fetch(getDatadogDashboardsUrl).then((res) => res.json()),
        fetch(getDatadogMonitorsUrl).then((res) => res.json()),
        fetch(getConfluenceUrl, {
          method: "POST",
          headers,
          body: JSON.stringify({
            email: email,
            username: jiraId,
          }),
        }).then((res) => res.json()),
        fetch(getJiraTicketsUrl, {
          method: "POST",
          headers,
          body: JSON.stringify({
            email: email,
            jql: `assignee=${jiraId}`,
          }),
        }).then((res) => res.json()),
      ]);

    const dashboard: Dashboard = {
      pullRequests: prs.pull_requests ?? [],
      ddDashboard: ddDashboard.dashboards ?? [],
      ddMonitors: ddMonitors.monitors ?? [],
      pages: pages.pages ?? [],
      tickets: jiraTickets.issues?.map(mapTicket) ?? [],
    };

    return NextResponse.json(dashboard);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
