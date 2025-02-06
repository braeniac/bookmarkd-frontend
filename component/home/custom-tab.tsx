
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';


export const CustomTab = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, ]}
                onPress={() => console.log('hello')}
            >
                <Text style={styles.text}>Books</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>Reviews</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
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
        padding: 10,
        backgroundColor: "#000"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF"
    }
  });
  