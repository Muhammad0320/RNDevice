import { Pressable, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../utils/color";

function Button({ icon, onPress, children }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Ionicons name={icon} color={Colors.primary500} size={16} />
        <Text> {children} </Text>
      </View>
    </Pressable>
  );
}

export default Button;
