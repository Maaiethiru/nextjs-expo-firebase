importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD3xV_AHqNs4xjZ-OVMAp-7fZeeZSSSiWg",
  authDomain: "nextjs-expo-integration.firebaseapp.com",
  projectId: "nextjs-expo-integration",
  storageBucket: "nextjs-expo-integration.firebasestorage.app",
  messagingSenderId: "352108863865",
  appId: "1:352108863865:web:1d49d75df5de4a15f30fa8",
  measurementId: "G-1Z8D6FFX6D"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
