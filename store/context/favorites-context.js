import { createContext, useState } from "react"

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
})

function FavoritesContextProvider(props){
  const [favMealIds, setFavMealIds] = useState([])

  const addFavorite = (id) => setFavMealIds((currentFavIds) => [...currentFavIds, id])
  const removeFavorite = (id) => setFavMealIds((currentFavId) => currentFavId.filter(mealId => mealId !== id))

  const value = {
    ids: favMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>)
}

export default FavoritesContextProvider