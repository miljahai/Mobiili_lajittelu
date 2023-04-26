import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

/*
const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('.assets/fonts/Quicksand.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

containeriin: onLayout={onLayoutRootView}


  */

/* 
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
*/

const Vastaus = ({route}) => {
    const {koodi} = route.params;

    
        let teksti = '';

        if ({koodi} === '01' || {koodi} === 'PET') {
            teksti = 'Lajittele 01 PET muovinkeräykseen.';
        }else if ({koodi} === '02' || {koodi} === 'PE-HD') {
            teksti='Lajittele 02 PE-HD pakkaukset muovinkeräykseen, muut PE-HD-muoviset tavarat vie Sortti-asemalle';
        }else if ({koodi} === '03' || {koodi} === 'PVC') {
            teksti='Lajittele 03 PVC pakkaukset muovinkeräykseen, muut PVC-muoviset tavarat sekajätteeseen';
        }else if ({koodi} === '04' || {koodi} === 'PE-LD') {
            teksti='Lajittele 04 PE-LD pakkaukset muovinkeräykseen, muut PE-LD-muoviset tavarat vie Sortti-asemalle.';
        }else if ({koodi} === '05' || {koodi} === 'PP') {
            teksti='Lajittele 05 PP pakkaukset muovinkeräykseen, muut PP-muoviset tavarat vie Sortti-asemalle.';
        }else if ({koodi} === '06' || {koodi} === 'PS') {
            teksti='Lajittele 06 PS muovinkeräykseen.';
        }else if ({koodi} === '07' || {koodi}=== 'O'){
            teksti='Jos yli puolet pakkauksesta on muovia lajittele muovinkeräykseen.';
        } else {
            teksti='Tuntematon koodi. Löydät lisätietoa kierrätyksestä osoitteesta www.hsy.fi';
        }
        return <Text>{teksti}</Text>;
};
export default Vastaus;

if (koodi == '01' || koodi == 'PET') {
    return (
     <View>
         <Text>Lajittele 01 PET muovinkeräykseen.</Text>
     </View>
    )
 }else if (koodi === '02' || koodi === 'PE-HD') {
     return (
         <View>
             <Text>Lajittele 02 PE-HD pakkaukset muovinkeräykseen, muut PE-HD-muoviset tavarat vie Sortti-asemalle</Text>
         </View>
        )
 }else if (koodi === '03' || koodi === 'PVC') {
         return (
             <View>
                 <Text>Lajittele 03 PVC pakkaukset muovinkeräykseen, muut PVC-muoviset tavarat sekajätteeseen</Text>
             </View>
            )
 }else if (koodi === '04' || koodi === 'PE-LD') {
     return (
         <View>
             <Text>Lajittele 04 PE-LD pakkaukset muovinkeräykseen, muut PE-LD-muoviset tavarat vie Sortti-asemalle.</Text>
         </View>
        )
 }else if (koodi === '05' || koodi === 'PP') {
     return (
         <View>
             <Text>Lajittele 05 PP pakkaukset muovinkeräykseen, muut PP-muoviset tavarat vie Sortti-asemalle.</Text>
         </View>
        )
 }else if (koodi === '06' || koodi === 'PS') {
     return (
         <View>
             <Text>Lajittele 06 PS muovinkeräykseen.</Text>
         </View>
        )
 }else if (koodi === '07' || koodi=== 'O'){
     return (
         <View>
             <Text>Jos yli puolet pakkauksesta on muovia lajittele muovinkeräykseen.</Text>
         </View>
        )
 } else {
     return (
         <View>
             <Text>Tuntematon koodi. Löydät lisätietoa kierrätyksestä osoitteesta www.hsy.fi</Text>
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
  
    },
    text: {
      margin: 9
    },
    input: {
      padding: 10
    }
  });