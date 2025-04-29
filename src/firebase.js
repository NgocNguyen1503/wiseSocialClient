import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAnUBg3kR5Nf2U-BgpRHBh6tCoDEV11X1w",
  authDomain: "wisesocial-29487.firebaseapp.com",
  projectId: "wisesocial-29487",
  storageBucket: "wisesocial-29487.firebasestorage.app",
  messagingSenderId: "1024197308240",
  appId: "1:1024197308240:web:7e876d69a5543517010655"
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Cloud Messaging
const messaging = getMessaging(app);

// Request notification permission from user.
export const requestPermission = async () => {
    try {
        const currentToken = await getToken(messaging, {
            vapidKey: "BMIIBOorrG8_h0emiCi4rs80jSQF0T5vDSxRnNMmyg4y_VS9l6lNizouXfJKyXOFMG98e_haDfQSpNVV0qDU0AM",
          });
        return currentToken;
    } catch (error) {
        console.error("Cannot get token: :", error);
    }
};

// Listen for messages from FCM while the page is open
export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("Message received:", payload);
        resolve(payload);
      });
    });

// Export messing as use.
export { app, messaging };