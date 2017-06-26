import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCl_UCNl7dtRME7ppXSGiDS_EJ968UtF14',
  authDomain: 'ds-one-ad8e0.firebaseapp.com',
  databaseURL: 'https://ds-one-ad8e0.firebaseio.com',
  projectId: 'ds-one-ad8e0',
  storageBucket: '',
  messagingSenderId: '543236933323'
}

let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()

export default db
