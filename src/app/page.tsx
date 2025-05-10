'use client';

import { useEffect } from "react";
import { requestNotificationPermission } from "../lib/push-notification";

export default function Home() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <main>
      <h1>Hello, Next.js + Firebase Notifications!</h1>
    </main>
  );
}
