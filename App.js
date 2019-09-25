import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer'
import { createStackNavigator, HeaderTitle  } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';


import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Login from './screens/Login.js'
import Signup from './screens/Signup.js'
import Welcome from './screens/Welcome.js'
import Nearby from './screens/location.js'
import Discover from './screens/Discover.js'
import Profile from './screens/Profile.js'
import Favourites from './screens/Favourites.js'

const BottomNav = createMaterialBottomTabNavigator(
{
  Discover: {screen:Discover,},
  Favourites:{screen:Favourites},
  Nearby:{screen:Nearby},
  Profile:{screen:Profile},
  
 
},
{
  showIcon: true ,
  initialRouteName: 'Discover',
  inactiveColor: '#f0edf6',
  activeColor: '#3e2465',
  barStyle: { backgroundColor: 'orange',padding:10 },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon:({focused, tintColor})=>{
      let iconName;
      const {routeName} = navigation.state
      if (routeName === 'Discover') {
        iconName = "utensils";
      } else if (routeName === 'Profile') {
        iconName = "user";
      } else if (routeName === 'Favourites'){
        iconName = "heart"
      }else if (routeName=== 'Nearby'){
        iconName= "map-marker-alt"
      }
  
      return <Icon  name={iconName} size={20} color={tintColor} />
      }
  })
});
const tabsContainer = createStackNavigator({ 
  
  Discover: {screen:BottomNav},
  
},
{
defaultNavigationOptions:({navigation}) =>{
  const {routeName} = navigation.state.routes[navigation.state.index]
  return{
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
  },
  headerStyle:{backgroundColor: 'orange'},
  headerTitle:routeName
  }
}

});

const Drawernav = createDrawerNavigator(
  {
  Discover: {screen:tabsContainer},
  Login:{screen:Login}

  }
)

const AppSwitchNav = createSwitchNavigator({
  // Welcome: {screen: Welcome},
  Login: {screen: Login},
  Signup: {screen: Signup},
  Discover: {screen:Drawernav},
})




const NavContainer = createAppContainer(AppSwitchNav)
 
class App extends Component {
  render() {
      return (
       
         <NavContainer/>
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

export default App