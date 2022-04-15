import { View, Image, Text, StyleSheet, ScrollView } from "react-native"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"

function MealDetailScreen(props){
  const mealId = props.route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Image source={{uri: selectedMeal.imageUrl}}  style={styles.image} />
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
        <Text style={styles.subtitle}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => <Text style={styles.text} key={ingredient}>{ingredient}</Text>)}
        <Text style={styles.subtitle}>Steps</Text>
        {selectedMeal.steps.map(steps => <Text style={styles.text} key={steps}>{steps}</Text>)}
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 350,
    marginVertical: 10
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2
  },
  text: {
    borderRadius: 10,
    color: "black",
    backgroundColor: "#f7f1e3",
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginHorizontal: 24,
    marginVertical: 4
  }
})

