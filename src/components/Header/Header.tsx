import React from "react";
import { NavigationBar } from "./NavigationBar";
import { WidgetSheet } from "../Widget/Sheet";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center text-align-center md:text-left justify-between px-5 py-3 border-b bg-[#59BEC9] text-white">
        <div className="text-2xl font-bold flex gap-2 items-center">
          <img
            src="/favicon.ico"
            alt={`logo`}
            className="h-8 w-8 filter invert brightness-0"
          />
          The Dev Dashboard
        </div>
        <NavigationBar />
      </div>
      <WidgetSheet />
    </div>
  );
};

export default Header;
