import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import ModalResultado from './src/components/ModalResultado';

export default function App() {
  const [valorAlcool, setValorAlcool] = useState('')
  const [valorGasolina, setValorGasolina] = useState('')
  const [melhorCombustivel, setMelhorCombustivel] = useState('')
  const [visibleModal, setVisibleModal] = useState(false)

  function calcular() {
    let resultado = parseFloat(valorAlcool) / parseFloat(valorGasolina)

    if (valorAlcool === '' || valorGasolina === '') {
      alert('Precisa digitar os dois valores!')
    } else if (Number.isNaN(resultado)) {
      alert('Algo deu errado. Tente novamente!')
    } else {
      resultado < 0.7 ? setMelhorCombustivel('Álcool') : setMelhorCombustivel('Gasolina')
      Keyboard.dismiss()
      setVisibleModal(true)
    }
  }

  return (
    <KeyboardAvoidingView //Faz com que a tela suba ao clicar num input para digitar
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Comportamento diferente para iOS e Android
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar />

        <Image
          source={require('./src/assets/images/logo.png')}
        />

        <Text style={styles.titulo}>Qual melhor opção?</Text>

        <View style={styles.viewInputs}>
          <Text style={styles.tituloCombustivel}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex: 4.60'
            value={valorAlcool}
            onChangeText={(text) => setValorAlcool(text)}
            keyboardType='numbers-and-punctuation'
          />

          <Text style={styles.tituloCombustivel}>Gasolina (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder='Ex: 4.60'
            value={valorGasolina}
            onChangeText={(text) => setValorGasolina(text)}
            keyboardType='numbers-and-punctuation'
          />
        </View>

        <TouchableOpacity style={styles.btnArea} onPress={calcular}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>

        <ModalResultado
          visibleModal={visibleModal}
          melhorCombustivel={melhorCombustivel}
          valorAlcool={valorAlcool}
          valorGasolina={valorGasolina}
          setVisibleModal={(value) => setVisibleModal(value)}
          setValorAlcool={(value) => setValorAlcool(value)}
          setValorGasolina={(value) => setValorGasolina(value)}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  titulo: {
    marginBottom: 52,
    marginTop: 23,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  viewInputs: {
    width: '90%'
  },
  tituloCombustivel: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 5,
    paddingLeft: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 22
  },
  btnArea: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ef4130',
    borderRadius: 8,
    marginTop: 5
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  }
});
