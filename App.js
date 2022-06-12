import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Modal
} from 'react-native';

import { Formulario } from './components/Formulario';


const App =  () => {

  const [modalVisible, setModalVisible] = useState(false);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>
      <Pressable onPress={ ()=> setModalVisible(true)} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevoCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible}/>
      {/* <Modal animationType='slide' visible={modalVisible}>
        <Text>Desde Modal</Text>
      </Modal> */}
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    color: '#6D28D9',
    fontWeight: '900'
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10
  },
  btnTextoNuevoCita: {
    textAlign: 'center',
    color: '#F3F4F6',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

export default App;
