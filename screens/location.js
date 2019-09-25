import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions,SafeAreaView,ImageBackground, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps'
import SlidingUpPanel from 'rn-sliding-up-panel';

const { width } = Dimensions.get('window');


export default class location extends Component {

    state = {
      SlideupActive: false,
        markers:[
            {
                text:"All you can eat",
                image:require('../images/allyoucan.jpg'),
                param:"Charlies Bistro" ,
                lat: [-1.2863287,36.8205261]
             },
             {
                 text:"Coffee shops",
                 image:require('../images/coffee.jpg'),
                 param:"Big knife",
                 lat: [-1.2831613,36.8162314],
                 
              },
              {
                 text:"Vegeterian",
                 image:require('../images/vegeterian.jpg'),
                 param:"Java Kimathi",
                 lat: [-1.2831169,36.8194962]
                
              },
            //   {
            //      text:"Meaty",
            //      image:require('../images/meaty.jpg'),
            //      param:"shop4" ,
            //      lat: [-1.2827576,36.8198717],
                 
            //   },
            //   {
            //      text:"Comfort food",
            //      image:require('../images/comfortfood.jpg'),
            //      param:"shop5", 
            //      lat:[-1.2821945,36.8194452],
                
            //   },
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                initialRegion={{
      latitude: -1.2832261,
      longitude:36.8198298,
      latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
    }}
    style={{flex: 1,height:'100%',width:width}}>
    {this.state.markers.map(marker => (
    <Marker
      coordinate={{
                latitude: marker.lat[0],
                longitude: marker.lat[1],
              }}
      title={marker.param}
      description={marker.description}
      key= {marker.param}


      onPress= {() =>this._panel.show()}
    >
    <View style={styles.marker}>
   <ImageBackground style={styles.marker_image} source={marker.image} imageStyle={{ borderRadius: 23 }}>

</ImageBackground>

    </View>
    
    
    </Marker>
  ))}
    </MapView>
    <SlidingUpPanel 
    draggableRange={{top: 500,bottom:0}}
    ref={c => this._panel = c}
     >
          <View style={styles.slideUp}>
            <Text>Here is the content inside panel</Text>
            <Button title='Hide' onPress={() => this._panel.hide()} />
          </View>
        </SlidingUpPanel>
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
      marker:{
          flex:1,
          height:60,
          width:60,
          borderRadius:25,
          borderWidth:3,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
          borderColor:'orange',

          elevation:24,
      },
      marker_image:{
        height:'100%',
        width:'100%',
      },
      slideUp:{
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        backgroundColor:'#fff',
        padding: 20,
        justifyContent:'center'
      }
      
})
