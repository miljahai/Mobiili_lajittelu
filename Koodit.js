
import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Font from 'expo-font';

export default function Vastaus( {route} ) {
    
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      async function loadFonts() {
        await Font.loadAsync({
          'Quicksand-Regular': {
            uri: 'https://fonts.googleapis.com/css2?family=Quicksand&display=swap'
          },
        });
        setFontsLoaded(true);
      }
      loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null;
      }
        
    
    return(
        <View style={styles.container}>
            <Text style={styles.header}>01/PET</Text>
            <Text style={styles.text}>Esim. virvoitusjuoma- ym. pullot. Lajittele 01 PET pakkaukset muovinkeräykseen, pantilliset pullot pullonpalautukseen. </Text>

            <Text style={styles.header}>02/PE-HD</Text>
            <Text>Esim. mehupullot ja virvoitusjuomakorit. Lajittele 02 PE-HD pakkaukset muovinkeräykseen, muut PE-HD-muoviset tavarat vie Sortti-asemalle. </Text>

            <Text style={styles.header}>03/PVC</Text>
            <Text>Esim. Putket, letkut ja rakennusmateriaalit. Lajittele 03 PVC pakkaukset muovinkeräykseen, muut PVC-muoviset tavarat sekajätteeseen </Text>

            <Text style={styles.header}>04/PE-LD</Text>
            <Text>Esim. Muovikassit, pussit ja kalvot. Lajittele 04 PE-LD pakkaukset muovinkeräykseen, muut PE-LD-muoviset tavarat vie Sortti-asemalle. </Text>

            <Text style={styles.header}>05/PP</Text>
            <Text>Esim. narut, rasiat, kalvot ja pehmusteet. Lajittele 05 PP pakkaukset muovinkeräykseen, muut PP-muoviset tavarat vie Sortti-asemalle. </Text>

            <Text style={styles.header}>06/PS</Text>
            <Text>Esim. rasiat, purkit ja pehmusteet. Lajittele muovinkeräykseen.</Text>

            <Text style={styles.header}>07/O</Text>
            <Text>Kaikkien ylläolevien yhdistelmät ja muut materiaalit. Jos yli puolet pakkauksesta on muovia lajittele muovinkeräykseen. </Text>

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
        marginTop: 15
    },
    text: {
      fontFamily: 'Quicksand-Regular'
    },
    input: {
      padding: 10
    }
  });