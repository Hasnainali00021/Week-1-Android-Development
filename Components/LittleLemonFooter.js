import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'black', fontStyle: 'italic',  }}>
        All Rights Reserved by Little Lemon 2022.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: 'yellow'
    
  },
});
