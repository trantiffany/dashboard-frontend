"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type PomodoroContextType = {
  duration: number;
  timeLeft: number;
  isRunning: boolean;
  setDuration: (minutes: number) => void;
  start: () => void;
  pause: () => void;
  reset: () => void;
};

const PomodoroContext = createContext<PomodoroContextType | null>(null);

export function PomodoroProvider({ children }: { children: ReactNode }) {
  const [duration, setDurationState] = useState(25 * 60); // default 25 min
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("⏰ Pomodoro finished! Take a break.");
    }
  }, [timeLeft, isRunning]);

  const setDuration = (minutes: number) => {
    const seconds = minutes * 60;
    setDurationState(seconds);
    setTimeLeft(seconds);
  };

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
  };

  return (
    <PomodoroContext.Provider
      value={{
        duration,
        timeLeft,
        isRunning,
        setDuration,
        start,
        pause,
        reset,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  const ctx = useContext(PomodoroContext);
  if (!ctx) throw new Error("usePomodoro must be used inside PomodoroProvider");
  return ctx;
}
