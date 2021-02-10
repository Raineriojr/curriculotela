import React from 'react';
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './src/assets/foto.png';
import Card from './src/components/Card'

export default function App(){
  
  function handleSocial(rede_social){
    switch(rede_social){
      case 'github': {
        Alert.alert('https://github.com/Raineriojr')
        break;
      }

      case 'facebook': {
        Alert.alert('FACEBOOK!')
        break;
      }

      case 'linkedin': {
        Alert.alert('LINKEDIN')
        break;
      }
    }
  }

  return(

    <View style={styles.container}>
      <View style={styles.topo}>
        <Image source={foto} style={styles.foto}/>
        <Text style={styles.nome}>Rainério Júnior</Text>
        <Text style={styles.funcao}>Desenvolvedor Mobile</Text>

        <View style={styles.social}> 
          <TouchableOpacity onPress={() => handleSocial('github')}>
            <Icon name="github" size={22} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSocial('facebook')}>
            <Icon name="facebook" size={22} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSocial('linkedin')}>
            <Icon name="linkedin" size={22} />
          </TouchableOpacity>
        </View>

        <Card title="Formação Acadêmica">
          <Text style={styles.text_body}>Técnico em Informática</Text>
          <Text style={styles.text_body}>Engenheiro de Computação</Text>
        </Card>

        <Card title="Experiência Profissional">
          <Text style={styles.text_body}>Estagiário em Faculdade Meta - 2019</Text>
          <Text style={styles.text_body}>Estagiário em SENAC AP - 2020</Text>
          <Text style={styles.text_body}>Estagiário em PRODAP - 2021</Text>
        </Card>
        
      </View>

    </View>
    
    )
}

const styles = StyleSheet.create({
  
  container:{
    backgroundColor: '#e7e7e7',
    flex: 1
  },

  topo:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  foto:{
    marginTop: 30,
    width: 210,
    height: 210,
    borderRadius: 125
  },

  nome:{
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginTop: 5
  },

  social:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 12
  },

  text_body:{
    color: '#939393',
    marginBottom: 5,
    textAlign: 'left',
    
  }
  

  
})