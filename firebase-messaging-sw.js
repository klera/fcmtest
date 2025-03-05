// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js');

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCF7GLPK0n1sIzQmiAulzSaj7A8bOa7KOU",
  authDomain: "busferdriver.firebaseapp.com",
  projectId: "busferdriver",
  storageBucket: "busferdriver.firebasestorage.app",
  messagingSenderId: "832059599533",
  appId: "1:832059599533:web:6c9f2f30d516a8360df424",
  measurementId: "G-KBP5YW9D8N"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
