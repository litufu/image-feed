import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ColorPropType,
 } from 'react-native';
 import PropTypes from 'prop-types'


const Avater = ({size,backgroundColor,initials})=>{
  const style={
    width:size,
    height:size,
    borderRadius:size / 2,
    backgroundColor,
  }

  return(
    <View style={[styles.container,style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
  }
});

Avater.propTypes={
  size:PropTypes.number.isRequired,
  backgroundColor:ColorPropType.isRequired,
  initials:PropTypes.string.isRequired,
}

export default Avater
