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
import colors from './colors';
import ProductComponent from '../components/ProductComponent';
import NewArivals from '../components/NewArivals';
import BestSellers from '../components/BestSellers';
import Basket from "../components/Basket"
import {products}from "../datas"
const ProductScreen = ({ navigation }) => {
  const changeComponent = () => {
    console.log('tapped');
    navigation.navigate('SingleProduct');
  };
console.log("pressed",navigation.state.params.category);





  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.thinGray }}>
      <ScrollView>
        <View style={styles.topHeader}>
          <Text style={styles.barName}>Furniture</Text>
          <View>
          <Pressable  onPress={()=> {navigation.navigate('Card');}}>
        <Basket/>
          
          </Pressable>
            
          </View>
        </View>
       
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.heading}>Morden</Text>
            <Text style={styles.subheading}>+Good Quality Items </Text>
          </View>
          <ScrollView
            style={{ bottom: 15 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <View style={{ flexDirection: 'row' }}    >
             
            {products.map(product=>
            (product.category===navigation.state.params.category)
        &&<Pressable  >
                <ProductComponent
                 {...product}
                />
              </Pressable>
             
            )}
            
            </View>
          </ScrollView>
        </View>

      

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topHeader: {
    display: 'flex',
    height: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.thinGray,
  },
  barName: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
    top: 5,
  },
  bag: {
    padding: 20,
  },
  search: {
    flex: 1,
    fontWeight: '500',
    backgroundColor: colors.white,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    elevation: 1,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    borderRadius: 8,
    height: 50,
    width: 350,
  },
  subheading: {
    color: colors.lightGray,
    fontSize: 13,
    right: 160,
    bottom: 8,
  },
  subheading2: {
    color: colors.lightGray,
    fontSize: 13,
    right: 110,
    bottom: 8,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
    bottom: 5,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
  },
  mainContainer: {
    height: 340,
    width: '100%',
    backgroundColor: colors.thinGray,
  },
  mainContainer2: {
    height: 150,
    width: '100%',
    backgroundColor: colors.thinGray,
  },
  mainContainer3: {
    height: 200,
    width: '100%',
    backgroundColor: colors.thinGray,
  },
  heading: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
export default ProductScreen;
