import { StyleSheet, View, ScrollView, Platform, TouchableOpacity, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, BottomTabInset } from '@/constants/theme';

const features = [
  { id: 'about', title: 'About Us', icon: 'info', description: 'Learn more about our team and mission.', route: '/about' },
  { id: 'profile', title: 'Profile', icon: 'person', description: 'View and manage personal details.', route: '/profile' },
  { id: 'contacts', title: 'Contacts', icon: 'contacts', description: 'Stay in touch with your network.', route: '/contacts' },
  { id: 'map', title: 'Map', icon: 'map', description: 'Discover locations and places.', route: '/map' },
];

export default function HomeScreen() {
  const router = useRouter();
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <View style={[styles.badgeContainer, isDark ? styles.badgeDark : styles.badgeLight]}>
              <ThemedText type="smallBold" style={[styles.badgeText, isDark ? styles.badgeTextDark : styles.badgeTextLight]}>
                TEAM INTRO
              </ThemedText>
            </View>
            <ThemedText type="title" style={styles.title}>Welcome to PitakaPal</ThemedText>
            <ThemedText style={styles.subtitle}>
              Innovating through design. We build seamless, cross-platform experiences that just work beautifully.
            </ThemedText>
          </View>

          {/* Featured Highlights Grid */}
          <View style={styles.highlightsContainer}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>App Content</ThemedText>
            <View style={styles.grid}>
              {features.map((feature) => (
                <TouchableOpacity
                  key={feature.id}
                  style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}
                  activeOpacity={0.8}
                  onPress={() => router.push(feature.route as any)}
                >
                  <View style={[styles.iconContainer, isDark ? styles.iconContainerDark : styles.iconContainerLight]}>
                    <MaterialIcons
                      name={feature.icon as any}
                      size={28}
                      color={isDark ? '#4DA8DA' : '#007AFF'}
                    />
                  </View>
                  <ThemedText type="default" style={styles.cardTitle}>{feature.title}</ThemedText>
                  <ThemedText type="small" style={styles.cardDesc}>{feature.description}</ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          </View>



        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
  },
  scrollContent: {
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.six,
  },
  header: {
    marginBottom: Spacing.five,
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  badgeContainer: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
    borderRadius: Spacing.five,
  },
  badgeDark: {
    backgroundColor: 'rgba(77, 168, 218, 0.15)',
  },
  badgeLight: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  badgeText: {
    letterSpacing: 1,
    fontSize: 12,
  },
  badgeTextDark: {
    color: '#4DA8DA',
  },
  badgeTextLight: {
    color: '#007AFF',
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
  },
  subtitle: {
    opacity: 0.7,
    marginTop: Spacing.one,
    lineHeight: 24,
  },
  highlightsContainer: {
    marginTop: Spacing.two,
  },
  sectionTitle: {
    marginBottom: Spacing.three,
    opacity: 0.9,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: Spacing.four,
    borderRadius: Spacing.four,
    marginBottom: Spacing.four,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cardDark: {
    backgroundColor: '#1C1C1E',
  },
  cardLight: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.three,
  },
  iconContainerDark: {
    backgroundColor: 'rgba(77, 168, 218, 0.15)',
  },
  iconContainerLight: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  cardTitle: {
    fontWeight: '600',
    marginBottom: Spacing.one,
  },
  cardDesc: {
    opacity: 0.6,
    lineHeight: 18,
  },

});
