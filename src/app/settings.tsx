import { StyleSheet, Switch, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing, BottomTabInset } from '@/constants/theme';

export default function SettingsScreen() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ThemedView style={styles.header}>
                    <ThemedText type="title">Settings</ThemedText>
                </ThemedView>
                <ThemedView style={styles.card}>
                    <View style={styles.row}>
                        <ThemedText type="smallBold">Push Notifications</ThemedText>
                        <Switch value={notifications} onValueChange={setNotifications} />
                    </View>
                    <View style={[styles.row, styles.borderTop]}>
                        <ThemedText type="smallBold">Dark Mode Override</ThemedText>
                        <Switch value={darkMode} onValueChange={setDarkMode} />
                    </View>
                </ThemedView>
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
        paddingBottom: BottomTabInset + Spacing.three,
    },
    header: {
        paddingVertical: Spacing.four,
        paddingHorizontal: Spacing.three,
    },
    card: {
        borderRadius: Spacing.three,
        backgroundColor: 'rgba(150, 150, 150, 0.1)',
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing.four,
    },
    borderTop: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(150, 150, 150, 0.3)',
    }
});
