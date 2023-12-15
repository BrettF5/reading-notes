## Readings: Authentication:

---

### [What is OAuth](https://www.csoonline.com/article/562635/what-is-oauth-how-the-open-authorization-framework-works.html)

1\. **What is OAuth?**

An open-standard authorization protocol or framework that outlines a secure method for unrelated servers and services to grant authenticated access to their resources without sharing the original, related, single logon credential. In terms of authentication, this process is referred to as secure, third-party, user-agent, delegated authorization.

2\. **Give an example of what using OAuth would look like**

3\. **How does OAuth work? What are the steps that it takes to authenticate the user?**
From "What is OAuth website:

1. The first website connects to the second website on behalf of the user, using OAuth, providing the user’s verified identity.
1. The second site generates a one-time token and a one-time secret unique to the transaction and parties involved.
1. The first site gives this token and secret to the initiating user’s client software.
1. The client’s software presents the request token and secret to their authorization provider (which may or may not be the second site).
1. If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to the second website.
1. The user approves (or their software silently approves) a particular transaction type at the first website.
1. The user is given an approved access token (notice it’s no longer a request token).
1. The user gives the approved access token to the first website.
1. The first website gives the access token to the second website as proof of authentication on behalf of the user.
1. The second website lets the first website access their site on behalf of the user.
1. The user sees a successfully completed transaction occurring.
1. OAuth is not the first authentication/authorization system to work this way on behalf of the end-user. In fact, many authentication systems, notably Kerberos, work similarly. What is special about OAuth is its ability to work across the web and its wide adoption. It succeeded with adoption rates where previous attempts failed (for various reasons).

4\. **What is OpenID?**

OpenID is a decentralized authentication protocol that adheres to an open standard, aiming to facilitate secure single sign-on (SSO) capabilities for web applications.

---

### [Authorization and Authentication flows](https://auth0.com/docs/flows)

1\. **What is the difference between authorization and authentication?**

Authentication involves confirming identity, whereas authorization entails deciding whether to permit or deny access based on the authenticated identity's permissions and privileges.

1\. **What is Authorization Code Flow?**

Authorizaion Code Flow involves the changing an authorization code for a token. This flow is restricted to confidential applications, such as Regular Web Applications, as the application's authentication methods are incorporated in the exchange and must be safeguarded for security.

1\. **What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**

Code Exchange (PKCE) is an extension to the traditional OAuth 2.0 Authorization Code Flow. It aims to bolster the security of mobile and native applications, addressing challenges in securely storing client secrets. PKCE serves to mitigate specific threats, including attacks such as authorization code interception and code replay attacks.

1\. **What is Implicit Flow with Form Post?**

The Implicit Flow with Form Post is an OAuth 2.0 authorization flow designed for single-page web applications (SPAs) where the client application runs entirely in the user's browser.

1\. **What is Client Credentials Flow?**

The Client Credentials Flow is a type of OAuth 2.0 grant that enables a client application to acquire an access token directly from the authorization server by providing its own credentials, including the client ID and client secret. 

1\. **What is Device Authorization Flow?**

It is also known as also known as the Device Code Flow. It is an OAuth 2.0 grant type specifically created for devices with restricted input capabilities, including smart TVs, media consoles, and Internet of Things (IoT) devices.

1\. **What is Resource Owner Password Flow?**

The Resource Owner Password Flow, a type of OAuth 2.0 grant, enables a client application to seek an access token by providing the user's credentials (username and password) directly to the authorization server. This approach is commonly utilized when the client is considered highly trustworthy with the user's credentials, often seen in first-party clients like native mobile applications

---

### Bookmark and Review:

![Auth0 for single page apps](https://auth0.com/docs/libraries/auth0-react)


