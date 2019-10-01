import React from "react";
import {Image, Text} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import Icons from "../../../helpers/Icons";
import Ripple from "../../../helpers/Ripple";

export const TrendingStoriesComponent = (props) => {
    return (
        <Ripple
            onPress={() => {
                props.onPress && props.onPress()
            }}>
            <Image
                style={styles.image}
                resizeMode={'cover'}
                source={props.data.item.item.photo}
            />
            <Text
                style={styles.title}
                numberOfLines={1}>
                {props.data.item.item.song_title}
            </Text>
            <Text
                style={styles.content}
                numberOfLines={1}>
                {props.data.item.item.song_singer}
            </Text>
        </Ripple>
    )
};

/**
 * Set default values for the props
 */
TrendingStoriesComponent.prototype = {
    song_image: PropTypes.string,
    song_title: PropTypes.string,
    song_singer: PropTypes.string,
    onPress: PropTypes.func
};
