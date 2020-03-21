import { StyleSheet } from 'react-native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: isIphoneX() ? getStatusBarHeight() + 24 : 24,
  },

  search: {
    borderRadius: 6,
    height: 48,
    backgroundColor: '#f1c401',
    marginBottom: 24,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  empty: {
    fontSize: 16,
  },

  product: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 6,
    marginBottom: 16,
    flexDirection: 'row',
  },

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
