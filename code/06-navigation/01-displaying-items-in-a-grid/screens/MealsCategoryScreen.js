import { View, Text , StyleSheet ,FlatList} from "react-native";
import { MEALS } from "../data/dummy-data";


function MealsCategoryScreen({route , navigation}) {
  const categoryId = route.params.categoryId;
    const categoryTitle = route.params.categoryTitle;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <Text style = {styles.title}>{categoryTitle}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text style={styles.mealTitle}>{item.title}</Text>
            <FlatList  style={{ width: '100%' , marginTop: 10 }}
           
           data={item.steps}
           keyExtractor={(item=> item.id)}
           renderItem={({item, index}) => <Text style={styles.mealSteps}>{index+1} - {item}</Text>}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{ padding: 10 }}
           ListEmptyComponent={<Text style = {[styles.mealTitle,{marginVertical:10}]}>No steps available.</Text>}
           ListHeaderComponent={<Text style={[styles.mealTitle,{marginTop:10}]}>Steps:</Text>}
           ListFooterComponent={<Text style={[styles.mealTitle,{marginTop:10}] }>End of Steps</Text>}
           ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ccc' }} /> }
           horizontal={false}
           numColumns={1}
           />
            </View>
              )}
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
  mealItem: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
    mealTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    mealSteps: {    
        fontSize: 16,
        color: '#666',
    },
});