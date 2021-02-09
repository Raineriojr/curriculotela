import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Card({titulo, children}){
    return(
        <View style={styles.card_container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text>{titulo}</Text>
          </View>
          <View style={styles.card_body}>
            {children}
          </View>
        </View>        
      </View>    
      
    )
}