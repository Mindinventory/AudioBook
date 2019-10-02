import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, FlatList, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import Header from "../../generic/Header";
import Icons from "../../../helpers/Icons";
import styles from "./styles";
import {TrendingStoriesComponent} from "../stories/TrendingStoriesComponent";
import {SuggestionComponent} from "../suggestion/SuggestionComponent";
import {connect} from "react-redux";
import getUserList from '../../../redux/selectors/UserSelectors'
import {searchedUserAction, fetchAllUserListAction} from "../../../redux/actions/UserActions";
import Ripple from "../../../helpers/Ripple";
import strings from "../../../localization/en";
import Colors from '../../../helpers/Colors'


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // fetch the data
        this.props.fetchAllUserListAction()
    }

    /**
     * Redirect to detail section.
     */
    redirectToDetail = () => {
        this.props.navigation.navigate("SuggestionDetails")
    };

    renderTrendingSeparator = ({item, index}) => {
        return (
            <View style={[{
                backgroundColor: Colors.blue,
                flex: 1
            }, index % 2 == 0 ? {marginRight: 10} : {marginLeft: 10}]}/>
        )
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.container}>

                    <Header title={strings.Singer_ame}/>

                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={strings.Search}
                            placeholderTextColor={'#D8D8D8'}
                            autoCorrect={true}
                            returnKeyType={"search"}
                        />
                        <Image
                            source={Icons.search}
                            style={styles.imgSearch}
                            resizeMode={'center'}/>
                    </View>

                    <ScrollView>
                        <View
                            style={styles.trendingContainer}>
                            <Text
                                style={styles.trendingLabel}
                                numberOfLines={1}>
                                {strings.Trending_Stories}
                            </Text>
                            <Ripple
                                style={styles.viewAllContainer}>
                                <Text
                                    style={styles.viewAllLabel}
                                    numberOfLines={1}>
                                    {strings.View_All}
                                </Text>
                            </Ripple>
                        </View>
                        <FlatList
                            horizontal
                            data={this.props.userList.trendingStoryList}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.trendingList}
                            renderItem={(item, position) => <TrendingStoriesComponent
                                data={{item, position}}
                                onPress={() => {
                                    this.redirectToDetail()
                                }}

                            />}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={() => <View style={{width: 16, backgroundColor: Colors.black}}/>}
                        />
                        <View
                            style={styles.trendingContainer}>
                            <Text
                                style={styles.trendingLabel}
                                numberOfLines={1}>
                                {strings.You_may_also_like}
                            </Text>
                            <Ripple style={styles.viewAllContainer}>
                                <Text
                                    style={styles.viewAllLabel}
                                    numberOfLines={1}>
                                    {strings.View_All}
                                </Text>
                            </Ripple>
                        </View>
                        <FlatList
                            data={this.props.userList.yourLikesList}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.yourLikesList}
                            renderItem={(item, position) => <SuggestionComponent
                                data={{item, position}}
                                onPress={() => {
                                    this.redirectToDetail()
                                }}
                            />}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    userList: getUserList(state),
});

const mapDispatchToProps = dispatch => ({
    // for the search
    searchedUserAction: (search) => dispatch(searchedUserAction(search)),

    // fetch all content.
    fetchAllUserListAction: () => dispatch(fetchAllUserListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
