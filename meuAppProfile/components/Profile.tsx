import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={styles.card}>

      {/* Foto de perfil */}
      <Image
        source={require("../assets/images/ZS_9.png")}
        style={styles.photo}
      />

      {/* Nome */}
      <Text style={styles.name}>Matheus Vinnycius</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        Estudante de Sistemas para Internet na UNICAP.
        Apaixonado por tecnologia e programação.
        Gosto de criar projetos e liderar equipes.
      </Text>

      {/* Ícones sociais */}
      <View style={styles.socials}>
        <FontAwesome name="github" size={28} color="black" />
        <FontAwesome name="instagram" size={28} color="#E1306C" />
        <FontAwesome name="linkedin" size={28} color="#0077B5" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

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
  },

});