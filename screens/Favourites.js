import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Favourites extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text> Favourites page</Text>
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