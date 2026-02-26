import { StyleSheet, View, ScrollView, Platform, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, BottomTabInset } from '@/constants/theme';

export default function ProfileScreen() {
    const theme = useColorScheme();
    const isDark = theme === 'dark';

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <ThemedView style={styles.header}>
                        <ThemedText type="title">Team Profile</ThemedText>
                    </ThemedView>

                    <View style={[styles.mainCard, isDark ? styles.cardDark : styles.cardLight]}>
                        <View style={[styles.avatarPlaceholder, isDark ? styles.avatarDark : styles.avatarLight]}>
                            <MaterialIcons name="groups" size={48} color={isDark ? '#4DA8DA' : '#007AFF'} />
                        </View>
                        <ThemedText type="subtitle" style={styles.name}>Group 6</ThemedText>
                        <ThemedText type="smallBold" style={styles.bio}>App Development & UI/UX Design Team</ThemedText>

                        <View style={styles.statsRow}>
                            <View style={styles.statBox}>
                                <ThemedText type="title" style={styles.statValue}>5</ThemedText>
                                <ThemedText type="small" style={styles.statLabel}>Members</ThemedText>
                            </View>
                            <View style={[styles.divider, isDark ? styles.dividerDark : styles.dividerLight]} />
                            <View style={styles.statBox}>
                                <ThemedText type="title" style={styles.statValue}>1</ThemedText>
                                <ThemedText type="small" style={styles.statLabel}>Active Project</ThemedText>
                            </View>
                            <View style={[styles.divider, isDark ? styles.dividerDark : styles.dividerLight]} />
                            <View style={styles.statBox}>
                                <ThemedText type="title" style={styles.statValue}>100%</ThemedText>
                                <ThemedText type="small" style={styles.statLabel}>Dedication</ThemedText>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <ThemedText type="subtitle" style={styles.sectionTitle}>About Our Team</ThemedText>
                        <View style={[styles.infoCard, isDark ? styles.cardDark : styles.cardLight]}>
                            <ThemedText style={styles.bodyText}>
                                We are Group 6, a passionate collective of 5 developers and designers.
                                We specialize in building seamless, cross-platform experiences using modern
                                technologies like React Native and Expo.
                            </ThemedText>
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
        paddingBottom: BottomTabInset + Spacing.six,
    },
    header: {
        paddingVertical: Spacing.four,
        alignItems: 'center',
    },
    mainCard: {
        padding: Spacing.five,
        borderRadius: Spacing.four,
        alignItems: 'center',
        marginBottom: Spacing.five,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.08,
                shadowRadius: 12,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    cardLight: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
    },
    cardDark: {
        backgroundColor: '#1C1C1E',
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.three,
    },
    avatarLight: {
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    avatarDark: {
        backgroundColor: 'rgba(77, 168, 218, 0.15)',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: Spacing.one,
    },
    bio: {
        opacity: 0.8,
        textAlign: 'center',
        marginBottom: Spacing.four,
        color: '#007AFF', // Will be overridden by active theme tint if we had one, keeping it blue tinted for now
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: Spacing.two,
        backgroundColor: 'rgba(150, 150, 150, 0.05)',
        paddingVertical: Spacing.three,
        borderRadius: Spacing.three,
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
    },
    statValue: {
        fontSize: 22,
        marginBottom: 2,
    },
    statLabel: {
        opacity: 0.6,
    },
    divider: {
        width: 1,
        height: 30,
    },
    dividerLight: {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    dividerDark: {
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    section: {
        marginBottom: Spacing.five,
    },
    sectionTitle: {
        marginBottom: Spacing.three,
        opacity: 0.9,
    },
    infoCard: {
        padding: Spacing.four,
        borderRadius: Spacing.three,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 5,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    bodyText: {
        opacity: 0.8,
        lineHeight: 24,
    }
});
