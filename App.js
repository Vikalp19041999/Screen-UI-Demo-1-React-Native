import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Screen1 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>What trusted contact are we adding to Abc's account?</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="First Name"
            placeholderTextColor="#95afc0"
            keyboardType="default"
            underlineColorAndroid='transparent'
            selectionColor={'red'} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Last Name"
	    placeholderTextColor="#95afc0"
            keyboardType="default"
            underlineColorAndroid='transparent' />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Contact Number"
	    placeholderTextColor="#95afc0"
            keyboardType='numeric'
            underlineColorAndroid='transparent' />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Email ID"
	    placeholderTextColor="#95afc0"
            keyboardType='email-address'
            underlineColorAndroid='transparent' />
        </View>

        <TouchableHighlight style={styles.buttonContainer} >
          <Text style={styles.loginText}>Continue</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 65,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputs: {
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    margin: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 28
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:90,
    marginBottom: 20,
    width: '90%',
    borderRadius: 30,
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
    fontSize: 20
  },
  textContainer: {
    alignContent: 'center',
    marginBottom: 60,
  },
  text: {
    color: '#005',
    fontSize: 27,
    paddingLeft: 30,
  }
});

