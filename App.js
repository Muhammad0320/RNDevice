import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import IconButton from "./component/ui/IconButton";
import { Colors } from "./utils/color";
import AllPlaces from "./screens/AllPlaces";
import AddPlaces from "./screens/AddPlaces";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({}) => ({
            contentStyle: { backgroundColor: Colors.gray700 },
            headerTintColor: Colors.gray700,
            headerStyle: { backgroundColor: Colors.primary500 },
          })}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your favourite places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlaces}
            options={{ title: "Add a new place" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
