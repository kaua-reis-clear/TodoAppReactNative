import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
    row: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#F2E9E4',
        alignItems: 'center'
    },
    desc: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttons: {
        flexDirection: 'row'
    },
    button: (done, type) => ({
        backgroundColor: type === 'edit' ? '#89cff0' : type === 'del' ? 'crimson' : done ? '#ffb404' : '#18c40c',
        borderRadius: 5,
        padding: 4,
        marginHorizontal: 5 
    }),
})

export default style