import Prismic from "prismic-javascript"

// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_API_URL

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken })

export function toIso(locale) {
  return locale=='en' ? 'en-us' : 'it-it'
}