import { StyleSheet } from 'react-native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
  productImage: {
    height: 64,
    width: 64,
    marginRight: 16,
  },

  productContent: {
    flex: 1,
  },

  productTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  productPrice: {
    fontSize: 16,
    marginTop: 8,
  },
})
