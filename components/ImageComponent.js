import React from 'react'
import { ImageBackground, View , StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons, SimpleLineIcons} from '@expo/vector-icons';


const ImageComponent = () => {
    return (
        <View >
            <ImageBackground blurRadius={0.1} resizeMode="cover" style ={styles.container} source={require("../assets/banner.jpg")}>
              
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: "100%",
    },
    iconContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        top: 20
    },
    secondIconContainer:{
        flexDirection: "row",
    }
})
export default ImageComponent;
