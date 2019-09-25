import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'

export default class Signup extends Component {
    render() {
        return (
            <View style= {styles.container} >
                <Text> sign up page </Text>
                <View style = {{flexDirection: 'row', width:200, justifyContent:'space-between'}}>
                <Button
          title="login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
