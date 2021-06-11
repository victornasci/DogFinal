import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'


const UserDono = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    firebase.db.collection('users').onSnapshot(querySnapshot => {

      const users = [];

      querySnapshot.docs.forEach(doc => {
        const { name, email, telefone, Raca, Peso, Bairro } = doc.data()
        users.push({
          id: doc.id,
          name,
          email,
          telefone,
          Raca,
          Peso,
          Bairro,
        })
      });


      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>

      <Button title="Esperar" onPress={() => props.navigation.navigate('FinalDono')} />

      {
        users.map(user => {
          return (
            <ListItem key={user.id} bottomDivider onPress={() => {
              props.navigation.navigate('DetailDono', {
                userId: user.id
              })
            }}>


              <ListItem.Chevron />

              <Avatar
                rounded
                source={{
                  uri:
                    'https://w7.pngwing.com/pngs/992/606/png-transparent-wildcat-dog-paw-finger-print-animals-sticker-black-thumbnail.png',
                }}
              />

              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.Raca}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        })
      }

    </ScrollView>
  );
};

export default UserDono


