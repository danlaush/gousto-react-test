const CORS_FIX = 'https://cors-anywhere.herokuapp.com/'
const API = 'https://api.gousto.co.uk'

export const myFetch = (endpoint) => {
  return fetch(CORS_FIX + API + endpoint)
}
