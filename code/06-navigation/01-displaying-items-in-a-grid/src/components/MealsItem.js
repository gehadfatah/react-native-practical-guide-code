import { View, Text, FlatList , StyleSheet , Image} from "react-native";
import { MEALS } from "../data/dummy-data";

export function MealItem({ title, imageUrl, steps , id }) {


    return (
        <View style={styles.mealItem}>
                   <Text key = {id} style={styles.mealTitle}>{title}</Text>
                   <Image source={{ uri: imageUrl }} style={styles.mealImage} />
                   <FlatList  style={{ width: '100%' , marginTop: 10 }}
                  
                  data={steps}
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
    );
}

export default MealItem;

 const styles = StyleSheet.create({
    mealImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginVertical: 10,
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
            color: '#52976B',
        },
});