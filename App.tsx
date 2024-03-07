import React,{useState} from "react";
import { Text,View,TextInput,StyleSheet } from "react-native";
const DemoTextInput=()=>{
    const [text, setText]=useState('');
    const handleChangeText=(inputText)=>{
        setText(inputText);
    };
    return(
        <View style={styles.input}>
            <TextInput
                placeholder="Mời bạn nhập..."
                onChangeText={handleChangeText}
                value={text}
            />
            <Text>{text}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    input:{
        padding:20,
        backgroundColor:'#66CCFF',
        borderRadius:10,
        margin:10,
    },
});
export default DemoTextInput;