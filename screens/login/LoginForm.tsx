// Formik x React Native example
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import { useThemeStore } from "../../states/useThemeStore";
import { useNavigation } from "@react-navigation/native";

export const LoginForm = () => {
  const { currentColors } = useThemeStore();

  const navigation = useNavigation();

  const handleValidation = (values: any) => {
    const errors: { [key: string]: string | undefined } = {};

    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Ingresa un email valido";
    }

    if (!values.password) {
      errors.password = "";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => navigation.navigate("HomeScreen" as never)}
      // validate={handleValidation}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View
          style={[
            styles.container,
            { backgroundColor: currentColors.background },
          ]}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              color: currentColors.primary,
              marginBottom: 10,
            }}
          >
            Ingresar
          </Text>

          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            style={[styles.input, { color: currentColors.text }]}
            placeholder="Email"
            keyboardType="email-address"
          />
          {errors.email && touched.email && (
            <Text style={{ color: "red" }}>{errors.email}</Text>
          )}

          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          {errors.password && touched.password && (
            <Text style={{ color: "red" }}>{errors.password}</Text>
          )}
          <TouchableOpacity
            onPress={(e: any) => handleSubmit(e)}
            style={{
              backgroundColor: currentColors.primary,
              padding: 15,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Text
              style={{
                color: currentColors.buttonText,
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Ingresar
            </Text>
          </TouchableOpacity>

          <Pressable>
            <View
              style={{
                alignSelf: "flex-end",
                marginTop: 10,
                borderBottomWidth: 0.6,
                flexDirection: "row",
              }}
            >
              <Text>No Tienes una cuenta? </Text>
              <Text style={{ color: currentColors.primary }}>Crea una</Text>
            </View>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
