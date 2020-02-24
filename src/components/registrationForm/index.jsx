import React from 'react';
import { withRouter } from 'react-router';
import { IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import { ROUTE_LOGIN } from '../../utils/routes';

class RegistrationForm extends React.Component {
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
                        <IonLabel position="floating">First name</IonLabel>
                        <IonInput
                            name="firstName"
                            type="text"
                            required={true}
                            onIonChange={onChange}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Last name</IonLabel>
                        <IonInput
                            name="lastName"
                            type="text"
                            required={true}
                            onIonChange={onChange}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                            name="email"
                            type="email"
                            required={true}
                            onIonChange={onChange}
                        />
                    </IonItem>
                    <IonItem>
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
                        Sign up
                    </IonButton>

                    <IonButton
                        expand="full"
                        style={{ marginTop: 5 }}
                        onClick={e => {
                            e.preventDefault();
                            history.push(ROUTE_LOGIN);
                        }}
                    >
                        Back
                    </IonButton>
                </div>
            </form>
        );
    }
}

export default withRouter(RegistrationForm);
