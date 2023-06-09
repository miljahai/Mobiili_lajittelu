import { Button, Icon } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import * as Font from 'expo-font';


export default function Etusivu({navigation}) {
  
  const [koodi, setKoodi] = useState('');
  const [teksti,setTeksti] =useState('');
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


  const LueKoodi = () => {    
        
    if (koodi == '01' || koodi == 'PET') {
      setTeksti('Lajittele 01 PET pakkaukset muovinkeräykseen, pantilliset pullot pullonpalautukseen.');
        
    }else if (koodi === '02' || koodi === 'PE-HD') {
        setTeksti('Lajittele 02 PE-HD pakkaukset muovinkeräykseen, muut PE-HD-muoviset tavarat vie Sortti-asemalle.');
    }else if (koodi === '03' || koodi === 'PVC') {
          setTeksti('Lajittele 03 PVC pakkaukset muovinkeräykseen, muut PVC-muoviset tavarat sekajätteeseen');
             
    }else if (koodi === '04' || koodi === 'PE-LD') {
        setTeksti('Lajittele 04 PE-LD pakkaukset muovinkeräykseen, muut PE-LD-muoviset tavarat vie Sortti-asemalle.');
         
    }else if (koodi === '05' || koodi === 'PP') {
        setTeksti('Lajittele 05 PP pakkaukset muovinkeräykseen, muut PP-muoviset tavarat vie Sortti-asemalle.');
       
    }else if (koodi === '06' || koodi === 'PS') {
        setTeksti('Lajittele 06 PS muovinkeräykseen.');
    }else if (koodi === '07' || koodi=== 'O'){
        setTeksti('Jos yli puolet pakkauksesta on muovia lajittele muovinkeräykseen.');
    } else {
       setTeksti('Tuntematon koodi. Löydät lisätietoa kierrätyksestä osoitteesta www.hsy.fi');
    }
    setKoodi('');
  }

  const nollaus = () => {
    setTeksti('');
  }

  if (!fontsLoaded) {
    return null;
  }

  else if (!teksti) {
    return (
      <View style={styles.container} >      

      <Image source={require('./assets/logo.png')} style={styles.logo}/>

      <Text style={styles.text}>Kierrätetään yhdessä muovipakkaukset oikein.
        Syötä pakkauksesta löytyvä koodi hakukenttään ja kerromme sinulle mihin jäteastiaan se kuuluu.</Text>

      <TextInput style={styles.input} placeholder='Syötä koodi' onChangeText={text => setKoodi(text)} value={koodi}/>
      <Button style={styles.hakuButton} onPress={LueKoodi}>Hae<Icon name='search' color='white'/></Button> 

  </View>
    )
  }

  return (
    <View style={styles.container} >
    
    <Image source={require('./assets/logo.png')} style={styles.logo}/>

        <Text style={styles.text}>Kierrätetään yhdessä muovipakkaukset oikein.
          Syötä pakkauksesta löytyvä koodi hakukenttään ja kerromme sinulle mihin jäteastiaan se kuuluu.</Text>

        <TextInput style={styles.input} placeholder='Syötä koodi' onChangeText={text => setKoodi(text)} value={koodi}/>
        <Button style={styles.hakuButton} onPress={LueKoodi}>Hae<Icon name='search' color='white'/></Button> 

        <View style={styles.vastausContainer}>
          <Text style={styles.vastaus}>{teksti}</Text>
        </View>

        <View>
          <Button onPress={nollaus}>Tyhjennä</Button>
        </View>


    </View>

    
  );
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
    padding: 20,
    fontFamily: 'Quicksand-Regular',
    fontSize: 17,
    width: '40%'
  },
  vastausContainer: {
    backgroundColor: '#99d98c',
    padding: 10,
    margin: 30
  },
  vastaus: {
    fontWeight: 'bold',
    padding: 9,
    fontFamily: 'Quicksand-Regular'
  },

  hakuButton: {
    width: 10,
  
  },
  linkContainer: {
    padding: 10
  },
  link: {
    padding: 10
  }
});