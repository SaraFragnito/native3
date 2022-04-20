import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "./MealItem"

function MealsList(props){
  const renderMealItem = (itemData) => {
    const mealItemProps = {
      id: itemData.item.id,
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
        data={props.items}
        keyEstractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  }
})