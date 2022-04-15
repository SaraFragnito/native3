import { View, Text, StyleSheet, Image, Pressable, Platform } from "react-native"

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} style={({pressed}) => pressed && styles.buttonPressed}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: props.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{props.duration}m</Text>
            <Text style={styles.detailItem}>{props.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white",
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
    opacity: 0.5
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-around"
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
})