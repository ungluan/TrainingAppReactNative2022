import React, { setState, useState } from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native'
function example(){
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     document.title = `You clicked ${count} times`
    // }})

    return <View>
        <Text>You clicked {count} time</Text>
        
        <TouchableOpacity onPress={()=>{
            setCount(count+1)
        }} style={{
            backgroundColor: 'green',
            height: 45,            
            marginHorizontal: 16,
            marginTop: 16,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center'
            // alignSelf: 'center'
        }} >
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
            }} >Click me</Text>
        </TouchableOpacity>
    </View>
}

export default example