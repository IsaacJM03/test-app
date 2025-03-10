import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Home from '../assets/icons/Home'
import { theme } from '../constants/theme'

const Login = () => {
  return (
    <ScreenWrapper>
      <Text>Login</Text>
      <Home strokeWidth={2} color={theme.colors.primary}/>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})