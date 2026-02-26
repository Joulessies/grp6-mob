import { StyleSheet, ScrollView, View, Platform, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, BottomTabInset } from '@/constants/theme';

const teamMembers = [
    { id: 1, name: 'Julius San Jose', role: 'Group Leader' },
    { id: 2, name: 'Bryan Erickson Soriano', role: 'Group Member' },
    { id: 3, name: 'Jermaine Christian Tan', role: 'Group Member' },
    { id: 4, name: 'Joshua Daniel Vardeleon', role: 'Group Member' },
    { id: 5, name: 'Kyle Villanueva', role: 'Group Member' },
];

export default function ContactsScreen() {
    const theme = useColorScheme();
    const isDark = theme === 'dark';

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <ThemedText type="smallBold" style={[styles.badgeText, isDark ? styles.badgeTextDark : styles.badgeTextLight]}>
                        TEAM DIRECTORY
                    </ThemedText>
                    <ThemedText type="title">Group 6 Members</ThemedText>
                    <ThemedText style={styles.subtitle}>Get in touch with the brilliant minds behind this project.</ThemedText>
                </View>

                <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
                    {teamMembers.map((member) => {
                        // Get initials for the avatar
                        const initials = member.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('');

                        return (
                            <View key={member.id} style={[styles.memberCard, isDark ? styles.cardDark : styles.cardLight]}>
                                <View style={[styles.avatar, isDark ? styles.avatarDark : styles.avatarLight]}>
                                    <ThemedText type="subtitle" style={[styles.avatarText, isDark ? styles.avatarTextDark : styles.avatarTextLight]}>
                                        {initials}
                                    </ThemedText>
                                </View>

                                <View style={styles.info}>
                                    <ThemedText type="smallBold" style={styles.memberName}>{member.name}</ThemedText>
                                    <ThemedText type="small" style={styles.memberRole}>{member.role}</ThemedText>
                                </View>
                            </View>
                        );
                    })}
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
    header: {
        paddingTop: Spacing.four,
        paddingHorizontal: Spacing.four,
        marginBottom: Spacing.three,
        gap: Spacing.one,
    },
    badgeText: {
        letterSpacing: 1,
        fontSize: 12,
        marginBottom: Spacing.one,
    },
    badgeTextDark: {
        color: '#4DA8DA',
    },
    badgeTextLight: {
        color: '#007AFF',
    },
    subtitle: {
        opacity: 0.7,
        marginTop: Spacing.one,
    },
    list: {
        paddingHorizontal: Spacing.four,
        gap: Spacing.three,
        paddingBottom: BottomTabInset + Spacing.five,
        paddingTop: Spacing.two,
    },
    memberCard: {
        flexDirection: 'row',
        padding: Spacing.four,
        borderRadius: Spacing.four,
        alignItems: 'center',
        gap: Spacing.four,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.04,
                shadowRadius: 6,
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
        borderColor: 'rgba(0,0,0,0.04)',
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarDark: {
        backgroundColor: 'rgba(77, 168, 218, 0.15)',
    },
    avatarLight: {
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
    },
    avatarText: {
        fontWeight: 'bold',
    },
    avatarTextDark: {
        color: '#4DA8DA',
    },
    avatarTextLight: {
        color: '#007AFF',
    },
    info: {
        flex: 1,
    },
    memberName: {
        fontSize: 17,
        marginBottom: 2,
    },
    memberRole: {
        opacity: 0.6,
        marginBottom: Spacing.half,
    },

});
