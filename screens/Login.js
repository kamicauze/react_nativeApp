import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button,TouchableOpacity, Image } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{height:200,width:200}} source={require('../assets/icon.png')} />
                <View style = {{ width:200, justifyContent:'space-between'}}>
        <TouchableOpacity  style={styles.Button} onPress={() => this.props.navigation.navigate('Discover')}>
          <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity title="Sign up" style={styles.Button} onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.ButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Button: {
        display: 'flex',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        backgroundColor: 'skyblue',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },  
    ButtonText: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
})
