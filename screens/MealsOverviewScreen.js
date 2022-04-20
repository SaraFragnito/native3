import { useLayoutEffect } from "react"
import MealsList from "../components/MealsList"
import { MEALS, CATEGORIES } from "../data/dummy-data"

function MealsOverviewScreen(props){
  const catId = props.route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0 )
  // tutti i meals che hanno quella specifica categoria (quindi che nell'array delle categorie hanno più di 0 corrispondenze)

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId ).title
    props.navigation.setOptions({ title: categoryTitle })
  }, [catId, props.navigation])

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen

