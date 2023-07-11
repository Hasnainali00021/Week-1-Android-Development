import * as React from 'react';
import { ScrollView, View } from 'react-native';

import LittleLemonHeader from './Components/LittleLemonHeader.js';
// import LittleLemonFooter from './Components/LittleLemonFooter.js';
import WelcomeScreen from './Components/WelcomeScreen.js';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#495E57' }}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
        {/* <LittleLemonFooter /> */}
      </View>
    </>
  );
}
