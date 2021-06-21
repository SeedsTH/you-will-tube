import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyBJedKzAozE0IvBsb4EpuK1_3Fj6Fi6BXw",
   authDomain: "you-not-tude.firebaseapp.com",
   projectId: "you-not-tude",
   storageBucket: "you-not-tude.appspot.com",
   messagingSenderId: "958331322124",
   appId: "1:958331322124:web:0a519f2e9996b86e469329"
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
