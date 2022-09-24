import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Dados from './components/Dados';

export default function App() {
  const [nome, setNome] = useState("");
  const [nomeParam, setNomeParam] = useState("");
  const [idade, setIdade] = useState("");
  const [idadeParam, setIdadeParam] = useState("");
	
  function gravar(){
	  setNomeParam(nome);
	  setIdadeParam(idade);
  }
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
		  <Text style={styles.label}>Nome:</Text>
		  <TextInput 
			style={styles.input}
			value={nome}
			onChangeText={(value)=>setNome(value)}
		  />
	  </View>
		  
	 <View  style={styles.bloco}>
		<Text style={styles.label}>Ano Nasc.:</Text>
		 <TextInput 
			style={styles.input}
			value={idade}
			onChangeText={(value)=>setIdade(value)}
		 />
	 </View>
	 <View style={styles.bloco}>
		  <TouchableOpacity style={styles.botao} onPress={gravar}>
		  	<Text style={styles.textoBotao}>Mostrar</Text>
		  </TouchableOpacity>
	  </View>
	  <View style={styles.bloco}>
		  <Dados nome={nomeParam} idade={idadeParam}/>
	  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco:{
	 width:'80%',
	 marginTop:30,
	 marginLeft:'10%'
  },
  label:{
	  fontSize:20
  },
  input:{
	 borderWidth:1,
	 fontSize:20
  },
  botao:{
	 backgroundColor:'#000',
  },
  textoBotao:{
	  color:'#fff',
	  fontSize:20,
	  textAlign:'center'
  }
});
