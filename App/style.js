import React, { StyleSheet } from 'react-native'
import { colors, fonts } from './theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  input:{
    height: 45,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.secondary,
    fontFamily: fonts.light
  },
  select:{
    height: 45,
    borderWidth: 0,
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontFamily: fonts.light
  }
})