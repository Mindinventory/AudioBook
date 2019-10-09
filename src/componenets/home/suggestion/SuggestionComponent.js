import {Image, Text, View, TouchableOpacity} from "react-native";
import StarRating from "react-native-star-rating";
import Icons from "../../../helpers/Icons";
import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";
import Ripple from "../../../helpers/Ripple";
import {Transition} from 'react-navigation-fluid-transitions';

export const SuggestionComponent = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                props.onPress && props.onPress()
            }}>
            <Ripple
                style={styles.suggestionListItem}
                onPress={() => {
                    props.onPress && props.onPress()
                }}>
                <Text
                    style={styles.title}
                    numberOfLines={1}>
                    {props.data.item.item.song_title}
                </Text>
                <Text
                    style={styles.description}
                    numberOfLines={3}>
                    {props.data.item.item.song_description}
                </Text>
                <View
                    style={styles.ratingContainer}>
                    <StarRating
                        disabled={true}
                        fullStar={Icons.rating_selected}
                        emptyStar={Icons.rating_unselected}
                        maxStars={5}
                        rating={props.data.item.item.rating}
                        containerStyle={{alignSelf: 'center'}}
                        starStyle={styles.rating}
                    />
                    <View
                        style={styles.starRoot}>
                        <Text
                            style={styles.starLabel}
                            numberOfLines={1}>
                            {props.data.item.item.rating} stars
                        </Text>
                    </View>
                </View>
            </Ripple>
            <View style={styles.image}>
                <Transition
                    shared={`imageSuggestion${props.data.item.index}`}>
                    <Image
                        source={props.data.item.item.photo}
                    />
                </Transition>
            </View>
        </TouchableOpacity>
    )
};

/**
 * Set default values for the props
 */
SuggestionComponent.prototype = {
    song_image: PropTypes.string,
    song_title: PropTypes.string,
    song_singer: PropTypes.string,
    song_description: PropTypes.string,
    rating: PropTypes.string,
    onPress: PropTypes.func
};
