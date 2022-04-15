import { View, Image, Text, StyleSheet } from "react-native"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"

function MealDetailScreen(props){
  const mealId = props.route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Image source={{uri: selectedMeal.imageUrl}}  style={styles.image} />
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
        <Text style={styles.otherTitles}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => <Text key={ingredient}>{ingredient}</Text>)}
        <Text style={styles.otherTitles}>Steps</Text>
        {selectedMeal.steps.map(steps => <Text key={steps}>{steps}</Text>)}
      </View>
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 30
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8
  },
  otherTitles: {
    fontWeight: "bold",
    marginVertical: 16
  },
})

