'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
  },
  image: {
    width: 400,
    height: 300,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC',
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565',
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565',
  }
})

class PropertyView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const property = this.props.property
    let stats = property.bedroom_number + ' bed ' + property.property_type

    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number === 1 ? 'bathroom' : 'bathrooms')
    }

    const price = property.price_formatted.split(' ')[0]

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: property.img_url}}
        />
        <View style={styles.heading}>
          <Text style={styles.price}>£{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.seperator}/>
        </View>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>
          {property.summary}
        </Text>
      </View>
    )
  }
}

module.exports = PropertyView;
