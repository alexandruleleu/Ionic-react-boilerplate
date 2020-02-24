import React from 'react';
import { withRouter } from 'react-router';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { ROUTE_REGISTRATION } from '../../utils/routes';

class LoginForm extends React.Component {
    render() {
        const {
            errorMessage,
            formRef,
            history,
            onSubmit,
            onChange
        } = this.props;
        return (
            <form ref={formRef} className="form-container" onSubmit={onSubmit}>
                <div>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                            name="email"
                            type="email"
                            required={true}
                            onIonChange={onChange}
                        />
                    </IonItem>
                    <IonItem style={{ marginTop: 20 }}>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput
                            name="password"
                            type="password"
                            required={true}
                            onIonChange={onChange}
                        />
                    </IonItem>
                    <ion-text color="danger">
                        <p style={{ textAlign: 'center', padding: '0 5px' }}>
                            {errorMessage}
                        </p>
                    </ion-text>
                </div>
                <div>
                    <IonButton
                        expand="full"
                        type="submit"
                        style={{ marginTop: 10 }}
                    >
                        Log in
                    </IonButton>

                    <IonButton
                        expand="full"
                        style={{ marginTop: 5 }}
                        onClick={e => {
                            e.preventDefault();
                            history.push(ROUTE_REGISTRATION);
                        }}
                    >
                        Create Account
                    </IonButton>
                </div>
            </form>
        );
    }
}

export default withRouter(LoginForm);
