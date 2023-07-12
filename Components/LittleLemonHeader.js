import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={ headerStyles.container }>
      <View style={ headerStyles.innerContainer }>
        <Text style={ headerStyles.headerText }>
          Little Lemon
        </Text>
      </View>
      {/* 
      <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 40, paddingHorizontal: 30 }}>
        <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>
          Welcome to Little {'\n'}Lemon
        </Text>
        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', marginTop: 20 }}>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. 
          We would love to hear more about your experience with us!
        </Text>
      </View>
      */}
    </View>
  );
}

const headerStyles = StyleSheet.create ({
  container: {
    flex: 0.2
  },
  innerContainer: {
     flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'flex-end' 
  },
  headerText: {
     fontSize: 40, color: 'black', marginBottom: 20 
  }
})