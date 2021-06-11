import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { useName } from "../Context/NameContext";

const UserName = (props) => {
  const { name, setName } = useName();
  return (


    <ScrollView>

    <View style={styles.container}>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nome de Usuario"
          onChangeText={(value) => setName(value)}
        />
      </View>

      <View style={styles.btn}>
        <Button 
          title="Adicionar"
          onPress={() => {
            if (name === "") return alert("Preencha os dados");
            props.navigation.navigate("UserInicio");
          }}
        />
      </View>
      
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop:'150px',
    padding: 35,
   
    justifyContent: 'center'
    
  },



  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    
  },

  btn: {
    backgroundColor: '#3876E0',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  }
});

export default UserName;
