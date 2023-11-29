const API_KEY = '37124750-bb2205b7594ee961e8dd1b6b7';
const BASR_URL = `https://pixabay.com/api/?key=${API_KEY}`



export default async function fetchUrl(query, page) {
  const url = `${BASR_URL}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`
  try {
    const response = await fetch(url)
    return response
  } catch (error) {
    console.log(error);
  }
}
