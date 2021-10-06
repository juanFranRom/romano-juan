import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyAiUgMOjFgWV47pGJsuEpYaMh_U5Sn_4-w",
    authDomain: "carnes-a-rolette.firebaseapp.com",
    projectId: "carnes-a-rolette",
    storageBucket: "carnes-a-rolette.appspot.com",
    messagingSenderId: "236222115586",
    appId: "1:236222115586:web:eb7c9c1128ba324b865c1b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getItems = async () => {
    const docsRef = collection(db, 'Items');
    const docsSnap = await getDocs(docsRef);
    const result = docsSnap.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return result;
}

export const getItem = async ( id = 'CKsqJvzBzqbNdq3xZZm5' ) => {
    const docRef = doc(db, 'Items', id)
    const docSnap = await getDoc(docRef)
    const result = {
        id: docSnap.id,
        ...docSnap.data()
    }
    return result;
}

export const getCategory = async ( category ) => {
    const q = query(collection(db, "Items"), where("category", "==", category));
    const docsSnap = await getDocs(q);
    const result = docsSnap.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return result;
}