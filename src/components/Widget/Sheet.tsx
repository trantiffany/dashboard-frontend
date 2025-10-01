"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { TiThMenu } from "react-icons/ti";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Pomodoro from "./Pomodoro";

export function WidgetSheet() {
  return (
    <Sheet>
      <SheetTrigger className="fixed bottom-4 left-4 z-50 p-3 rounded-full border-2 border-primary bg-white shadow-lg hover:bg-gray transition">
        <TiThMenu className="w-6 h-6 text-primary" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[400px] p-4 space-y-6">
        <VisuallyHidden>
          <SheetTitle>Widgets Panel</SheetTitle>
        </VisuallyHidden>

        <Pomodoro />
        <div className="mt-8 p-4 rounded-2xl shadow bg-white">
          <h2 className="text-lg font-semibold mb-4">Coming Soon</h2>
          <p className="text-gray-500">More widgets are on the way!</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
