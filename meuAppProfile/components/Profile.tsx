import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      
      {/* foto */}
      <Image
        source={{ uri: "" }}
        style={styles.photo}
      />

      {/* nome */}
      <Text style={styles.name}>Matheus Vinnycius</Text>

      {/* bio */}
      <Text style={styles.bio}>
        Sou estudante de Sistemas para Internet na UNICAP.
        Gosto de programação, IA e liderança de projetos.
        Também curto música e tecnologia.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  bio: {
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
});