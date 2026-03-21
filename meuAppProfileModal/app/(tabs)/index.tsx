import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/ZS_9.png")}
          style={styles.photo}
        />

        <Text style={styles.name}>Matheus Vinnycius</Text>

        <Text style={styles.bio}>
          Estudante de Sistemas para Internet na UNICAP. Apaixonado por
          tecnologia e programação. Gosto de criar projetos e liderar equipes.
        </Text>

        <View style={styles.socials}>
          <TouchableOpacity onPress={() => Linking.openURL("https://github.com/MatheusV2021")}>
            <FontAwesome name="github" size={32} color="#333" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/mat_v15/")}>
            <FontAwesome name="instagram" size={32} color="#E1306C" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/matheus-vinnycius/")}>
            <FontAwesome name="linkedin-square" size={32} color="#0077B5" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Ver mais detalhes</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mais sobre mim</Text>

            <Text style={styles.modalText}>
              • Técnico em Desenvolvimento de Sistemas
            </Text>
            <Text style={styles.modalText}>
              • Estudante de Sistemas para Internet
            </Text>
            <Text style={styles.modalText}>
              • Experiência com Python, Java, Jira e Figma
            </Text>
            <Text style={styles.modalText}>
              • Interesse em IA e visão computacional
            </Text>
            <Text style={styles.modalText}>
              • Participação em projetos e hackathons
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6fc",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
    width: "100%",
    maxWidth: 350,
  },

  photo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: "#007AFF",
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

  bio: {
    textAlign: "center",
    fontSize: 15,
    color: "#555",
    maxWidth: 260,
    marginBottom: 15,
  },

  socials: {
    flexDirection: "row",
    gap: 25,
    marginTop: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)", // 🔥 semi-transparente
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContent: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 340,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  modalText: {
    fontSize: 15,
    color: "#444",
    marginBottom: 10,
    textAlign: "center",
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});