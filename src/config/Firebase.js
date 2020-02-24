import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
    apiKey: 'AIzaSyDXsQL-SNalX4wWIcoXmtoVrTiZZDAflFI',
    authDomain: 'eat-together-fii-practic.firebaseapp.com',
    databaseURL: 'https://eat-together-fii-practic.firebaseio.com',
    projectId: 'eat-together-fii-practic',
    storageBucket: 'eat-together-fii-practic.appspot.com',
    messagingSenderId: '981796192129',
    appId: '1:981796192129:web:ee50ce7704d1d9e3bb7280',
    measurementId: 'G-1W0E2V9V7V'
};

const firebaseProvider = firebase.initializeApp(config);
export default firebaseProvider;
