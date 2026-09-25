"use client";

import { useSyncExternalStore } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Kolkata",
});

function subscribe(cb) {
  const id = setInterval(cb, 15_000);
  return () => clearInterval(id);
}

const getSnapshot = () => fmt.format(Date.now());
const getServerSnapshot = () => "--:--";

// Taskbar clock in IST, so recruiters can see what time it is for me.
export default function Clock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <span
      className="flex h-9 items-center gap-2 border-2 border-ink bg-sunk px-2.5 font-mono text-[12px] font-medium tabular-nums"
      title="My local time (IST)"
    >
      <span className="text-mute">IST</span>
      {time}
    </span>
  );
}
