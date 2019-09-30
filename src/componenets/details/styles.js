import {StyleSheet} from 'react-native';
import Colors from "../../helpers/Colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    scrollContainer: {
        flex: 1,
        borderTopLeftRadius: 6,
        backgroundColor: Colors.lightBlack,
        marginTop: 20,
        marginLeft: 20
    },
    scroll: {
        flexDirection: 'row'
    },
    image: {
        width: 150,
        height: 220
    },
    suggestionName: {
        fontSize: 16,
        color: Colors.white,
        marginTop: 10,
        marginLeft: 10
    },
    authorName: {
        fontSize: 14,
        color: Colors.white,
        marginTop: 6,
        marginLeft: 10
    },
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 10
    },
    stars: {
        marginHorizontal: 2,
        width: 12,
        height: 12
    },
    starsLabel: {
        fontSize: 10,
        color: Colors.white,
        marginLeft: 10
    },
    download: {
        fontSize: 14,
        color: Colors.blue,
        marginVertical: 8,
        marginLeft: 10
    },
    divider: {
        marginLeft: 20,
        marginTop: 20,
        height: 2,
        backgroundColor: Colors.white
    },
    author: {
        fontSize: 14,
        color: Colors.white,
        marginLeft: 20,
        marginTop: 10
    },
    aboutTitle: {
        fontSize: 16,
        color: Colors.white,
        marginLeft: 20,
        marginTop: 10
    },
    aboutText: {
        fontSize: 12,
        color: Colors.white,
        marginLeft: 20,
        marginTop: 10
    }
});

export default styles;
