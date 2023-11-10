import { Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function IconButton({ size, color, icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPresed]}
    >
      <Ionicons size={size} name={icon} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPresed: {
    opacity: 0.7,
  },
});
