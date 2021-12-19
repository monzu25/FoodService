import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { initializeApp } from 'firebase/app'

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { theme } from './src/infrastructure/theme'
import { Navigation } from './src/infrastructure/navigation'

// import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'

// Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBTx0s-UPtYJoM_7Vxv_n0BH3AZqHUoJTY',
  authDomain: 'foodshops-e396f.firebaseapp.com',
  projectId: 'foodshops-e396f',
  storageBucket: 'foodshops-e396f.appspot.com',
  messagingSenderId: '887513066604',
  appId: '1:887513066604:web:a333a13a3d48b125c1fc49',
}

const app = initializeApp(firebaseConfig)

// const app = initializeApp(firebaseConfig)

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
