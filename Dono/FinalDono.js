import React from 'react'
import {View, Text,StyleSheet, style, Button} from 'react-native'
import { useName } from '../Context/NameContext'

const FinalDono = (props) => {
    const { name } = useName()
    return (
        <View>
          <center>

             <Text style={styles.txt}>

            Agora {name}, é so aguardar  um Dog Walker te chamar no seu WhatsApp
             
             </Text>

             <Button title="Voltar para o Inicio" onPress={() => props.navigation.navigate('UserInicio')} />

          </center>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        display: 'flex',
        marginTop:'80px',
        padding: 35,
        justifyContent: 'center'
    }

})

export default FinalDono