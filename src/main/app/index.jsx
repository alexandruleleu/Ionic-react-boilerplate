import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonApp } from '@ionic/react';

// app router
import Router from './router';

//auth component
import AuthProvider from '../../components/auth';

// ----------------------------
// Main App - dummy component
// ----------------------------

const App = () => (
    <IonReactRouter>
        <IonApp>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </IonApp>
    </IonReactRouter>
);

export default App;
