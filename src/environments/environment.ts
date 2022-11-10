const protocol: string = window.location.protocol;
const hostname: string = `proxy-nct.vercel.app`;
const ip: string = `${hostname}`;
const baseUrl: string = `${protocol}//${ip}`;

export const environment = {
  production: false,
  apiUrl: `${baseUrl}/`,
};