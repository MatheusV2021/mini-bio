import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

// Componentes padrão do template Expo
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

// Importando o componente Profile criado na pasta components
import Profile from '@/components/Profile';

export default function HomeScreen() {
  return (

    // Scroll principal da tela
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#ffffff' }}
      
      // Imagem do topo do app
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >

      {/* Container principal com fundo branco */}
      <ThemedView style={styles.white}>

        {/* ===== TÍTULO DO APP ===== */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.blackText}>
            App criado para a disciplina Programação para Dispositivos Móveis
          </ThemedText>

          {/* Animação de mãozinha do template */}
          <HelloWave />
        </ThemedView>


        {/* ===== COMPONENTE PROFILE ===== */}
        <ThemedView style={styles.profileContainer}>
          <Profile />
        </ThemedView>


        {/* ===== SEÇÃO PADRÃO DO TEMPLATE ===== */}
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.blackText}>
            Step 1: Try it
          </ThemedText>

          <ThemedText style={styles.blackText}>
            Edit app/(tabs)/index.tsx to see changes. Press{' '}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: 'cmd + d',
                android: 'cmd + m',
                web: 'F12',
              })}
            </ThemedText>{' '}
            to open developer tools.
          </ThemedText>
        </ThemedView>


        {/* ===== LINK DO TEMPLATE ===== */}
        <ThemedView style={styles.stepContainer}>
          <Link href="/modal">
            <Link.Trigger>
              <ThemedText type="subtitle" style={styles.blackText}>
                Step 2: Explore
              </ThemedText>
            </Link.Trigger>
          </Link>
        </ThemedView>

      </ThemedView>

    </ParallaxScrollView>
  );
}

// ===== ESTILOS =====
const styles = StyleSheet.create({

  // Fundo branco
  white: {
    backgroundColor: '#ffffff',
  },

  // Container do título
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },

  // Container do Profile
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },

  // Containers das seções
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#ffffff',
  },

  // Texto preto
  blackText: {
    color: '#000000',
  },

  // Logo do React do template
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});