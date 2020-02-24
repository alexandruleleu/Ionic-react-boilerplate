import React from 'react';
import { IonPage } from '@ionic/react';
import { geolocated } from 'react-geolocated';
import ReactMapGL from 'react-map-gl';

import Pins from '../../../components/pins';
import {
    MAPBOX_API_TOKEN,
    RESTAURANTS_API_ENDPOINT
} from '../../../utils/constants';
import Restaurant from '../../../components/restaurant';

const dummyCenter = { latitude: 52.5321472, longitude: 13.3935785 };

class Tab3 extends React.Component {
    state = {
        restaurants: null,
        selectedRestaurant: false,
        viewport: {
            latitude:
                (this.props.coords && this.props.coords.latitude) ||
                dummyCenter.latitude,
            longitude:
                (this.props.coords && this.props.coords.longitude) ||
                dummyCenter.longitude,
            zoom: 14,
            bearing: 0,
            pitch: 0
        }
    };

    componentDidMount() {
        const { coords } = this.props;
        const { viewport } = this.state;
        if (coords) {
            const { latitude, longitude } = coords;
            this.setState({
                viewport: {
                    ...viewport,
                    latitude,
                    longitude
                }
            });
        }

        fetch(RESTAURANTS_API_ENDPOINT)
            .then(blob => blob.json())
            .then(data => {
                const mappedRestaurants = data.results.items.map(
                    restaurant => ({
                        latitude: restaurant.position[0],
                        longitude: restaurant.position[1],
                        title: restaurant.title
                    })
                );
                this.setState({
                    restaurants: mappedRestaurants
                });
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { coords } = this.props;
        const { viewport } = this.state;
        if (coords && prevProps.coords !== this.props.coords) {
            const { latitude, longitude } = coords;
            this.setState({
                viewport: {
                    ...viewport,
                    latitude,
                    longitude
                }
            });
        }
    }

    render() {
        const { viewport, restaurants, selectedRestaurant } = this.state;
        return (
            <IonPage>
                <ReactMapGL
                    {...viewport}
                    width="100vw"
                    height="100vh"
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    mapboxApiAccessToken={MAPBOX_API_TOKEN}
                    onViewportChange={vp => {
                        this.setState({
                            viewport: {
                                ...viewport,
                                ...vp
                            }
                        });
                    }}
                >
                    <Pins
                        data={restaurants}
                        onCancel={() =>
                            this.setState({
                                selectedRestaurant: null
                            })
                        }
                        onClick={pin =>
                            this.setState({
                                selectedRestaurant: pin
                            })
                        }
                        selectedPin={selectedRestaurant}
                    />
                </ReactMapGL>
                <Restaurant
                    onClosePress={() =>
                        this.setState({
                            selectedRestaurant: null
                        })
                    }
                    data={selectedRestaurant}
                />
            </IonPage>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(Tab3);
