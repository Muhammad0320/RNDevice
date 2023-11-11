import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../utils/color";

function OutlinedButton({ icon, onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.textIcon}>
        <Ionicons name={icon} color={Colors.primary500} size={16} />
        <Text style={styles.text}> {children} </Text>
      </View>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderColor: Colors.primary500,
    borderWidth: 2,
    backgroundColor: "transparent",
  },

  pressed: {
    opacity: 0.7,
  },

  textIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    columnGap: 6,
  },

  text: {
    color: Colors.primary500,
    fontSize: 16,
  },
});
