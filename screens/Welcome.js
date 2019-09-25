import React, { Component } from 'react'
import { Text, StyleSheet, View,StatusBar,Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Welcome extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <StatusBar barStyle="dark-content"  translucent={false} backgroundColor={'orange'}></StatusBar>
                <Text> Haiya welcome to reacto! </Text>
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
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
