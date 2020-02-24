import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//routes
import {
    ROUTE_DEFAULT,
    ROUTE_HOME,
    ROUTE_LOGIN,
    ROUTE_REGISTRATION
} from '../../../utils/routes';

//components
import Login from '../../pages/login';
import Registration from '../../pages/registration';
import Home from '../../pages/home';
import MainLayout from '../../../components/mainLayout';
import PrivateRoute from '../../../components/privateRoute';

// -----------------------
// App Router Component
// -----------------------
const Router = () => {
    return (
        <Switch>
            <Route
                exact
                path={ROUTE_LOGIN}
                render={props => (
                    <MainLayout {...props}>
                        <Login />
                    </MainLayout>
                )}
            />
            <Route
                exact
                path={ROUTE_REGISTRATION}
                render={props => (
                    <MainLayout {...props}>
                        <Registration />
                    </MainLayout>
                )}
            />
            <PrivateRoute name="home" path={ROUTE_HOME} component={Home} />
            <Route
                path={ROUTE_DEFAULT}
                exact
                render={() => <Redirect to={ROUTE_HOME} />}
            />
        </Switch>
    );
};

export default Router;
