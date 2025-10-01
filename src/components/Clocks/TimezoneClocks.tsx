import React from "react";
import Clock, { Timezone } from "./Clock";

const TimezoneClocks = () => {
  return (
    <div className="p-2 gap-20 flex justify-center">
      <Clock timezone={Timezone.PST} />
      <Clock timezone={Timezone.MT} />
      <Clock timezone={Timezone.CST} />
      <Clock timezone={Timezone.EST} />
      <Clock timezone={Timezone.UTC} />
      <Clock timezone={Timezone.IST} />
    </div>
  );
};

export default TimezoneClocks;
