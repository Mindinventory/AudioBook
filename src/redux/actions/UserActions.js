export const actionTypes = {
    FETCH_ALL_USER_LIST: 'FETCH_ALL_USER_LIST',
    MUTE_USER_CHAT: 'MUTE_USER_CHAT',
    MUTE_USER_REQUESTED_CHAT: 'MUTE_USER_REQUESTED_CHAT',
    FETCH_ALL_REQUESTED_USER_LIST: 'FETCH_ALL_REQUESTED_USER_LIST',
    SEARCHED_USER: 'SEARCHED_USER',
};

const fetchAllUserListRequest = () => ({
    type: actionTypes.FETCH_ALL_USER_LIST,
});

const muteUserChat = (userObj) => ({
    type: actionTypes.MUTE_USER_CHAT,
    userObj
});

const muteUserRequestedChat = (userObj) => ({
    type: actionTypes.MUTE_USER_REQUESTED_CHAT,
    userObj
});

const searchedUserType = (search) => ({
    type: actionTypes.SEARCHED_USER,
    search
});

export const fetchAllUserListAction = () => (dispatch) => {
    dispatch(fetchAllUserListRequest());
};

export const muteForChat = (userObj) => (dispatch) => {
    dispatch(muteUserChat(userObj));
};

export const muteForChatRequested = (userObj) => (dispatch) => {
    dispatch(muteUserRequestedChat(userObj));
};

export const searchedUserAction = (search) => (dispatch) => {
    dispatch(searchedUserType(search));
};
