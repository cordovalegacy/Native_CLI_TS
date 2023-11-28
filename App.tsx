/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

import { app } from './styles/app'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View style={[app.screen, { width: '100%', height: 900 }]}>
          <ImageBackground
            style={[app.layerBase, { position: 'absolute', zIndex: 1 }]}
            source={require('./assets/images/layer-base.png')}
          />
          <ImageBackground
            style={[app.layerMiddle, { position: 'absolute', zIndex: 10, transform: [{ translateY: 200 }] }]}
            source={require('./assets/images/firefly.svg')}
          />
          <ImageBackground
            style={[app.layerMiddle, { position: 'absolute', zIndex: 20, transform: [{ translateY: 605 }] }]}
            source={require('./assets/images/layer-middle.png')}
          />
          <ImageBackground
            style={[app.layerMiddle, { position: 'absolute', zIndex: 30, transform: [{ translateY: 625 }] }]}
            source={require('./assets/images/layer-front.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default App
