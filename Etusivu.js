import { Button, Header, Icon } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as Font from 'expo-font';


export default function Etusivu({navigation}) {
  
  const [koodi, setKoodi] = useState('');
  const [teksti,setTeksti] =useState('');
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


  const LueKoodi = () =>{    
        
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} >
    
      <Header backgroundColor='green' centerComponent={{text: 'Muovin kierrätys', style: {color: 'white', fontSize:20, fontFamily: 'Quicksand-Regular'}}} leftComponent={<Icon type= "font-awesome" name='recycle' color='white'></Icon>}></Header>

      <Text style={styles.text}>Kierrätetään yhdessä muovipakkaukset oikein.
         Syötä pakkauksesta löytyvä koodi hakukenttään ja kerromme sinulle mihin jäteastiaan se kuuluu.</Text>

      <TextInput style={styles.input} placeholder='Syötä koodi' onChangeText={text => setKoodi(text)} value={koodi}/>
      <Button onPress={LueKoodi}>Hae<Icon name='search' color='white'/></Button> 

      <View style={styles.vastaus}>
        <Text style={styles.vastaus}>{teksti}</Text>
      </View>
      <Button title='Kaikki koodit'
      onPress={() => navigation.navigate('Koodit')}/>  
    </View>
  );
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
    margin: 9,
    
    fontFamily: 'Quicksand-Regular'
  },
  input: {
    padding: 10,
    fontFamily: 'Quicksand-Regular'
  },
  vastaus: {
    fontWeight: 'bold',
    padding: 9
  }
});