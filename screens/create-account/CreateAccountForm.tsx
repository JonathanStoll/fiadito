import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { Formik } from "formik";
import { useThemeStore } from "../../states/useThemeStore";
import { useNavigation } from "@react-navigation/native";

interface initialValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const CreateAccountForm = () => {
  const { currentColors } = useThemeStore();
  const navigation = useNavigation();

  const handleValidation = (values: initialValues) => {
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

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Las constraseñas deben coincidir";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={handleValidation}
      onSubmit={(values) =>
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" as never }],
        })
      }
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
            Crear cuenta
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

          <Text style={styles.label}>Confirmar Password</Text>
          <TextInput
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            style={styles.input}
            placeholder="**********"
            secureTextEntry={true}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
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
              Crear cuenta
            </Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.navigate("Login" as never)}>
            <View
              style={{
                alignSelf: "flex-end",
                marginTop: 10,
                borderBottomWidth: 0.6,
                flexDirection: "row",
              }}
            >
              <Text>Ya tienes una cuenta? </Text>
              <Text style={{ color: currentColors.primary }}>ingresa.</Text>
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
