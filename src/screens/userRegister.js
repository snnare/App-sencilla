import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from 'react'
import { db, app } from '../db/testeF'
import { addDoc, collection } from 'firebase/firestore'

const userRegister = (props) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const createNewUser = async () => {
    try {
      await addDoc(collection(db, 'users'), {
        name: state.name,
        email: state.email,
        phone: state.phone
       
      })
      props.navigation.navigate('userRead');
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Usuario"
          onChangeText={(value) => setState({ ...state, name: value })}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Correo electronico"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => setState({ ...state, name: value })}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Telefono"
          onChangeText={(value) => setState({ ...state, name: value })}
        />
      </View>

      <View style={styles.button}>
        <Button title="Guardar usuario" onPress={() => createNewUser()} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default userRegister