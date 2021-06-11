import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator, } from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {

  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    telefone: '',
  });

  const [loading, setLoading] = useState(true)

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection('users').doc(id)
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
    props.navigation.navigate('UsersList')
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

      <View>
        <Button
          color="#30EBAE"
          title="Atualizar Usuário"
          onPress={() => alert("Salvo")} />
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


export default UserDetailScreen