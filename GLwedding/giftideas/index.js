//source code from https://github.com/scottanglr/wedding-gift-registry //

import React from 'react';
import ReactDOM from 'react-dom';
import 'CSS/registry.css';
import App from 'App';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
