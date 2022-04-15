import { NavigationContainer } from "@react-navigation/native"
import { FlatList } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"



function CategoriesScreen(props){
  function renderCategoryItem(itemData){ 
    const pressHandler = () => props.navigation.navigate("MealsOverview", { categoryId: itemData.item.id, })
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
  }
  

  return (
    <FlatList 
      data={CATEGORIES} 
      key={"#"}
      keyExtractor={(item) => "#" + item.id} 
      renderItem={renderCategoryItem}
      numColumns={2} 
    />
  )
}

export default CategoriesScreen