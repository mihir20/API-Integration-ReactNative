import { AppRegistry } from 'react-native';
import React from 'react'
import { Provider } from 'react-redux';
import configStore from './src/config/configStore';
import App from './src/App';

const store = configStore()

const rnapp = () =>(
    <Provider store ={store}>
      <App/>
    </Provider>
    )

AppRegistry.registerComponent('api_rn', () => rnapp);
