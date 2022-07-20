import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCq2G6C1_uwW--WB0hY9UgItiebSe0W0o",
  authDomain: "ecommercedefran.firebaseapp.com",
  projectId: "ecommercedefran",
  storageBucket: "ecommercedefran.appspot.com",
  messagingSenderId: "79729306865",
  appId: "1:79729306865:web:a116b666e28c4e7776cd50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
}
