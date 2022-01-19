import { initializeApp } from 'firebase/app';
import {
    getDoc,
    getFirestore,
    collection,
    setDoc,
    addDoc,
    getDocs,
    query,
    where,
    doc,
    runTransaction,
    writeBatch
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA97tkHLeXVgwm-cnf9B9Al1sFzGS1LXMg",
    authDomain: "tiendakeck.firebaseapp.com",
    projectId: "tiendakeck",
    storageBucket: "tiendakeck.appspot.com",
    messagingSenderId: "121737567676",
    appId: "1:121737567676:web:3b7d0196e1bf7b7b355fb9"
};


// Initialize Firebase
initializeApp(firebaseConfig);
// Getting db
const db = getFirestore();

class FirebaseUtils {
    static isValidString(field) {
        return typeof field === 'string' && field !== '';
    }

    static isValid(field) {
        return field !== '';
    }

    static isValidOptions(options) {
        if (typeof options === 'object') {
            const isValidField = this.isValidString(options.field);
            const isValidCondition = this.isValidString(options.condition);
            const isValidValue = this.isValid(options.value);
            return isValidField && isValidCondition && isValidValue;
        }
        return false;
    }
}

export class Firebase {
    static getCollection(...pathSegments) {
        return collection(db, ...pathSegments);
    }

    static getDoc(...pathSegments) {
        return doc(db, ...pathSegments);
    }

    static get(path) {
        const pathSegments = path.split('/');
        const ref = this.getDoc(...pathSegments);
        return getDoc(ref);
    }

    static getAll(path, options) {
    const pathSegments = path.split('/');
    const ref = this.getCollection(...pathSegments);

    const isValid = FirebaseUtils.isValidOptions(options);
    if (isValid) {
        return getDocs(
        query(ref, where(options.field, options.condition, options.value))
        );
    }
        return getDocs(ref);
    }

    static set(path, obj) {
        const pathSegments = path.split('/');
        return setDoc(this.getDoc(...pathSegments), obj);
    }

    static add(path, obj) {
        const pathSegments = path.split('/');
        const ref = this.getCollection(...pathSegments);
        return addDoc(ref, obj);
    }

    static transaction(asyncFunc) {
        return runTransaction(db, asyncFunc);
    }

    static batch() {
        return writeBatch(db);
    }
}