import { Modal, View, Text, Pressable } from "react-native";
import { useThemeStore } from "../states/useThemeStore";
import { Ionicons } from "@expo/vector-icons";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;

  buttonText1Function?: () => void;
  buttonText1?: string;
  showButtonText2?: boolean;
  buttonText2?: string;
}

export const CustomModal = ({
  visible,
  onClose,
  title,
  buttonText1Function,
  children,
  buttonText1,
  buttonText2,
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
            position: "relative",
          }}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <Pressable
            style={{
              position: "absolute",
              top: 18,
              right: 10,
              zIndex: 10,
              backgroundColor: currentColors.danger,
            }}
            onPress={onClose}
          >
            <Ionicons name="close" size={26} color={currentColors.text} />
          </Pressable>
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

          <View style={{ flexDirection: "row", gap: 10 }}>
            {buttonText1 && (
              <Pressable
                onPress={() => buttonText1Function && buttonText1Function()}
                style={{
                  backgroundColor: currentColors.primary,
                  padding: 10,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 20,
                  flex: 1,
                }}
              >
                <Text style={{ color: currentColors.buttonText }}>
                  {buttonText1}
                </Text>
              </Pressable>
            )}
            {buttonText2 && (
              <Pressable
                onPress={onClose}
                style={{
                  backgroundColor: currentColors.danger,
                  padding: 10,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 20,
                  flex: 1,
                }}
              >
                <Text style={{ color: currentColors.buttonText }}>
                  {buttonText2}
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
