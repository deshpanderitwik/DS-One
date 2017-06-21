import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCl_UCNl7dtRME7ppXSGiDS_EJ968UtF14',
  authDomain: 'ds-one-ad8e0.firebaseapp.com',
  databaseURL: 'https://ds-one-ad8e0.firebaseio.com',
  projectId: 'ds-one-ad8e0',
  storageBucket: '',
  messagingSenderId: '543236933323'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}