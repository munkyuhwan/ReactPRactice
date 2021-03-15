import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BulletinContainer from './Containers/Bulletin/BulletinListContainer';

import bulletinReducer from './Reducers/Bulletin'

const bulletinStore = createStore(bulletinReducer);

const BulletinApp=() => {
    return(
        <Provider store={bulletinStore} >
            <BulletinContainer/>
        </Provider>
    )
};


export default BulletinApp;

