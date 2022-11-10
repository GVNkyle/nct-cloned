const protocol: string = window.location.protocol;
const hostname: string = `https://proxy-nct.vercel.app`;
const ip: string = `${hostname}`;
const baseUrl: string = `${protocol}//${ip}`;

export const environment = {
  production: true,
  apiUrl: `${baseUrl}/`,
};