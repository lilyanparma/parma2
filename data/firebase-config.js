// =================================================================
// == ملف إعدادات Firebase المشترك - Pharmacy System ==
// =================================================================

// أولاً: قم بوضع معلومات مشروعك في Firebase هنا
// الرجاء استخدام مفاتيح جديدة وآمنة من حسابك في Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDiTwj4qfb8OuuGDXe1U5oIRO3VLpJltLM", //
  authDomain: "pharmacy1-18242.firebaseapp.com",
  databaseURL: "https://pharmacy1-18242-default-rtdb.firebaseio.com", //
  projectId: "pharmacy1-18242", //
  storageBucket: "pharmacy1-18242.firebasestorage.app", //
  messagingSenderId: "444657564226", //
  appId: "1:444657564226:web:9364f4b43f02adecd3cbdb", //
};

// ثانياً: تهيئة تطبيق Firebase
firebase.initializeApp(firebaseConfig);

// ثالثاً: إنشاء متغير مشترك للوصول إلى قاعدة البيانات
// هذا المتغير (database) سيكون متاحاً في جميع الصفحات التي تستدعي هذا الملف
const database = firebase.database();

console.log("Firebase has been initialized from firebase-config.js");
