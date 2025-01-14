import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import './src/utils/i18n' 

import { useTranslation } from 'react-i18next'
import { useRouter } from 'expo-router';

export default function Tela() {

  const router = useRouter();

  const [currentLanguage, setCurrentLanguage] = useState('en')

  const {t, i18n} = useTranslation();

  const changesLanguage = value => {
      i18n.changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value)  
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
     <StatusBar barStyle={'light-content'} backgroundColor="#141A31" />

      <View style={styles.languages}>

        <TouchableOpacity 
          onPress={() => changesLanguage('en') }
          style={[
            styles.langButton, {
            borderColor: currentLanguage === 'en' ? '#037CFC' : 'transparent',
            }
          ]}
        >
          <Text style={styles.langText}>Inglês</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => changesLanguage('pt') }
          style={[
            styles.langButton, {
              borderColor: currentLanguage === 'pt' ? '#037CFC' : 'transparent',
            }
          ]}
        >
          <Text style={styles.langText}>Português(Brasil)</Text>
        </TouchableOpacity>

      </View>

      <Image
        source={require('./src/assets/logo (1).png')}
        style={styles.logo}
        resizeMode="contain"
      />
 
      <Text style={styles.title}>
       {t('Seja bem vindo')}
      </Text>

      <Text style={styles.title}>
        {t('ao seu app de filmes')}
      </Text>

      <TouchableOpacity 
        onPress={() => router.push('/Tela1')}
      style={styles.button}>
        <Text style={styles.buttonText}>
          {t('Acessar')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>
          {t('Criar uma nova conta')}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/Tela1')}>
        <Text>Sair</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A31',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingStart:24,
    paddingEnd:24,
  },
  languages:{
    flexDirection: 'row',
    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 18 : StatusBar.currentHeight + 58,
  },  
  langButton:{
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    marginLeft: 4,
  },
  langText:{
    marginRight: 4,
    marginLeft: 4,
    color: '#FFF',
  },  
  logo:{
    maxWidth: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 44,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFF',
  },
  button:{
    alignSelf: 'center',
    backgroundColor: '#037CFC',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 28,
  },
  buttonText:{
    color: '#FFF'
  },
  linkButton:{
    marginTop: 14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  linkText:{
    textAlign: 'center',
    color: '#FFF',
  },
});