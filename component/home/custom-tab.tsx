import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import * as Haptics from 'expo-haptics';

type TabType = "books" | "reviews" | "lists"; 

interface CustomTabProps {
    activeTab : TabType, 
    handleTabPress: (tab: TabType) => void
}

export const CustomTab = ({ activeTab, handleTabPress} : CustomTabProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, activeTab === "books" && styles.activeButton]}
                onPress={() => {
                    handleTabPress("books")
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }}
            >
                <Text style={styles.text}>Books</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, activeTab === "reviews" && styles.activeButton]}
                onPress={() => {
                    handleTabPress("reviews")
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }}
            >
                <Text style={styles.text}>Reviews</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, activeTab === "lists" && styles.activeButton]}
                onPress={() => {
                    handleTabPress("lists")
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }}
            >
                <Text style={styles.text}>Lists</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      marginTop: Platform.OS === "ios" ? 50 : 30,
      flexDirection: "row"
    },
    button: {
        backgroundColor: "#000",
        width: 100
    },
    activeButton: {
        backgroundColor: "#333",
    },
    text: {
        textAlign: "center",
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF"
    }
  });
  