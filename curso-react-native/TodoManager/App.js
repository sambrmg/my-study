import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { initializeFirebaseApi } from './src/services/FirebaseApi';

export default class App extends Component {
  constructor(props) { 
    super(props);
    initializeFirebaseApi(); 
  }
  static navigationOptions = { 
    header: null
  };

  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator style={styles.loading}/> 
      </View>

    
    );
  }
  componentDidMount() {
    const { navigate } = this.props.navigation; 
    navigate('Login');
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})