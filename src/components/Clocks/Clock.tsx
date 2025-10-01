import React, { useEffect, useState } from "react";

export enum Timezone {
  IST = "Asia/Kolkata",
  EST = "America/New_York",
  CST = "America/Chicago",
  PST = "America/Los_Angeles",
  UTC = "UTC",
  MT = "America/Denver",
}

const TimezoneLabels: Record<Timezone, string> = {
  [Timezone.EST]: "EST",
  [Timezone.IST]: "IST",
  [Timezone.PST]: "PST",
  [Timezone.CST]: "CST",
  [Timezone.UTC]: "UTC",
  [Timezone.MT]: "MT",
};

interface TimezoneClockProps {
  timezone?: Timezone;
}

const Clock: React.FC<TimezoneClockProps> = ({ timezone = Timezone.EST }) => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60 * 1000); // update per minute
    return () => clearInterval(interval);
  }, []);

  const dateStr = now.toLocaleDateString("en-US", { timeZone: timezone });
  const timeStr = now.toLocaleTimeString("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="text-xl font-semibold">
        {TimezoneLabels[timezone as Timezone]}
      </div>
      <div className="px-3 py-2 bg-[#DDDDDD] rounded-lg shadow-md">
        <p className="text-base font-mono text-[#2C323C]">{timeStr}</p>
      </div>
      <p className="text-sm">{dateStr}</p>
    </div>
  );
};

export default Clock;
