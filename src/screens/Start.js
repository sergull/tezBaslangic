import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import styles from "./Start.Style";


const Start = ({ navigation }) => {
  const loginHandler = () => {
    navigation.navigate("LogIn");
  };

  const registerHandler = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          //justifyContent: "flex-start",
          alignSelf: "center",
          alignItems: "center",
         // marginTop: 100,
         // ...StyleSheet.absoluteFill,
         // zIndex: 1,
        }}
      >
        <Text style={styles.text}>Pay</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.bottomContainer}>
            <View>
          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>GİRİŞ YAP</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>KAYIT OL</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Start;
