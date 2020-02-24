import React, { Component } from 'react';
import { api } from '../../../api';
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTabs,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonRouterOutlet
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { apps, flash, send } from 'ionicons/icons';

import Tab1 from '../tab1';
import Tab2 from '../tab2';
import Tab3 from '../tab3';
import { ROUTE_TAB1, ROUTE_TAB2, ROUTE_TAB3 } from '../../../utils/routes';

class Home extends Component {
    render() {
        return (
            <>
                <IonHeader>
                    <IonToolbar className="home-header">
                        <IonButtons slot="end">
                            <IonButton color="dark" onClick={() => api.logout()}>
                                Sign out
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route path={ROUTE_TAB1} component={Tab1} exact />
                        <Route path={ROUTE_TAB2} component={Tab2} exact />
                        <Route path={ROUTE_TAB3} component={Tab3} exact />
                        <Route
                            path="/home"
                            exact
                            render={() => <Redirect to="/home/tab1" />}
                        />
                    </IonRouterOutlet>
                    {/* TODO - as a separate component with props*/}
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="tab1" href="/home/tab1">
                            <IonIcon icon={flash} />
                            <IonLabel>Tab One</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab2" href="/home/tab2">
                            <IonIcon icon={apps} />
                            <IonLabel>Tab Two</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab3" href="/home/tab3">
                            <IonIcon icon={send} />
                            <IonLabel>Tab Three</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </>
        );
    }
}

export default Home;