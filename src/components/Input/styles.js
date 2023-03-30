import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    inputArea: {

    },
    input: {
        backgroundColor: '#F2E9E4',
        fontSize: 17,
        width: (Dimensions.get('window').width - 20),
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    }
});

export default style