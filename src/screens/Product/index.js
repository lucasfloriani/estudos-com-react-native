import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

function Product({ navigation, route }) {
  const { product } = route.params

  return (
    <View style={{ marginTop: 64 }}>
      <Text>{product.title}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Product
