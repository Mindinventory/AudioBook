import React from 'react';
import {Platform, View, StatusBar, StyleSheet} from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

const GeneralStatusBarColor = ({backgroundColor, ...props}) => (
    <View style={[style.statusBar, {backgroundColor}]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default GeneralStatusBarColor;

const style = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT
    }
});
