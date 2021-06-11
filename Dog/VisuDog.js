import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Button, style, StyleSheet } from 'react-native'
import firebase from '../database/firebase'
import {ListItem, Avatar} from 'react-native-elements'



 const UsersList = (props) => {
  

  const [users, setUsers] = useState([])

  useEffect(() =>{
    firebase.db.collection('users').onSnapshot(querySnapshot => {

        const users = [];

      querySnapshot.docs.forEach(doc => {
        const{name,email,telefone,Raca,Peso,Bairro} = doc.data()
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

      <Button style={styles.btn}  title="Escolha um Dono e um Animal" />

      {
        users.map(user =>{
          return(
            <ListItem key={user.id} bottomDivider onPress ={() => {
              props.navigation.navigate('DetailDog',{
                userId: user.id
                })
            }}>


              <ListItem.Chevron/>

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

const styles = StyleSheet.create({

  btn:{
    backgroundColor: '#2FD9ED'
  },

})

export default UsersList


