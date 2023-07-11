import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2 }}>
      <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text style={{ fontSize: 40, color: 'black', marginBottom: 20 }}>
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
