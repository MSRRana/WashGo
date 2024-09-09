import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import MainRoutes from './src/routes/routes';
import {Provider as StoreProvider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reduxFolder/reduces';

// import {Provider} from 'react-native-paper';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <SafeAreaView style={{flex: 1}}>
      <StoreProvider store={store}>
        <MainRoutes />
      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
