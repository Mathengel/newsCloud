import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import { Header } from './components/common';
import NewsForm from './components/NewsForm';

class App extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={{ flex: 1, backgroundColor: '#00aced' }}>
                    <Header headerText="News Cloud" />
                    <NewsForm />
                </View>
            </Provider>
        );
    }
}

export default App;
