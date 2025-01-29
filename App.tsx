import { Spinner } from '@core'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-ExtraLight': require('./assets/fonts/PlaypenSans-ExtraLight.ttf'),
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'PlaypenSans-Bold', fontSize: 24 }}>
        Wenas, CHORIPAN
      </Text>
      <Text style={{ fontFamily: 'PlaypenSans-ExtraLight', fontSize: 24 }}>
        Wenas, CHORIPAN
      </Text>
      <Text style={{ fontFamily: 'PlaypenSans-Regula', fontSize: 24 }}>
        Wenas, CHORIPAN
      </Text>
      <StatusBar style='auto' />
      <Spinner />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ba773',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
