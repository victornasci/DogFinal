import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator,Linking } from 'react-native'
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
          
          value={user.name}
          onChangeText={(value) =>
            handlerChangeText('name', value)} />
      </View>

      <View style={style.inputGtoup}>
        <TextInput
         
          value={user.email}
          onChangeText={(value) =>
            handlerChangeText('email', value)} />

      </View>

      <View style={style.inputGtoup}>
        <TextInput
         
          value={user.telefone}
          onChangeText={(value) =>
            handlerChangeText('telefone', value)} />

      </View>

      <View style={style.inputGtoup}>
        <TextInput
          
          value={user.Raca}
          onChangeText={(value) =>
            handlerChangeText('Raca', value)} />
      </View>

      <View style={style.inputGtoup}>
        <TextInput
          
          value={user.Peso}
          onChangeText={(value) =>
            handlerChangeText('Peso', value)} />

      </View>

      <View style={style.inputGtoup}>
        <TextInput
          
          value={user.Bairro}
          onChangeText={(value) =>
            handlerChangeText('Bairro', value)} />

      </View>

      

     
      <View>
        <Button
          color="#BF0606"
          title="Chamar"
          onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=5571992917801&text=Ol%C3%A1%2C%20gostaria%20de%20passear%20com%20seu%20pet')}/>
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