import React from 'react';
import logo from '../../assets/img/restaurant-circular.svg';
import { IonSpinner } from '@ionic/react';
import { AuthContext } from '../../components/auth';

//layout for login and registration components
class MainLayout extends React.Component {
    static contextType = AuthContext;
    render() {
        const { children } = this.props;

        const { currentUser } = this.context;
        if (currentUser === undefined)
            return (
                <div className="spinner-container">
                    <IonSpinner name="dots" />
                </div>
            );

        return (
            <>
                <header className="header">
                    <div>
                        <img alt="cover" src={logo} />
                    </div>
                    <div>
                        <h3>
                            eat<span>together</span>
                        </h3>
                    </div>
                </header>
                <main className="main-content">{children}</main>
            </>
        );
    }
}

export default MainLayout;
