import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

function Separator(){
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    
      <SafeAreaView style={styles.container}>
       <View >
         <Text>hello there</Text>
         <View>
           <Separator />
         </View>
          <Button onPress={() => Alert.alert('button pushed')}
          title="Log In"
          color='#3cb371'
        />
        </View>
      </SafeAreaView>
      
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },

  separator: {
    marginVertical: 15,
  },
});


