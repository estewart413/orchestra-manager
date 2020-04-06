import React, {useState} from 'react'; 
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import mongoServer from '../../api/mongoServer';
import axios from 'axios';

const debug = () => {
    
    const [info, setInfo] = useState([]);
    
    return (
        <View>
            <FlatList>setInfo</FlatList>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default debug;