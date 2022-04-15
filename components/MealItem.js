import { View, Text, StyleSheet, Image, Pressable, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MealDetails from "../components/MealDetails"

function MealItem(props) {
  
  const navigation = useNavigation()

  function DetailsHandler(){
    navigation.navigate("MealDetails", { mealId: props.id })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={DetailsHandler} android_ripple={{ color: "#ccc" }} style={({pressed}) => pressed && styles.buttonPressed}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: props.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetails 
            duration={props.duration}
            affordability={props.affordability}
            complexity={props.complexity}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: "#f7f1e3",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.8
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
})