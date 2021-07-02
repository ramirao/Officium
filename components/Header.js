import React from 'react'
import {View, Image, StyleSheet, StatusBar } from 'react-native'

const Header = () => {
  return (
     <View style={styles.header}>
      <StatusBar statusBarStyle={'light-content'}/>
	   <Image
       style={{ width: 250, height: 50 }}
         source={require('../assets/logoHeader.png')}
     />
     </View>
	)
}

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 70,
	   alignItems: 'center',
	   justifyContent: 'center',
	   borderBottomWidth: 1,
	   borderBottomColor:'#353634',
   
   }
})

export default Header