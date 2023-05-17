
import { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { ListItem } from "@rneui/themed";
import * as Font from 'expo-font';

export default function Vastaus() {
    
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

    if (!fontsLoaded) {
        return null;
      }
            
    return(
        <View style={styles.container} >
             <Image source={require('./assets/logo.png')} style={styles.logo}/>
            <ScrollView>
            <ListItem.Content style={styles.list}>
                <ListItem.Title style={styles.header}>
                    <Text >01/PET</Text>
                </ListItem.Title>                
                    <Text style={styles.text}>
                        Esim. virvoitusjuoma- ym. pullot. Lajittele 01 PET pakkaukset muovinkeräykseen, pantilliset pullot pullonpalautukseen.
                    </Text>
                
                <ListItem.Title style={styles.header}>
                    <Text >02/PE-HD</Text>
                </ListItem.Title>
                    <Text style={styles.text}>Esim. mehupullot ja virvoitusjuomakorit. Lajittele 02 PE-HD pakkaukset muovinkeräykseen, muut PE-HD-muoviset tavarat vie Sortti-asemalle.</Text>
                
                <ListItem.Title style={styles.header}>
                    <Text>03/PVC</Text>
                </ListItem.Title>
                    <Text style={styles.text}>Esim. Putket, letkut ja rakennusmateriaalit. Lajittele 03 PVC pakkaukset muovinkeräykseen, muut PVC-muoviset tavarat sekajätteeseen.</Text>
                
                <ListItem.Title style={styles.header}>
                    <Text>04/PE-LD</Text>
                </ListItem.Title>
                    <Text style={styles.text}>Esim. Muovikassit, pussit ja kalvot. Lajittele 04 PE-LD pakkaukset muovinkeräykseen, muut PE-LD-muoviset tavarat vie Sortti-asemalle.</Text>
                
                <ListItem.Title style={styles.header}>
                    <Text>05/PP</Text>
                </ListItem.Title>    
                    <Text style={styles.text}>Esim. narut, rasiat, kalvot ja pehmusteet. Lajittele 05 PP pakkaukset muovinkeräykseen, muut PP-muoviset tavarat vie Sortti-asemalle.</Text>
                
                <ListItem.Title style={styles.header}>
                    <Text>06/PS</Text>
                </ListItem.Title>    
                    <Text style={styles.text}>Esim. rasiat, purkit ja pehmusteet. Lajittele muovinkeräykseen.</Text>
                
                <ListItem.Title style={styles.header}>
                    <Text>07/O</Text>
                </ListItem.Title>
                    <Text style={styles.text}>Kaikkien ylläolevien yhdistelmät ja muut materiaalit. Jos yli puolet pakkauksesta on muovia lajittele muovinkeräykseen.</Text>
            </ListItem.Content>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    header: {
        color: 'green',
        fontWeight: '500',
        padding: 3,
        marginTop: 15,
        
    },
    logo: {
        width: '100%',
        height: 150,    
      },
    text: {
      fontFamily: 'Quicksand-Regular',
      fontWeight: '600'
    },
    input: {
      padding: 10
    },

  });