import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import styles from "./Start.Style";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import Log_in from "./Log/LogIn";
import SignIn from "./Log/SignIn";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const [isRegister, setIsRegister] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.1, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const focusImageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      //400ms gecikmeyle opaklığı 800msde 1 yap . position 1 ise daha kısa sürede kaybet
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    // if (isRegister) {
    //   setIsRegister(false);
    // }
    navigation.navigate("Log_in")

  };

  const registerHandler = () => {
    imagePosition.value = 0;
    // if (!isRegister) {
    //   setIsRegister(true);
    // }
    navigation.navigate("SignIn")

  };

  return (
    <View style={styles.container}>
      {/* <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}> */}
        <View
          style={{
            justifyContent: "flex-start",
            alignSelf: "center",
            alignItems: "center",
            marginTop: 150,
            ...StyleSheet.absoluteFill,
            zIndex: 1,
          }}
        >
          <Text style={styles.text}>BILLER</Text>
        </View>
        {/* <Svg height={height} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height} />
          </ClipPath>

          <Image
            href={require("../../assets/beyaz.png")}
            height={height + 50}
            width={width}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>

        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text
            onPress={() => (imagePosition.value = 1)}
            style={{ fontSize: 20 }}
          >
            X
          </Text>
        </Animated.View> */}
      {/* </Animated.View> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.bottomContainer}>
          {/* <Animated.View style={buttonAnimatedStyle}> */}
            <TouchableOpacity style={styles.button} onPress={loginHandler}>
              <Text style={styles.buttonText}>GİRİŞ YAP</Text>
            </TouchableOpacity>
          {/* </Animated.View> */}

          {/* <Animated.View style={buttonAnimatedStyle}> */}
            <TouchableOpacity style={styles.button} onPress={registerHandler}>
              <Text style={styles.buttonText}>KAYIT OL</Text>
            </TouchableOpacity>
          {/* </Animated.View> */}

          {/* <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}> */}
            {/* {!isRegister && (
              <>
                <Log_in />
                <View style={{ paddingHorizontal: 25 }}>
                  <Button
                    text="Giris Yap"
                    onPress={() => navigation.navigate("Feed")}
                  />
                  <TouchableOpacity style={{ alignItems: "flex-end" }}>
                    <Text style={{ margin: 5, color: "#68B984", fontSize: 16 }}>
                      Şifremi Unuttum
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
            {isRegister && (
              <>
                <SignIn />
                <View style={{ paddingHorizontal: 25 }}>
                  <Button
                    text="Kayıt Ol"
                    onPress={() => navigation.navigate("Feed")}
                  />
                </View>
              </>
            )} */}

        
          {/* </Animated.View> */}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
