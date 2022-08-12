import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContextProvider from './src/context/GlobalContextProvider';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./src/authConfig";
import { SignInButton } from "./src/components/Buttons/SignInButton";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);

export const wrapRootElement = ({ element }) => (
  <MsalProvider instance={msalInstance}>
    <GlobalContextProvider>
      <AuthenticatedTemplate>
        {element}
        <p>You are signed in!</p>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <SignInButton />
      </UnauthenticatedTemplate>
    </GlobalContextProvider>
  </MsalProvider>
);
