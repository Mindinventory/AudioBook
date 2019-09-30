import {StyleSheet} from 'react-native';
import Colors from "../../../helpers/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    textInputContainer: {
        marginVertical: 14,
        marginHorizontal: 14,
        paddingVertical: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 27.5,
        backgroundColor: 'rgba(55, 55, 55, 1)',
        alignItems: 'center'
    },
    suggestionListItem: {
        marginVertical: 14,
        marginHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderRadius: 6,
        backgroundColor: 'rgba(55, 55, 55, 1)',
        alignItems: 'center',
        marginTop: 50,
        paddingLeft: '35%'
    },
    textInput: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '85%',
        color: '#fff',
        fontSize: 18,
        paddingStart: 14
    },
    imgSearch: {
        position: 'absolute',
        right: 5,
        width: '15%',
    },
    trendingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    trendingLabel: {
        fontSize: 20,
        color: Colors.white,
        marginVertical: 20,
    },
    viewAllContainer: {
        borderRadius: 16,
        borderWidth: 1,
        paddingHorizontal: 13,
        paddingVertical: 6,
        borderColor: Colors.white,
        alignSelf: 'center'
    },
    viewAllLabel: {
        fontSize: 13,
        color: Colors.white,
    },
    listing: {
        paddingLeft: 16
    },
});

export default styles;
