import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import Colors from "../../helpers/Colors";
import Icons from "../../helpers/Icons";
import PropTypes from "prop-types";
import Ripple from "../../helpers/Ripple";

export default class Header extends React.Component {

    /**
     * Set default values for the props
     */
    propTypes = {
        isBack: PropTypes.bool, // show the back button
        onBackPress: PropTypes.func, // callback for the back button event
        title: PropTypes.string, // title
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                style={styles.container}>
                <View
                    style={styles.leftCenterContainer}>
                    <Ripple
                        onPress={() => {
                            this.props.onBackPress && this.props.onBackPress()
                        }}>
                        <Image
                            style={styles.drawerBackImage}
                            resizeMode={'contain'}
                            source={this.props.isBack ? Icons.back : Icons.burger_menu}
                        />
                    </Ripple>
                    <Text
                        style={styles.title}
                        numberOfLines={1}>
                        {this.props.title}
                    </Text>
                </View>

                {
                    !this.props.isBack && this.rightContentOfHeader()
                }
            </View>
        );
    }

    rightContentOfHeader = () => {
        return (
            <View
                style={styles.leftCenterContainer}>
                <Ripple
                    style={styles.ripple}>
                    <Image
                        source={Icons.notification}
                    />
                    <View
                        style={styles.notificationBudge}>
                        <Text
                            style={styles.notificationBudgeCount}>
                            2
                        </Text>
                    </View>
                </Ripple>
                <Ripple>
                    <Image
                        style={styles.filter}
                        source={Icons.filter}
                    />
                </Ripple>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: Colors.black
    },
    leftCenterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerBackImage: {
        padding: 10,
        tintColor: Colors.white
    },
    title: {
        fontSize: 20,
        color: Colors.white,
        marginStart: 15,
    },
    ripple: {
        paddingHorizontal: 4
    },
    notificationBudge: {
        position: 'absolute',
        top: -3,
        right: -2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 14,
        height: 14,
        borderRadius: 7
    },
    notificationBudgeCount: {
        fontSize: 8,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginStart: 1,
        color: Colors.white
    },
    filter: {
        marginStart: 15
    },
});
