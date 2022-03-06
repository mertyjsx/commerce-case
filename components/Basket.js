import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';
import {useSelector,connect} from "react-redux"

const Basket=({count})=>{
  
  return (
  
          <SimpleLineIcons
              style={styles.bag}
              name="bag"
              size={25}
              color="black"
             
            >
            <Text style={styles.cart}>{count}</Text>
            </SimpleLineIcons>
          
     
  );
};
const styles = StyleSheet.create({
cart:{position:"absolute",color:"red"},
  bag: {
    padding: 20,
  },
 
});
const state_to=(state)=>{
console.log("my state",state)
  return {count:state?.cart?.cartItems?.length}
}
export default connect(state_to)(Basket);