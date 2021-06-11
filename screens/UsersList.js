import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import firebase from '../database/firebase'
import {ListItem, Avatar} from 'react-native-elements'


 const UsersList = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() =>{
    firebase.db.collection('users').onSnapshot(querySnapshot => {

        const users = [];

      querySnapshot.docs.forEach(doc => {
        const{name,email,telefone} = doc.data()
        users.push({
          id: doc.id,
          name,
          email,
          telefone
        })
      });

    
      setUsers(users);
    });
  }, []);

    return (
      <ScrollView>

      <Button title="Adicionar Funcionario" onPress={() => props.navigation.navigate('CreateUserScreen')}/>

      {
        users.map(user =>{
          return(
            <ListItem key={user.id} bottomDivider onPress ={() => {
              props.navigation.navigate('UserDetailScreen',{
                userId: user.id
                })
            }}>


              <ListItem.Chevron/>

              <Avatar
                rounded
                source={{
                  uri:
                    'https://lh3.googleusercontent.com/proxy/R81hYlU47f10EkfwFnqtCR0NlMiVgm2ogztG1tnM85Qt7hOVj39OcHAAp9teK5dxzX75ztS21y2P6p6DSJlsWzThDVY66LNv2fd5VolBXlSUJpx63ibicIL31r3ntcdcOuL6tnB_sDTBI3NsaRqyY4GW',
                }}
/>

              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        })
      }

      </ScrollView>
    );
};

export default UsersList


