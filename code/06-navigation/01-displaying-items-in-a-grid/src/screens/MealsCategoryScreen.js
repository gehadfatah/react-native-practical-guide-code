import { View, Text , StyleSheet ,FlatList} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { MealItem } from "../components/MealsItem";


function MealsCategoryScreen({route , navigation}) {
  const categoryId = route?.params?.categoryId;
    const categoryTitle = route?.params?.categoryTitle;
if (!categoryId) {
    return (
      <View style={styles.screen}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <Text style={styles.title}>No Category Found!</Text>
        </View>
      </View>
    );
  }
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );
  useLayoutEffect(() => { 
    const title=CATEGORIES.find((category)=>categoryId===category.id).title;

    // navigation.setOptions({
    //   title: categoryTitle + ' Meals',
    // });
  }, [categoryId]);

  function handleMealItem(itemData) {
    const mealsProperties = {
        title: itemData.item.title,
        steps: itemData.item.steps,
        imageUrl : itemData.item.imageUrl,
      };
    return (
        <MealItem {...mealsProperties} />
    )}

 
  return (
    <View style={styles.screen}>
      <Text key= {"meals"} style = {styles.title}>{categoryTitle}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={handleMealItem}

              />
    </View>
  );
}
export default MealsCategoryScreen;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',

    marginBottom: 16,

    color: 'goldenrod',
  },
 
});