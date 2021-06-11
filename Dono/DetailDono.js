import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, } from 'react-native'
import firebase from '../database/firebase';

const DetailDono = (props) => {

    const initialState = {
        id: '',
        name: '',
        email: '',
        telefone: '',
        Raca: '',
        Peso: '',
        Bairro: '',
    
      }

  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection('users').doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id,
    });
    setLoading(false)
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handlerChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const deleteUser = async (user) => {
    const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate('VisuDono')
  }

  const updateUser = async () => { 
    const dbRef = firebase.db.collection('users').doc(user.id);
    await dbRef.set({
        name: user.name,
        email: user.email,
        telefone: user.telefone,
        Raca: user.Raca,
        Peso: user.Peso,
        Bairro: user.Bairro,
    })
    setUser(initialState)
    props.navigation.navigate('VisuDono')
  }

  const openConfirmationAlert = () =>{
    al
  }

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    );
  }

  return (
    <ScrollView style={style.container}>
      <View style={style.inputGtoup}>
        <TextInput
          placeholder="Name User"
          value={user.name}
          onChangeText={(value) =>
            handlerChangeText('name', value)} />
      </View>

      <View style={style.inputGtoup}>
        <TextInput
          placeholder="E-mail User"
          value={user.email}
          onChangeText={(value) =>
            handlerChangeText('email', value)} />

      </View>

      <View style={style.inputGtoup}>
        <TextInput
          placeholder="Telefone User"
          value={user.telefone}
          onChangeText={(value) =>
            handlerChangeText('telefone', value)} />
      </View>

      <View style={style.inputGtoup}>
        <TextInput
          placeholder="Telefone User"
          value={user.Raca}
          onChangeText={(value) =>
            handlerChangeText('Raca', value)} />
      </View>

      <View style={style.inputGtoup}>
        <TextInput
          placeholder="Telefone User"
          value={user.Peso}
          onChangeText={(value) =>
            handlerChangeText('Peso', value)} />
      </View>

      <View style={style.inputGtoup}>
        <TextInput
          placeholder="Telefone User"
          value={user.Bairro}
          onChangeText={(value) =>
            handlerChangeText('Bairro', value)} />
      </View>

      <View>
        <Button
          color="#30EBAE"
          title="Atualizar Usuário"
          onPress={() => updateUser()} />
      </View>

      <View>
        <Button
          color="#BF0606"
          title="Deletar Usuário"
          onPress={() => deleteUser()} />
      </View>

    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGtoup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },

});


export default DetailDono