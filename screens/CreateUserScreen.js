import React, {useState} from 'react'
import{View, Text, Button, TextInput, ScrollView, StyleSheet,} from 'react-native'
import firebase  from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state, setState] = useState({
        name:"",
        email:"",
        telefone:"", 
    });

    const handlerChangeText = (name, value) => {
     setState({...state, [name]: value});
    };

    const SaveNewUser = async () => {
        if (state.name === ''){
            alert("Preencha os campos")
        } else {
       try {
        await firebase.db.collection('users').add({
            name: state.name,
            email: state.email,
            telefone: state.telefone
        });
        props.navigation.navigate('UsersList');
       } catch (error) {
           console.log(error);
           
       }
        }
    };  

    return(
        <ScrollView style={styles.container}>
            <View style = {styles.inputGroup}>
                <TextInput  placeholder="Nome de Usuario"
                 onChangeText={(value) => handlerChangeText('name', value)} 
                 />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Email de Usuario"
                onChangeText={(value) => handlerChangeText('email', value)} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Telefone de Usuario"
                onChangeText={(value) => handlerChangeText('telefone', value)} 
                />
            </View>
            <View>
                <Button title="Adicionar" onPress={() => SaveNewUser()}
                    />
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding:35
},

    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUserScreen  