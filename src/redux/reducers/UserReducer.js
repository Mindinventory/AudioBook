import {actionTypes} from '../actions/UserActions';

import trendingStoryList from '../../helpers/jsons/TrendingStory'
import yourLikesList from '../../helpers/jsons/YourLikes'

const initialState = {
    trendingStoryList: trendingStoryList,
    yourLikesList: yourLikesList
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_USER_LIST:
            return {
                trendingStoryList: setAllUserData(),
                yourLikesList: setAllRequestedUserData()
            };
        case actionTypes.FETCH_ALL_REQUESTED_USER_LIST:
            return {
                ...state,
            };
        case actionTypes.SEARCHED_USER:
            return {
                trendingStoryList: searchedUserList(action.search),
                yourLikesList: searchedRequestedUserList(action.search)
            };
        default:
            return state;
    }
};

const setAllUserData = () => {
    initialState.trendingStoryList = trendingStoryList;
    return trendingStoryList;
};

const setAllRequestedUserData = () => {
    initialState.yourLikesList = yourLikesList;
    return yourLikesList;
};

const searchedUserList = (search) => {
    let selectedMessageList: Array = trendingStoryList;
    selectedMessageList = selectedMessageList.filter(obj => obj.full_name.toLowerCase().includes(search.toLowerCase()));
    initialState.trendingStoryList = selectedMessageList;
    return selectedMessageList;
};

const searchedRequestedUserList = (search) => {
    let selectedMessageList: Array = yourLikesList;
    selectedMessageList = selectedMessageList.filter(obj => obj.full_name.toLowerCase().includes(search.toLowerCase()));
    initialState.yourLikesList = selectedMessageList;
    return selectedMessageList;
};

export default userReducer;
