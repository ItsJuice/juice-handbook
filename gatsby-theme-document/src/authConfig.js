export const msalConfig = {
  auth: {
    clientId: "4a9d8615-55e4-470f-855e-8c66c944abb8",
    authority: "https://login.microsoftonline.com/ffd2aa68-1859-4dc9-a1be-72547bc9f807", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};
