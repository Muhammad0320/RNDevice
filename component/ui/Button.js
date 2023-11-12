import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../utils/color";

function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}> {children} </Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary700,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  pressed: {
    opacity: 0.7,
  },

  text: {
    textAlign: "center",
    color: Colors.primary50,
    fontSize: 16,
  },
});
