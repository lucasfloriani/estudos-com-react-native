import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Image,
} from 'react-native'
import { useDebounce } from 'use-debounce'
import axios from 'axios'
import styles from './style'

import {
  Container,
  EmptyList,
  Product,
  SearchInput,
} from './styled'

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
      <Product onPress={() => { navigation.navigate('Product', { product: item }) }}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productContent}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>R$ {item.price}</Text>
        </View>
      </Product>
    )
  }

  return (
    <Container>
      <SearchInput onChangeText={setSearch} />

      {loading && <ActivityIndicator size="large" />}

      {!products.length && !loading && <EmptyList>Nenhum produto encontrado.</EmptyList>}

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  )
}

export default Products
