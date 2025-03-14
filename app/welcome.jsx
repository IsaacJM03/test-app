import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import {theme} from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <View style={styles.container}>
          {/*welcome image*/}
          <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome2.png')} />

          {/*title*/}
          <View style={{gap: 20}}>
            <Text style={styles.title}>Christ Praises</Text>
            <Text style={styles.punchline}>“And they overcame him by the blood of the Lamb and by the word of their testimony, and they did not love their lives to the death.”</Text>
            <Text style={{fontSize: hp(1.8),textAlign:'center',fontWeight:theme.fonts.medium}}>Revelation 12:11</Text>
          </View>

          {/*footer*/}
          <View style={styles.footer}>
            <Button 
                title="Getting Started"
                buttonStyle={{marginHorizontal: wp(3)}}
                onPress={()=>router.push('signUp')}
            />

            <View style={styles.bottomTextContainer}>
              <Text style={styles.loginText}>Already have an account?
              </Text>
              <Text></Text>
              <Pressable onPress={()=>router.push('login')}>
                <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight:theme.fonts.semibold}]}>Login</Text>
              </Pressable>
            </View>
          </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.9),
    color: theme.colors.text,
    fontWeight: theme.fonts.semibold
  },
  footer: {
    gap: 30,
    width: '100%',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: theme.colors.text,
    fontSize: hp(1.7),
  }
})