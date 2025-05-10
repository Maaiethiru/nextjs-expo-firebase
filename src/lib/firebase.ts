import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3xV_AHqNs4xjZ-OVMAp-7fZeeZSSSiWg",
  authDomain: "nextjs-expo-integration.firebaseapp.com",
  projectId: "nextjs-expo-integration",
  storageBucket: "nextjs-expo-integration.firebasestorage.app",
  messagingSenderId: "352108863865",
  appId: "1:352108863865:web:1d49d75df5de4a15f30fa8",
  measurementId: "G-1Z8D6FFX6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in the client-side (browser)
let analytics;
if (typeof window !== "undefined" && typeof window.document !== "undefined") {
  analytics = getAnalytics(app);
}

const messaging = getMessaging(app);

export { app, analytics, messaging };
