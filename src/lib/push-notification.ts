import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

export async function requestNotificationPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const token = await getToken(messaging, {
        vapidKey: "BNMpJXhe9Nk3TDsPgxnjyXmBck0yx4Km7q8ocFpNVYTIl4bTGX6VTMmANxawO5XR-swlJ42S7kw2M1S6jhbNeLQ"
      });
      console.log("FCM Token:", token);
    } else {
      console.log("Notification permission denied.");
    }
  } catch (err) {
    console.error("Error getting notification permission:", err);
  }
}
