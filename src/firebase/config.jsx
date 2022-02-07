import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA97tkHLeXVgwm-cnf9B9Al1sFzGS1LXMg",
  authDomain: "tiendakeck.firebaseapp.com",
  projectId: "tiendakeck",
  storageBucket: "tiendakeck.appspot.com",
  messagingSenderId: "121737567676",
  appId: "1:121737567676:web:3b7d0196e1bf7b7b355fb9",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)