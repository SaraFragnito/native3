import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "../components/MealItem"
import { MEALS } from "../data/dummy-data"

function MealsOverviewScreen(props){
  const catId = props.route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0 )
  // tutti i meals che hanno quella specifica categoria (quindi che nell'array delle categorie hanno più di 0 corrispondenze)

  const renderMealItem = (itemData) => {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability
    }
    return <MealItem {...mealItemProps} />
}

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyEstractor={(item) => item.id}
        renderItem={renderMealItem}
      >Meals Overview Screen - {catId} </FlatList>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})