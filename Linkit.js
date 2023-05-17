import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function Linkit() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf')
            });
          setFontsLoaded(true);
        }
        loadFonts();
      }, []); 

    const url1 = 'https://uusiomuovi.fi/pakkaus-kiertaa/muovien-kierratys/muovien-materiaalimerkit/';
    const url2 = 'https://www.hsy.fi/jatteet-ja-kierratys/lajittelu/muovi/';
  
    /*  useEffect (() => {
        const unsubscribe = Linking.addEventListener('url', handleUrl);

        return () => unsubscribe.remove();
      }, []);

      const handleUrl = (e) => {
        e.preventDefault();
        console.log(e.url);
        
      } */

    const handlePress = (url) => {
      Linking.openURL(url);
    }

    if (!fontsLoaded) {
        return null;
      }

    return (
        <View style={styles.linkContainer}>

        <Image source={require('./assets/logo.png')} style={styles.logo}/>
            <View style={styles.link}>
                <Text >Suomen Uusiomuovin ohjeet: </Text>
                <TouchableOpacity onPress={() => handlePress(url1)}>
                    <Text style = {{ color: 'blue' }}>{url1}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.link}>
                <Text>HSY:n ohjeet: </Text>
                <TouchableOpacity onPress={() => handlePress(url2)}>
                    <Text style={{ color: 'blue' }}>{url2}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      height: 150,    
    },
    text: {
      margin: 9,    
      fontFamily: 'Quicksand-Regular'
    },
    input: {
      padding: 10,
      fontFamily: 'Quicksand-Regular',
      fontSize: 17,
      width: '40%'
    },
    vastaus: {
      fontWeight: 'bold',
      padding: 9,
      fontFamily: 'Quicksand-Regular'
    },
    button: {
      padding: 10
    },
    hakuButton: {
      width: 10
    },
    linkContainer: {
      padding: 10
    },
    link: {
      padding: 10
    }
});