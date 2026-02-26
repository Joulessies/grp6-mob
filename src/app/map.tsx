import { StyleSheet, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, BottomTabInset } from '@/constants/theme';

export default function MapScreen() {
    // Embed URL for TIPQC using completely free OpenStreetMap
    const tipqcEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=121.054294%2C14.602519%2C121.064294%2C14.612519&layer=mapnik&marker=14.607520%2C121.059294";

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ThemedView style={styles.mapContainer}>
                    {Platform.OS === 'web' ? (
                        <iframe
                            src={tipqcEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    ) : (
                        <WebView
                            source={{ uri: tipqcEmbedUrl }}
                            style={styles.webview}
                            scalesPageToFit={true}
                            bounces={false}
                        />
                    )}
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
        paddingBottom: BottomTabInset,
        height: '100%',
    },
    mapContainer: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#1E3A5F', // Used as fallback background
    },
    webview: {
        flex: 1,
        backgroundColor: 'transparent',
    }
});
