import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import LittleLemonHeader from './Components/LittleLemonHeader.js';
import LittleLemonFooter from './Components/LittleLemonFooter.js';
import WelcomeScreen from './Components/WelcomeScreen.js';
// import MenuItems from './Components/MenuItems.js';

export default function App() {
  return (
    <>
      <View style={ styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItems / > */}
      </View>
      <View style={ styles.innerContainer }>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#495E57' },
  innerContainer: { flex: 0.2, backgroundColor: '#495E57' },
})
