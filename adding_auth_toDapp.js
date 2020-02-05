//Blockstack.js provides API methods that help you to implement Blockstack Authentication in your client-side app.

/* When your app wants to start the sign in process, typically when the user clicks a Sign in with Blockstack button, your app will call the -  "UserSession.redirectToSignIn" 
This creates an ephemeral transit key, stores it in the web browser’s localStorage. Then, the function is used to create an authentication request token. 
The Blockstack Browser redirects the user to the Blockstack Browser to approve the sign in request. */

//When a user approves a sign in request, the Blockstack Browser returns a signed authResponse token to the redirectURI specified in UserSession.redirectToSignIn.

/*To check for the presence of this token, your app should call UserSession.isSignInPending. If this returns true, the app should then call UserSession.handlePendingSignIn.
 This decodes the token, returns the signed-in-user’s data, and simultaneously storing it to localStorage so that it can be retrieved later with loadUserData.*/

import * as blockstack from 'blockstack'

var userSession = new UserSession();
if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn()
    .then(userData => {
        const profile = userData.profile;
    });
}


/* Alternatively, you can generate your own transit private key and/or authentication request token using the- "UserSession.makeAuthRequest" function. 
This function gives you more control over the authentication experience. 
For example, you can change the sign in experience so that it prompts users who have not yet created a Blockstack identity, to choose a hub URL.*/

const transitPrivateKey = generateAndStoreTransitKey();
const redirectURI = 'https://example.com/authLandingPage';
const manifestURI = 'https://example.com/manifest.json';
const scopes = ['scope_write', 'publish_data'];
const appDomain = 'https://example.com';

const authRequest = makeAuthRequest(transitPrivateKey, redirectURI, manifestURI, scopes, appDomain);

redirectToSignInWithAuthRequest(authRequest);