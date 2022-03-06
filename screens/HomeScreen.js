import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  Touchable
} from 'react-native';
import ImageComponent from '../components/ImageComponent';
import CategoriesComponenet from '../components/CategoriesComponenet';
import colors from './colors';
import ProductComponent from '../components/ProductComponent';
import ProductScreen from './ProductScreen';

const HomeScreen = ({ navigation }) => {
  const changeComponent = (Category) => {
    console.log("cat",Category)
    navigation.navigate('Product',{category:Category});
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <ImageComponent />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.heading}>Categories</Text>
          </View>
          <ScrollView
            style={{ bottom: 15 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <View style={{ flexDirection: 'row', justifyContent:"space-around" }}>
            <Pressable id={1} onPress={()=>changeComponent("bedroom")} >
              <CategoriesComponenet
              
                imageUri={require('../assets/bedroom.png')}
                text="Bedroom"
              />
             </Pressable>
             <View>
              <Pressable id={2} styles={{margin:"0 30px"}}  onPress={()=>changeComponent("furniture")}>
                <CategoriesComponenet
               
                  imageUri={require('../assets/furniture.png')}
                  text="Furniture"
                />
                   </Pressable>
                </View>
              <Pressable  id={3} onPress={()=>changeComponent("living_room")}>
              <CategoriesComponenet
              
                imageUri={require('../assets/livingroom.png')}
                text="Living"
              />
               </Pressable>
            </View>
          </ScrollView>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
    bottom: 5,
  },
  mainContainer: {
    height: 150,
    width: '100%',
    backgroundColor: colors.thinGray,
  },
  mainContainer2: {
    height: 350,
    width: '100%',
    backgroundColor: colors.thinGray,
  },
  heading: {
    color: colors.black,
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheading: {
    color: colors.lightGray,
    fontSize: 13,
  },
});

export default HomeScreen;
