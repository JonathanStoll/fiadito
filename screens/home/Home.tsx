import { View, Text, Pressable, Alert } from "react-native";
import { useThemeStore } from "../../states/useThemeStore";
import { CustomModal } from "../../components/CustomModal";
import { useState } from "react";

export const Home = () => {
  const { toggleTheme, currentColors } = useThemeStore();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: currentColors.background,
        padding: "5%",
      }}
    >
      <Pressable
        onPress={toggleTheme}
        style={{
          padding: 10,
          backgroundColor: currentColors.primary,
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: currentColors.buttonText }}>Toggle theme</Text>
      </Pressable>

      <Pressable onPress={toggleModal}>
        <Text>Open modal</Text>
      </Pressable>

      <CustomModal
        visible={modalVisible}
        onClose={toggleModal}
        title="Custom modal"
        buttonText1Function={() =>
          Alert.alert("Test", "Test button function 1")
        }
        buttonText1="Alerta"
        buttonText2="Cancel"
      >
        <Text>Hello</Text>
      </CustomModal>
    </View>
  );
};
