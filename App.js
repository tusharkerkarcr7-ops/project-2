import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App(){
  const [text,setText] = useState("");
  const [reverse,setReverse] = useState("");


  const reverseString = () => {
    setReverse(text.split("").reverse().join(""));

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Reverse a string</Text>

      <TextInput
      style={styles.input}
      placeholder="enter the string"
      value={text}
      onChangeText={setText}
      />
      <Button 
      title="Reverse"
      onPress={reverseString}
      />

      <Text style={styles.result}>
        Reversed String: {reverse}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    padding: 30,

  },

  input:{
    borderWidth:1,
    borderColor:"black",
    width: 250,
    padding: 10,
    margin: 10,

  },

  result:{
    marginTop: 20,
    fontSize: 20,
   
    color:"blue",


  },


});

  