import {StyleSheet} from 'react-native';
import Colors from "../../../helpers/Colors";

const styles = StyleSheet.create({
    suggestionListItem: {
        marginVertical: 14,
        paddingVertical: 12,
        justifyContent: 'space-between',
        borderRadius: 6,
        backgroundColor: 'rgba(55, 55, 55, 1)',
        alignItems: 'center',
        marginTop: 50,
        paddingLeft: '35%'
    },
    title: {
        fontSize: 16,
        color: Colors.white,
        alignSelf: 'flex-start',
        marginLeft: 20,
        paddingRight: 10
    },
    description: {
        fontSize: 16,
        color: Colors.white,
        alignSelf: 'flex-start',
        marginLeft: 20,
        paddingRight: 10
    },
    ratingContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        height: 26,
        marginLeft: 20
    },
    rating: {
        marginHorizontal: 2,
        width: 12,
        height: 12
    },
    starRoot: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    starLabel: {
        fontSize: 12,
        color: Colors.white,
        marginLeft: 10,
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        top: 0,
        width: '35%',
        height: 190,
        left: 10,
        bottom: 10
    },
});

export default styles;
