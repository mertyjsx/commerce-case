import React from 'react'
import { Pressable, StyleSheet, Text, View, Image, Button } from 'react-native';
import colors from '../screens/colors';
import {additem} from "../redux/Card"
import { useDispatch } from 'react-redux'

const ProductComponent = ({imageUri,name, desc,price,id}) => {
    
     const dispatch = useDispatch()
    
const addCart=()=>{
  dispatch(additem({name,price,id,imageUri}));
}


    return (
       <View style={styles.productContainer}>
                <View style={{flex: 1 }}>
                    <Image style={styles.imagePlaceholder} resizeMode="center" source={imageUri}  />
                </View>
                <View style={{ top:20}} >
                    <Text style={styles.productName}>{name}</Text>
                  
                    <Text style={styles.productDesc}>{desc}</Text>
                    <View >
                        <Text style={styles.productPrice}>{`${price}.USD`}</Text>
                           <Pressable  onPress={addCart}>
                            <Text style={styles.addBttn}   >+</Text>
                            </Pressable>
                        
                    </View>
                </View>
            </View>
 );
};

const styles = StyleSheet.create({
  
    productContainer: {
        height: 270,
        width: 200 , 
        backgroundColor: colors.white,
        borderRadius: 8,
        marginLeft: 20,
        overflow: "hidden",
        padding: 10,
        display: "flex",
    },
    productNew: {
        color: "red",
        position: "absolute",
        left: 120,
        fontWeight: "bold",
        fontSize: 10
    },
    productName: {
        color: colors.black,
        marginLeft: 10,
        fontWeight: "700"
    },
    productDesc: {
        color: colors.mediumGray,
        fontSize: 10,
        textAlign: "left",
        marginLeft: 10
    },
    productPrice: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
    },
    addBttn:{
        borderRadius: 40,
        height: 30,
        width: 30,
        color: colors.white,
        backgroundColor: colors.black,
        borderColor: colors.black,
        left: 140,
        bottom: 25,
        fontWeight: "700",
        textAlign: "center"
    },
    imagePlaceholder: {
        flex: 1,
        width: "100%", 
        borderRadius: 8
    }
})

export default ProductComponent;
