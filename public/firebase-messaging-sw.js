importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnUBg3kR5Nf2U-BgpRHBh6tCoDEV11X1w",
  authDomain: "wisesocial-29487.firebaseapp.com",
  projectId: "wisesocial-29487",
  storageBucket: "wisesocial-29487.firebasestorage.app",
  messagingSenderId: "1024197308240",
  appId: "1:1024197308240:web:7e876d69a5543517010655"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Xử lý thông báo khi app ở chế độ background
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
