/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome to React Native (Again)!
        </Text>
      </View>
    );
  }
}

class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80,
  },
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
