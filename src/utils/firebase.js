import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCg4fOVcjz07RjTz61mCE1t6uH_LpDJ494",
    authDomain: "crown-db-c3413.firebaseapp.com",
    databaseURL: "https://crown-db-c3413.firebaseio.com",
    projectId: "crown-db-c3413",
    storageBucket: "crown-db-c3413.appspot.com",
    messagingSenderId: "195744270461",
    appId: "1:195744270461:web:9ccaaf7b5a08c7d1d34914",
    measurementId: "G-4J86898RQ5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    // console.log('Client Refrence', userRef)
    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    // console.log(collectionRef)
    const batch = firestore.batch()
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        // console.log(newDocRef)
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase