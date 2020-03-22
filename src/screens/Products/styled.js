import React from 'react'
import styled from 'styled-components/native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background-color: #ecf0f1;
  flex: 1;
  padding-horizontal: 24px;
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 24 : 24}px;
`

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'O que você procura',
  placeholderTextColor: '#2d3436',
})`
  border-radius: 6px;
  height: 48px;
  background-color: #f1c401;
  margin-bottom: 24px;
  padding-horizontal: 16px;
  font-size: 16px;
`

export const EmptyList = styled.Text`
  font-size: 16px;
`

export const Product = styled.TouchableOpacity.attrs({ activeOpacity: 0.6 })`
  background-color: #fff;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  flex-direction: row;
`