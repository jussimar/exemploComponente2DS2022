import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Dados(props) {
  return (
    <View>
	   <Text style={styles.texto}>
		   Nome: {props.nome} 
	   </Text>
	   <Text style={styles.texto}>
		   idade: 
		   {props.idade != "" ? 2022 - props.idade : ""}
	   </Text>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto:{
	  fontSize: 30
  }
  
});
