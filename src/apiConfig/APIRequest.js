
import {callAxios} from "./APIConfig";

class APIRequest {

    // Call the API reference.
    login = (username, password) => {
        return new Promise((success, error) => {
            callAxios("login", 'POST',
                {
                    email_mobile: username,
                    password: password
                }
            ).then((resp) => {
                success(resp)
            }).catch((err) => {
                error(err)
            })
        });
    };

    logout = () => null;
}

export default new APIRequest();
