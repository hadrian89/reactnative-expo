// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// // import * as Font from 'expo-font';
// import React, { useState } from 'react';
// import { Platform, StatusBar, View, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';


// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/lib/integration/react'

// import createStore from './App/Stores'
// import AppNavigator from './App/Containers/Navigation/AppNavigator'
// const { store, persistor } = createStore()

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = useState(false);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return (
//       <AppLoading
//         startAsync={loadResourcesAsync}
//         onError={handleLoadingError}
//         onFinish={() => handleFinishLoading(setLoadingComplete)}
//       />
//     );
//   } else {
//     return (
//       <Provider store={store}>
//         {/**
//          * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
//          * and saved to redux.
//          * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
//          * for example `loading={<SplashScreen />}`.
//          * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
//          */}
//         <PersistGate loading={null} persistor={persistor}>
//           <AppNavigator />
//         </PersistGate>
//       </Provider>
//     );
//   }
// }

// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     // Font.loadAsync({
//     //   // This is the font that we are using for our tab bar
//     //   ...Ionicons.font,
//     //   // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//     //   // remove this if you are not using it in your app
//     //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     // }),
//   ]);
// }

// function handleLoadingError(error) {
//   // In this case, you might want to report the error to your error reporting
//   // service, for example Sentry
//   console.warn(error);
// }

// function handleFinishLoading(setLoadingComplete) {
//   setLoadingComplete(true);
// }



import React, { Component } from 'react'

import { AppLoading } from 'expo';
// import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from './App/Stores'
import LeftMenuNavigator from './App/Containers/Navigation/LeftMenuNavigator';
import BottomMenuNavigator from './App/Containers/Navigation/BottomMenuNavigator';
import AppNavigator from './App/Containers/Navigation/AppNavigator';
const { store, persistor } = createStore()

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isReady: false,
    // };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    //this.setState({ isReady: true });
  }


  render() {
    // if (!this.state.isReady) {
    //   return <AppLoading />;
    // }

    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          {/* <LeftMenuNavigator />
          <BottomMenuNavigator /> */}
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}