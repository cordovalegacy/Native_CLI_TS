/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'

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
        style={backgroundStyle}>
        <View
          style={[
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
            styles.screen
          ]}>
          <View style={[styles.screen, styles.headerContainer]}>
            <Text style={styles.header}>Hello World</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#000041",
    padding: 5,
    borderRadius: 10,
    width: "90%",
    marginLeft: "5%",
    marginTop: 10
  },
  header: {
    color: "white",
    textAlign: "center",
    margin: 10,
    fontSize: 20
  }
})

export default App
