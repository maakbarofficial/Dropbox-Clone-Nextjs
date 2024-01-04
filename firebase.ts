import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDO_5zsXDl_fOO1VEPoV--HO4TIHqO6Es4",
  authDomain: "dropbox-clone-nextjs-1aa13.firebaseapp.com",
  projectId: "dropbox-clone-nextjs-1aa13",
  storageBucket: "dropbox-clone-nextjs-1aa13.appspot.com",
  messagingSenderId: "446567753052",
  appId: "1:446567753052:web:9f6ce3cc31482dd0674d99",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
