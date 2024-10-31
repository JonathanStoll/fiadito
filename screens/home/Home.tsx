import { View, Text, Pressable } from "react-native";
import { useThemeStore } from "../../states/useThemeStore";
import { CustomModal } from "../../components/CustomModal";
import { useState } from "react";

export const Home = () => {
  const { toggleTheme, currentColors } = useThemeStore();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
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

      <CustomModal visible={modalVisible} onClose={toggleModal} title="Hello">
        <Text>Hello</Text>
      </CustomModal>
    </View>
  );
};
