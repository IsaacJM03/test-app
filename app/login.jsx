import { Alert,Pressable, StyleSheet, Text,TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp,wp } from '../helpers/common'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabase'

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading,setLoading] = useState(false); // issue with this section when changing to true

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert("Please fill all fields");
      return;
    }
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
    setLoading(true);

    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    });

    setLoading(false);
    
    console.log('error',error);
    if (error) {
      Alert.alert("Login",error.message);
      // setLoading(false);
      // return;
    }
  }
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router}/>

        {/* Welcome Text */}
        <View>
          <Text style={styles.welcomeText}>Hey,</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          {/* <Text style={{color: theme.colors.textLight}}>Sign in to continue</Text> */}
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
            Please login to continue.
          </Text>
          <Input 
            icon={<Icon name="mail"size={24} strokeWidth={1.6} 
            />}
            placeholder="Enter your email"
            onChangeText={(value) => emailRef.current = value }
          />
          <Input 
            icon={<Icon name="lock"size={24} strokeWidth={1.6} 
            />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => passwordRef.current = value }
          />
          <Text style={styles.forgotPassword}>
              Forgot Password?  
          </Text>
          <Button title={'Login'} loading={loading} onPress={onSubmit} />
        </View>

        {/* footer */}
        <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <Pressable onPress={() => router.push('signUp')}>
              <Text style={[styles.footerText,{color:theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>Sign Up</Text>
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25
  }
})