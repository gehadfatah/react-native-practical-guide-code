import { View, Text , StyleSheet ,FlatList} from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealsItem";


function MealsCategoryScreen({route , navigation}) {
  const categoryId = route.params.categoryId;
    const categoryTitle = route.params.categoryTitle;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );
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
      <Text style = {styles.title}>{categoryTitle}</Text>
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
  },
 
});