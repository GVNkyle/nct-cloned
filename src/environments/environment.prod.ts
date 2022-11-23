const protocol: string = window.location.protocol;
const hostname: string = `proxy-nct.vercel.app`;
const ip: string = `${hostname}`;
const baseUrl: string = `${protocol}//${ip}`;

export const environment = {
  production: true,
  apiUrl: `${baseUrl}/`,
  firebaseConfig: {
    apiKey: "AIzaSyCd9Z-ZwSOEUBXDfwJpUHLV3TFWxc4ykAM",
    authDomain: "ntc-cloned.firebaseapp.com",
    projectId: "ntc-cloned",
    storageBucket: "ntc-cloned.appspot.com",
    messagingSenderId: "307187997369",
    appId: "1:307187997369:web:be4c86a038556391c11968"
  }
};