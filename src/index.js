import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import awsMobile from './aws-exports';
import Amplify from 'aws-amplify';
import { withAuthenticator  } from "aws-amplify-react";
import registerServiceWorker from './serviceWorker';


Amplify.configure(awsMobile);
const AppWithAuth = withAuthenticator(App)
ReactDOM.render(<AppWithAuth />, document.getElementById('root'));



serviceWorker.unregister();
