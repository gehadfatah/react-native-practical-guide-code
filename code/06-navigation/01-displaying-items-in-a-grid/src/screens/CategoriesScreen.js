import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';
import {navigate} from '@react-navigation/native';

function CategoriesScreen({ navigation }) {
 

function renderCategoryItem(itemData) {
  function handlePressCategory() {
    navigation.navigate('MealsCategory' , {
      categoryId: itemData.item.id , categoryTitle:itemData.item.title});
    
  }
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={handlePressCategory}/>
  );
}
 
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
