import React, {useState} from 'react'
import{View, Text, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase  from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state, setState] = useState({
        name:"",
        email:"",
        telefone:"", 
        Raca:"",
        Peso:"",
        Bairro:"",
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
            telefone: state.telefone,
            Raca: state.Raca,
            Peso: state.Peso,
            Bairro: state.Bairro

        });
        props.navigation.navigate('VisuDono');
       } catch (error) {
           console.log(error);
           
       }                                                                                                                                                                                                                                                                                                                                                            
        }
    };  

    return(
        <ScrollView style={styles.container}>
            <View style={styles.containert}>
            <View style = {styles.inputGroup}>
                <TextInput  placeholder="Nome de Usuario :"
                 onChangeText={(value) => handlerChangeText('name', value)} 
                 />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Email de Usuario :"
                onChangeText={(value) => handlerChangeText('email', value)} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Telefone de Usuario :"
                onChangeText={(value) => handlerChangeText('telefone', value)} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Raça do animal :"
                onChangeText={(value) => handlerChangeText('Raca', value)} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Peso do animal :"
                onChangeText={(value) => handlerChangeText('Peso', value)} 
                />
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder="Bairro por onde caminhará :"
                onChangeText={(value) => handlerChangeText('Bairro', value)} 
                />
            </View>
            <View>
                <Button title="Adicionar" onPress={() => SaveNewUser()}
                    />
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
container: {
flex: 1,
padding:35
},

containert: {
    display: 'flex',
    marginTop:'80px',
    padding: 35,
   
    justifyContent: 'center'

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