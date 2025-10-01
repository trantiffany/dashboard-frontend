import React, { useEffect, useState } from "react";
import CardContainer from "@/components/Card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DatadogList, { DataDogType } from "./DatadogList";
import JiraList, { Ticket } from "./JiraList";
import GithubList, { PullRequests } from "./GithubList";
import ConfluenceList, { Page } from "./ConfluenceList";
import { Settings } from "@/context/SettingsContext";

export interface Dashboard {
  pullRequests: PullRequests[];
  ddDashboard: DataDogType[];
  ddMonitors: DataDogType[];
  pages: Page[];
  tickets: Ticket[];
}

const Dashboard = ({ config }: { config: Settings }) => {
  const [data, setData] = useState<Dashboard>();
  const { githubUsername, email, jiraAssigneeId } = config;

  useEffect(() => {
    const getDashboard = async () => {
      const res = await fetch(
        `/api/getDashboards?username=${githubUsername}&email=${email}&jiraId=${jiraAssigneeId}`
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("API Error:", res.status, text);
        return;
      }

      const data = await res.json();
      setData(data);
    };

    getDashboard();
  }, [githubUsername, email, jiraAssigneeId]);

  if (data === undefined)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-20 h-20 border-5 border-gray-300 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  return (
    <>
      <div className="bg-[#F9FAFB]">
        <div className="flex col flex-wrap items-center justify-center">
          <CardContainer
            title="Confluence"
            description={
              "Access pages you've authored and bookmarked in Confluence."
            }
          >
            <ConfluenceList pages={data?.pages} />
          </CardContainer>
        </div>
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg border"
        >
          <ResizablePanel defaultSize={35}>
            <div className="flex">
              <CardContainer
                title="Datadog"
                description={"A comprehensive list of dashboards from Datadog."}
              >
                <DatadogList
                  dashboards={data.ddDashboard}
                  monitors={data.ddMonitors}
                />
              </CardContainer>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={65}>
            <div className="flex col flex-wrap items-center justify-center">
              <CardContainer
                title="Jira"
                description={"View the Jira tickets currently assigned to you."}
              >
                <JiraList tickets={data.tickets} />
              </CardContainer>
              <CardContainer
                title="Github"
                description={"See current pull requests associated with you."}
              >
                <GithubList pullRequests={data.pullRequests} />
              </CardContainer>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Dashboard;
