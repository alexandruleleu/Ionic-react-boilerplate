import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';

import * as serviceWorker from './serviceWorker';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './assets/theme/variables.css';

/* Main Sass file*/
import './assets/sass/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// ---------------------------
// Enable Service Worker -> PWA
// ---------------------------
serviceWorker.unregister();
