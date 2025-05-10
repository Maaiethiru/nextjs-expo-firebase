# Next.js + Expo + Firebase Notifications

This project demonstrates a simple web application built with **Next.js** and **Material UI** that includes:

* **Google Sign-Up Authentication**
* **Firebase Cloud Messaging (FCM)** integration for push notifications
* **Expo Android App** using **WebView** to display the web app

---

## 🔧 Technologies Used

* **Next.js 14**
* **Material UI (MUI)**
* **Firebase (v9)**
* **Expo SDK (React Native)**

---

## 🌐 Web App Features

* Built with Next.js using app directory
* Google Sign-Up using Firebase Authentication
* Clean, responsive UI with MUI components
* Firebase push notifications via FCM

---

## 📱 Mobile App (Expo)

* Android app created using Expo
* Integrates the web version using `react-native-webview`
* Supports push notifications using `expo-notifications` + FCM

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Maaiethiru/nextjs-expo-firebase.git
cd nextjs-expo-firebase
```

### 2. Web App Setup

```bash
cd nextjs-app
npm install
npm run dev
```

Then visit: `http://localhost:3000`

### 3. Expo App Setup

```bash
cd expo-app
npm install
npx expo start
```

Use Expo Go or Android emulator to view the app.

---

## 🔔 Firebase Configuration

Ensure you:

* Set up Firebase project with Authentication & FCM enabled
* Add your Firebase config in `firebase-config.js`
* Upload the FCM key to the Expo app for notifications

---

## 📂 Project Structure

```
nextjs-expo-firebase/
├── nextjs-app/     # Web app source
├── expo-app/       # Android app source
```

---

## 📜 License

This project is created for educational and internship purposes.
