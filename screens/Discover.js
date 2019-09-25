import React, { Component } from 'react'
import { Text, StyleSheet, View,ScrollView,ImageBackground,Animated,SafeAreaView, TouchableWithoutFeedback,Dimensions,Image } from 'react-native'
import Foodcard from '../components/Foodcard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const { width } = Dimensions.get('window');
export default class Discover extends Component {
    state = {
        cards:[ 
        {
           text:"All you can eat",
           image:require('../images/allyoucan.jpg'),
           param:"shop1" 
        },
        {
            text:"Coffee shops",
            image:require('../images/coffee.jpg'),
            param:"shop2" 
         },
         {
            text:"Vegeterian",
            image:require('../images/vegeterian.jpg'),
            param:"shop3" 
         },
         {
            text:"Meaty",
            image:require('../images/meaty.jpg'),
            param:"shop4" 
         },
         {
            text:"Comfort food",
            image:require('../images/comfortfood.jpg'),
            param:"shop5" 
         },
            ],
            categories:[
                {
                    text:'Burgers',
                    icon:'hamburger'
                },
                {
                    text:'Pizza',
                    icon:'pizza'
                },
                {
                    text:'Drinks',
                    icon:'glass-cocktail'
                },
                {
                    text:'Coffee',
                    icon:'coffee'
                },
                {
                    text:'Chinese',
                    icon:'bowl'
                },
            ]
          }

    render() {
        return (
                <SafeAreaView>
            <ScrollView contentContainerstyle={styles.container} >
            <View style={{paddingHorizontal:5}}>
       <Text style={styles.headerText}>Trending</Text>
       <Text style={styles.subheaderText}>Popular</Text>
      </View> 
        <ScrollView  horizontal endFillColor={true}  pagingEnabled={true} showsHorizontalScrollIndicator={false} decelerationRate={0}
    snapToInterval={width - 80} snapToAlignment={"center"}>
                   {this.state.cards.map(card =>{
            return (
                <TouchableWithoutFeedback key={card.param}>
                    <Animated.View style={styles.card_hold} >
                    <ImageBackground style={styles.card} imageStyle={{ borderRadius: 25 }}  source={card.image} >
                        <View style={styles.card_content}>
                        <Text style={styles.card_text}>{card.text}</Text>
                        </View>
                    </ImageBackground>
                    </Animated.View>
                    </TouchableWithoutFeedback>
                    )  
                } )}
        </ScrollView>
       <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
       {this.state.categories.map(category =>{
           return (
               <View style={styles.categories} key={category.text}>
               <Icon name={category.icon} size={24} color="orange"  />
                   <Text>{category.text}</Text>
               </View>
           )
       })}
      </ScrollView>
      {this.state.cards.map((card,index) =>{
            return (
                <TouchableWithoutFeedback key={card.param}>
        <Animated.View style={styles.restaurants}>
            <View style={styles.resContainer}>
                <Image
                 style={styles.resImage} source={card.image} />
                <View style={{ flex: 1 }}>
                <Text style={{alignSelf:'center',fontWeight:'400',fontSize:16,}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus </Text>
                </View>
                <Icon style={{alignSelf:'flex-end'}} name='truck-delivery' size={25} color="#FF9478"  />
            </View>
        </Animated.View>
        </TouchableWithoutFeedback>
            )
            })}
        

            </ScrollView>
            </SafeAreaView>
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
      card_hold:{
    
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 16,
            borderRadius:25,
            height:250,
            
            width:width - 80,
            marginLeft:10,
            marginVertical: 30,
        },
    card: {
        height:'100%',
        width:'100%',
        

    },
    card_text:{
        fontSize:25,
        fontWeight:'500',
        color:"snow"
    },
    card_content:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'#1b1a1a73',
        height:'100%',
        width:'100%',
        borderRadius:25,
        padding:20
    },
    categories:{
            width: 100,
            height: 100,
            borderRadius: 100/2,
            backgroundColor: '#fff',
            justifyContent:'center',
            alignItems: 'center',
            marginRight: 10,
            marginBottom: 20,
            shadowColor: "#000",
            
    },
    headerText:{
        fontSize:28,
        color:'#5A5A5A',
        fontWeight:"600"
    },
    subheaderText:{
        fontSize:16,
        color:'#FF9478',
        fontWeight:"500",
    },
    restaurants:{
        padding:10,
        backgroundColor:'whitesmoke'
    },
    resContainer:{
        flexDirection:"row",
        backgroundColor:'#fff',
        justifyContent:'space-between',
        alignContent:'center',
        padding:10,
        height:100,
        width:"100%",
        elevation:1
    },
    resImage:{
     height:'100%',
     width:'auto',
     aspectRatio:1 /1,
     marginRight: 10,
    }

})

