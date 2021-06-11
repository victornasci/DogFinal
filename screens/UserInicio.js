import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, StyleSheet, Image } from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'
import { useName } from '../Context/NameContext'

const UserInicio = props => {
    const { name } = useName()
    return (
        <ScrollView>
            
            <View style={styles.Usuario}>
                <Text>Bem Vindo: {name} </Text>
            </View>

            <View style={styles.Dono}>
                <Button
                    title="Entrar como Dono"
                    onPress={() => props.navigation.navigate('UserDono')}
                />
            </View>

            <View style={styles.Dog}>
                <Button
                    title="Entrar como DogWalker"
                    onPress={() =>
                        props.navigation.navigate('UserDog')
                    }
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Dono: {
        flex: 1,
        padding: 35,
        marginTop: 150,
        
    },

    Dog: {
        flex: 1,
        padding: 35,
        
    },
    Usuario: {
        marginLeft: 253,
        border: '1px solid black',
    },
})

export default UserInicio
