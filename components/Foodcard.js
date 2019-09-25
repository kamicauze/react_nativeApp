import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Foodcard extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card_hold:{
        shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    backgroundColor:"#000000",
    elevation:4,
    borderRadius:25,
    height:250,
    width:400,
    margin:10
    },
    card: {
        height:'100%',
        width:'100%',
        
    }
})
