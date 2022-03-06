import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet,  View } from 'react-native';
import ProductComponent from './components/ProductComponent';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SingleProductScreen from './screens/SingleProductScreen';
import Navigator from './routes/nav'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
export default function App() {
  return (
 <Provider store={store}>
 <PersistGate persistor={persistor}>
         <Navigator style={{position:"relative"}} >
         </Navigator>
    </PersistGate>
    </Provider>
    );
}

const styles = StyleSheet.create({
  
});
