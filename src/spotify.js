//https://dveloper.spotify.com/
//documentation/web-playback-sdk/quick-start/#

//by this we are using spotify api to login 
//we are just getting directed to the spotify website by clicking on login
export const authEndpoint = "https://accounts.spotify.com/authorize";

//by this after login singin process is completed
//we are again redirected to the below url
const redirectUri = "http://localhost:3000/";

const clientId = "ac9dc2b3e34e443fbacbbc6adf26a01a";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        // #access Roken = mySuperSecretKey&name=durgesh
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_diaog=true`;