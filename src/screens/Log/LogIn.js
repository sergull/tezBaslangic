import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import * as Yup from "yup";
import Button from "../../components/Button";
import { Formik } from "formik";
import SocialChoice from "../../components/SocialChoice";

const Log_in = ({ navigation }) => {

  async function handleFormSubmit() {
    navigation.navigate("Feed");
    
  }
  function handleSignUp() {
    navigation.navigate('SignIn');
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
        <Text style={styles.login_text}>Giriş Yap</Text>
      </View>

      <Formik
        initialValues={{ password: "", email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Lütfen geçerli bir email adresi giriniz!")
            .required(),
          password: Yup.string()
            .required("Şifre boş bırakılamaz!")
            .min(8, "Şifrenizin en az 8 karakter olması gerekmektedir! "),
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

            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
              style={{ alignItems: "flex-end", paddingHorizontal: 10 }}
            >
              <Text style={{ margin: 5, color: "#68B984", fontSize: 16 }}>
                Şifremi Unuttum
              </Text>
            </TouchableOpacity>
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
            <Button
              text="Giriş Yap"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <View style={styles.footer_container}>
        <SocialChoice image={require("../../../assets/google_logo.jpg")} />
        <SocialChoice image={require("../../../assets/facebook_logo.png")} />
      </View>

      <View style={styles.signup_container}>
                <Text>Hesabın yok mu?</Text>
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.signup_text}> Kaydol</Text>
                </TouchableOpacity>
            </View>

    </View>
  );
};

export default Log_in;

const styles = StyleSheet.create({
 
  container: {
    paddingHorizontal: 20,
    flex:1,
    justifyContent:"center",
    backgroundColor:"white"
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
},
signup_text: {
    color: '#68B984',
    fontWeight: '450'
}
});
