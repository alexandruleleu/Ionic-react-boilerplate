import React from 'react';
import { Marker } from 'react-map-gl';

const ICON = `M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z`;

const SIZE = 20;

class Pins extends React.Component {
    render() {
        const { data, onCancel, onClick, selectedPin } = this.props;
        return (
            data &&
            data.map((pin, index) => (
                <Marker
                    key={`marker-${index}`}
                    longitude={pin.longitude}
                    latitude={pin.latitude}
                >
                    <div
                        style={{
                            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                        }}
                    >
                        <svg
                            height={SIZE}
                            viewBox="0 0 512 512"
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fill: '#fa5e00',
                                stroke: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => onClick && onClick(pin)}
                        >
                            <path d={ICON} />
                        </svg>
                        {selectedPin === pin && (
                            <div onClick={onCancel}>
                                <div
                                    style={{
                                        zIndex: 9,
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor:
                                            'rgba(226, 70, 70, .5)',
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%'
                                    }}
                                />
                                <div
                                    style={{
                                        zIndex: 8,
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor:
                                            'rgba(226, 70, 70, .2)',
                                        width: 100,
                                        height: 100,
                                        borderRadius: '50%'
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </Marker>
            ))
        );
    }
}

export default Pins;