import { Modal, View, Text, Pressable } from "react-native";
import { useThemeStore } from "../states/useThemeStore";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const CustomModal = ({
  visible,
  onClose,
  title,
  children,
}: CustomModalProps) => {
  const { currentColors } = useThemeStore();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onTouchStart={onClose}
      >
        <View
          style={{
            backgroundColor: currentColors.background,
            borderRadius: 10,
            padding: 20,
            width: "90%",
            maxWidth: 500,
          }}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 15,
              color: currentColors.text,
            }}
          >
            {title}
          </Text>

          {children}

          <Pressable
            onPress={onClose}
            style={{
              backgroundColor: currentColors.primary,
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: currentColors.buttonText }}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
