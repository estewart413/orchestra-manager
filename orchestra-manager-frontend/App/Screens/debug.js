import React, {useState, useEffect} from 'react'; 
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import mongoServer from '../../api/mongoServer';
import axios from 'axios';

const debug = () => {
    
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(mongoServer);

            setInfo(result.info)
        };
        fetchData();
    }, [])
    
    return (
        <View>
            {info.map(item => (
                <FlatList key={item.objectID}>
                    <Text> href={item.url}>{item.title}</Text>
                </FlatList>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

});

export default debug;