import { usePomodoro } from "@/context/PomodoroContext";
import React from "react";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const Pomodoro = () => {
  const { timeLeft, isRunning, start, pause, reset, setDuration } =
    usePomodoro();

  return (
    <div className="mt-8 p-4 rounded-2xl shadow bg-white space-y-4">
      <h2 className="text-lg font-semibold">Pomodoro Timer</h2>

      <p className="text-2xl font-mono text-center">{formatTime(timeLeft)}</p>

      <div className="flex gap-2">
        {!isRunning ? (
          <button
            onClick={start}
            className="px-3 py-1 bg-[#40a829] text-white rounded"
          >
            Start
          </button>
        ) : (
          <button
            onClick={pause}
            className="px-3 py-1 bg-[#FFC72C] text-white rounded"
          >
            Pause
          </button>
        )}
        <button
          onClick={reset}
          className="px-3 py-1 bg-[#ED1C24] text-white rounded"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {[1, 30, 45, 60].map((min) => (
          <button
            key={min}
            onClick={() => setDuration(min)}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            {min} min
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pomodoro;
