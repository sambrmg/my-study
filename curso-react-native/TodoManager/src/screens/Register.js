import React, { Component } from 'react'; 
import { NavigationActions } from 'react-navigation'
import { StyleSheet, KeyboardAvoidingView, View, Image, Text, TextInput, Button, Alert } from 'react-native';
import { createUserOnFirebase } from '../services/FirebaseApi';

const img = require('../assets/TodoList.png');

export default class Register extends Component {
    constructor(props) { 
        super(props);
        this.state = { email: '', password: '' }; 
    }
    static navigationOptions = { 
        title: 'Register'
    };
    createUser() {
        createUserOnFirebase(this.state.email, this.state.password) 
            .then( (user) => {
                Alert.alert("User Created",
                `User ${user.email} has been succesfuly created!`, 
                [{
                    text: 'OK', onPress: () => {
                        let backAction = NavigationActions.back({key: null}); 
                        this.props.navigation.dispatch(backAction);
                    }}, 
                ]);
            })
            .catch( (error) => {
                Alert.alert("Create User Failed", error.message);
            }
        ); 
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'> 
                <View style={styles.topView}>
                    <Image style={styles.img} source={img}/>
                    <Text style={styles.title}>Registering new user</Text> 
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.input} placeholder='Email' keyboardType={'email-address'} autoCapitalize='none' 
                        onChangeText={(text) => this.setState( {email: text})}/>
                    <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} 
                        onChangeText={ (text) => this.setState({password: text}) }/>
                    <Button title='Register User' onPress={() => this.createUser()}/>
                </View> 
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center'
    }, 
    topView: {
        flex: 0.20, 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 25
    }, 
    img: {
        width: 50,
        height: 50 
    },
    title: { 
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20 
    },
    bottomView: { 
        flex: 1,
        flexDirection: 'column', 
        paddingRight: 20, 
        paddingLeft: 20
    }, 
    input: {
        marginBottom: 20 
    }
});