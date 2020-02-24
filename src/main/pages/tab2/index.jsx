import React from 'react';
import {
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

const Tab2 = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab Two</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLabel>Tab two</IonLabel>
            </IonContent>
            <IonContent>
                <IonLabel>Tab two</IonLabel>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
