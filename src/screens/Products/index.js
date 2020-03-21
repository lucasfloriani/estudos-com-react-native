import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native'
import { useDebounce } from 'use-debounce'
import axios from 'axios'
import styles from './style'

function Products({ navigation }) {
  const [search, setSearch] = useState('')
  const [searched] = useDebounce(search, 500)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (loading) return
    setLoading(true)
    const getProducts = async () => {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${searched}`)
      setProducts(response.data.results)
      setLoading(false)
    }
    getProducts()
  }, [searched])

  function renderProduct({ item }) {
    return (
      <TouchableOpacity
        style={styles.product}
        activeOpacity={0.6}
        onPress={() => { navigation.navigate('Product', { product: item }) }}
      >
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productContent}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>R$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSearch}
        placeholder="O que você procura"
        placeholderTextColor="#2d3436"
        style={styles.search}
      />

      {loading && <ActivityIndicator size="large" />}

      {!products.length && !loading && <Text style={styles.empty}>Nenhum produto encontrado.</Text>}

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </View>
  )
}


export default Products
