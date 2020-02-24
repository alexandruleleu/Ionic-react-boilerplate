import React from 'react';
import { IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import { close } from 'ionicons/icons';

class Restaurant extends React.Component {
    state = {
        opened: false
    };

    onClosePress = () => {
        this.props.onClosePress();
        this.setState({
            opened: false
        });
    };

    render() {
        const { data } = this.props;
        const { opened } = this.state;
        return (
            <div
                style={{
                    backgroundColor: 'white',
                    position: 'absolute',
                    width: '100vw',
                    height: opened ? 'calc(100vh - 113px)' : 75,
                    bottom: data ? 0 : -200,
                    zIndex: 1000,
                    transition: '.5s all'
                }}
            >
                {opened ? (
                    <ExpandedRestaurantContent
                        data={data}
                        onClosePress={this.onClosePress}
                    />
                ) : (
                    <MinimizedRestaurantContent
                        data={data}
                        onClosePress={this.onClosePress}
                        onAllDetailsPress={() =>
                            this.setState({
                                opened: true
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

const MinimizedRestaurantContent = props => {
    const { data, onAllDetailsPress, onClosePress } = props;
    return (
        <div
            style={{
                height: '100%',
                padding: 15,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <span
                style={{
                    position: 'absolute',
                    right: 15,
                    top: 15,
                    cursor: 'pointer'
                }}
                onClick={onClosePress}
            >
                <IonIcon icon={close} />
            </span>
            <p
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    margin: 0,
                    fontSize: 16
                }}
            >
                {data && data.title}
            </p>
            <p
                style={{
                    color: 'rgb(250, 94, 0)',
                    textAlign: 'center',
                    margin: 0,
                    textTransform: 'uppercase',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 12,
                    cursor: 'pointer'
                }}
                onClick={onAllDetailsPress}
            >
                See all details
            </p>
        </div>
    );
};

const ExpandedRestaurantContent = props => {
    const { data, onClosePress } = props;
    return (
        <div
            style={{
                padding: '40px 15px'
            }}
        >
            <span
                style={{
                    position: 'absolute',
                    right: 15,
                    top: 15,
                    cursor: 'pointer'
                }}
                onClick={onClosePress}
            >
                <IonIcon icon={close} />
            </span>
            <div
                style={{
                    backgroundImage:
                        'url(https://lh3.googleusercontent.com/proxy/5hvxbHspvbfzHYiRi6pdsmkg3dOSsBUQEaxFgsmnbKP4RfPXjuw7y9SsoXHCUqmef1jK3Wua0ac_8WFRP-4BGlIMzlWlu7Y)',
                    height: 150,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            />
            <p
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 20
                }}
            >
                {data && data.title}
            </p>
            {/*-- List of Text Items --*/}
            <IonList>
                <IonItem>
                    <IonLabel>Pokémon Yellow</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Mega Man X</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>The Legend of Zelda</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Pac-Man</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Super Mario World</IonLabel>
                </IonItem>
            </IonList>
        </div>
    );
};

export default Restaurant;
