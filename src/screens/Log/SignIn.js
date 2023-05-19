import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import * as Yup from "yup";
import Button from "../../components/Button";
import { Formik } from "formik";
import SocialChoice from "../../components/SocialChoice";

const SignIn = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit() {
    try {
      setLoading(true);
      navigation.navigate("HomeStackScreen");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  function handleLogin() {
    navigation.navigate("LogIn");
  }
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={require("../../../assets/give-money.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View>
        <Text style={styles.login_text}>Kayıt Ol</Text>
      </View>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Lütfen isminizi giriniz."),
          email: Yup.string()
            .email("Lütfen geçerli bir email adresi giriniz!")
            .required(),
          password: Yup.string()
            .required("Şifre boş bırakılamaz!")
            .min(8, "Şifrenizin en az 8 karakter olması gerekmektedir! "),

          confirmPassword: Yup.string()
            .required("Şifre boş bırakılamaz.")
            .label("Şifreyi Doğrula")
            .test("passwords-match", "Şifreler uyuşmalı", function (value) {
              return this.parent.password === value;
            }),
        })}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldTouched,
          touched,
          errors,
        }) => (
          <>
            <Input
              value={values.name}
              onType={handleChange("name")}
              placeholder="İsminizi giriniz"
              iconName="person-outline"
              onBlur={() => setFieldTouched("name")}
            />

            {touched.name && errors.name && (
              <Text
                style={{
                  fontSize: 13,
                  color: "#FF7000",
                  fontStyle: "italic",
                  paddingLeft: 15,
                  fontWeight: "bold",
                  paddingBottom: 5,
                }}
              >
                {errors.name}
              </Text>
            )}
            <Input
              onType={handleChange("email")}
              value={values.email}
              onBlur={() => setFieldTouched("email")}
              placeholder={"E-posta giriniz"}
              iconName="mail-outline"
            />
            {touched.email && errors.email && (
              <Text
                style={{
                  fontSize: 13,
                  color: "#FF7000",
                  fontStyle: "italic",
                  paddingLeft: 15,
                  fontWeight: "bold",
                  paddingBottom: 5,
                }}
              >
                {errors.email}
              </Text>
            )}
            <Input
              isSecure
              onType={handleChange("password")}
              value={values.password}
              onBlur={() => setFieldTouched("password")}
              placeholder={"Şifre giriniz"}
              iconName="key-outline"
            />
            {touched.password && errors.password && (
              <Text
                style={{
                  fontSize: 13,
                  color: "#FF7000",
                  fontStyle: "italic",
                  paddingLeft: 15,
                  fontWeight: "bold",
                  paddingBottom: 5,
                }}
              >
                {errors.password}
              </Text>
            )}

            <Input
              value={values.confirmPassword}
              onType={handleChange("confirmPassword")}
              placeholder="Şifrenizi tekrar giriniz"
              iconName="key-outline"
              isSecure
              onBlur={() => setFieldTouched("confirmPassword")}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text
                style={{
                  fontSize: 13,
                  color: "#FF7000",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  paddingLeft: 15,
                }}
              >
                {errors.confirmPassword}
              </Text>
            )}

            <Button
              text="Kayıt Ol"
              onPress={() => navigation.navigate("LogIn")}
            />
          </>
        )}
      </Formik>

      <View style={styles.footer_container}>
        <SocialChoice image={require("../../../assets/google_logo.jpg")} />
        <SocialChoice image={require("../../../assets/facebook_logo.png")} />
      </View>

      <View style={styles.signup_container}>
        <Text>Hesabın var mı?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.signup_text}> Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  image_container: {
    resizeMode: "contain",
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 5,
  },

  login_text: {
    fontSize: 25,
    fontWeight: "500",
    color: "#3D5656",
    marginBottom: 30,
    textAlign: "center",
  },
  footer_container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  signup_container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  signup_text: {
    color: "#68B984",
    fontWeight: "450",
  },
});
