import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    Modal,
    SafeAreaView,
    View,
    TextInput,
    ScrollView
  } from 'react-native';


export const Formulario = ({modalVisible}) => {

  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');


  return (
    <Modal animationType='slide' visible={modalVisible}>
      <SafeAreaView style={styles.container}>  
        <ScrollView>
        <Text style={styles.titulo}>Nueva <Text style={styles.tituloBold}>Cita</Text></Text>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <TextInput style={styles.input} placeholder='Nombre Paciente' placeholderTextColor={'#666'} value={paciente} onChangeText={setPaciente}/>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Propietario</Text>
          <TextInput style={styles.input} placeholder='Nombre Propietario' placeholderTextColor={'#666'} value={propietario} onChangeText={setPropietario}/>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email Propietario</Text>
          <TextInput style={styles.input} placeholder='Email Propietario' placeholderTextColor={'#666'} keyboardType='email-address' value={email} onChangeText={setEmail}/>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Telefono Propietario</Text>
          <TextInput style={styles.input} placeholder='Telefono Propietario' placeholderTextColor={'#666'} keyboardType='phone-pad' value={telefono} onChangeText={setTelefono} maxLength={10}/>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput style={[styles.input, styles.sintomasInput]} placeholder='Sintomas' placeholderTextColor={'#666'} value={sintomas} onChangeText={setSintomas} multiline={true} numberOfLines={4}/>
        </View>

        </ScrollView>
      </SafeAreaView>
        
      </Modal>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10
  },
  campo: {
    marginHorizontal: 30,
    marginTop: 10
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',

  },
  sintomasInput: {
    height: 100,
    marginBottom: 30
  }
});