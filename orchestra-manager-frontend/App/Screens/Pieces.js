import React from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';


 class Pieces extends React.Component{
  constructor(){
    super();

}
render(){
   return(
   <View style={{ alignItems: 'center'}}>
        <Text style={{fontSize: 20, marginTop: 10}}>Download here: </Text>
           
            <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.dropbox.com/home/Pieces/W.A.Mozart-Eine.Kleine%2CK.525/Cello?preview=Orchestra+Manager+-+Cello.pdf')}>Google</Text>
    </View>
   )}
}

export default Pieces;