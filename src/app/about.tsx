import { StyleSheet, View, ScrollView, Platform, useColorScheme, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, BottomTabInset } from '@/constants/theme';

const values = [
    { id: 1, title: 'Innovation', icon: 'lightbulb', desc: 'Thinking outside the box to deliver cutting-edge solutions.' },
    { id: 2, title: 'Collaboration', icon: 'people', desc: 'Working together seamlessly across our team and with our clients.' },
    { id: 3, title: 'Excellence', icon: 'star', desc: 'Striving for the highest quality in everything we create.' },
];

export default function AboutScreen() {
    const theme = useColorScheme();
    const isDark = theme === 'dark';

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {/* Header Image Header / Banner */}
                    <View style={[styles.heroBlock, isDark ? styles.heroBlockDark : styles.heroBlockLight]}>
                        <View style={styles.iconWrapper}>
                            <MaterialIcons name="business" size={48} color={isDark ? '#4DA8DA' : '#007AFF'} />
                        </View>
                        <ThemedText type="title" style={styles.title}>About PitakaPal</ThemedText>
                        <ThemedText style={styles.subtitle}>
                            Designing the future, one screen at a time.
                        </ThemedText>
                    </View>

                    {/* Mission Statement */}
                    <View style={styles.section}>
                        <ThemedText type="subtitle" style={styles.sectionTitle}>Our Mission</ThemedText>
                        <ThemedText style={styles.bodyText}>
                            We are a dedicated team of passionate developers, designers, and visionaries. Our mission is to bridge the gap between complex functionality and beautiful user experiences. Through collaborative effort and relentless iteration, Group 6 constructs applications that are not just functional, but delightful to use.
                        </ThemedText>
                    </View>
                    {/* Core Values */}
                    <View style={styles.section}>
                        <ThemedText type="subtitle" style={styles.sectionTitle}>Core Values</ThemedText>
                        <View style={styles.valuesList}>
                            {values.map((value) => (
                                <View key={value.id} style={[styles.valueCard, isDark ? styles.cardDark : styles.cardLight]}>
                                    <View style={[styles.valueIconContainer, isDark ? styles.iconDark : styles.iconLight]}>
                                        <MaterialIcons name={value.icon as any} size={24} color={isDark ? '#4DA8DA' : '#007AFF'} />
                                    </View>
                                    <View style={styles.valueTextContainer}>
                                        <ThemedText type="smallBold" style={styles.valueTitle}>{value.title}</ThemedText>
                                        <ThemedText type="small" style={styles.valueDesc}>{value.desc}</ThemedText>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Version Info & Footer */}
                    <View style={styles.footer}>
                        <ThemedText type="small" style={styles.footerText}>App Version 1.0.0</ThemedText>
                        <ThemedText type="small" style={styles.footerText}>© 2026 PitakaPal by Group 6</ThemedText>
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
    },
    scrollContent: {
        paddingBottom: BottomTabInset + Spacing.six,
    },
    heroBlock: {
        alignItems: 'center',
        paddingVertical: Spacing.six,
        paddingHorizontal: Spacing.four,
        borderBottomLeftRadius: Spacing.five,
        borderBottomRightRadius: Spacing.five,
        marginBottom: Spacing.four,
    },
    heroBlockLight: {
        backgroundColor: '#F7F8FA',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    heroBlockDark: {
        backgroundColor: '#1C1C1E',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    iconWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.three,
    },
    title: {
        fontSize: 28,
    },
    subtitle: {
        marginTop: Spacing.one,
        opacity: 0.7,
        textAlign: 'center',
    },
    section: {
        paddingHorizontal: Spacing.four,
        marginBottom: Spacing.five,
    },
    sectionTitle: {
        marginBottom: Spacing.two,
        opacity: 0.9,
    },
    bodyText: {
        opacity: 0.8,
        lineHeight: 24,
    },
    valuesList: {
        gap: Spacing.three,
        marginTop: Spacing.one,
    },
    valueCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Spacing.three,
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
    cardDark: {
        backgroundColor: '#2C2C2E',
    },
    cardLight: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
    },
    valueIconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.three,
    },
    iconDark: {
        backgroundColor: 'rgba(77, 168, 218, 0.15)',
    },
    iconLight: {
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    valueTextContainer: {
        flex: 1,
    },
    valueTitle: {
        fontWeight: '600',
        marginBottom: 2,
    },
    valueDesc: {
        opacity: 0.6,
        lineHeight: 18,
    },
    footer: {
        alignItems: 'center',
        marginTop: Spacing.two,
        opacity: 0.5,
    },
    footerText: {
        marginTop: Spacing.half,
    }
});
