"use client";
import Header from "@/components/Header/Header";
import Dashboard from "@/components/Dashboard";
import TimezoneClocks from "@/components/Clocks/TimezoneClocks";
import { useSettings } from "@/context/SettingsContext";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  const { settings } = useSettings();
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <Header />
      <TimezoneClocks />
      {settings.jiraAssigneeId && settings.githubUsername && settings.email ? (
        <Dashboard config={settings} />
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Please enter your information in{" "}
            <Link href="/settings" className="text-primary hover:underline">
              Settings
            </Link>{" "}
            to view the dashboard.
          </p>
        </div>
      )}
    </div>
  );
}
