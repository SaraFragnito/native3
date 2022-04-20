// import { useContext } from "react"
import { StyleSheet, View, Text } from "react-native"
import MealsList from "../components/MealsList"
// import { FavoritesContext } from "../store/context/favorites-context"
import { MEALS } from "../data/dummy-data"
import { useSelector } from "react-redux"

function FavoritesScreen(){
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
  // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id)) - context
  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id)) // redux

  if (favoriteMeals.length === 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  } else {
    return <MealsList items={favoriteMeals} />
  }
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  }
})