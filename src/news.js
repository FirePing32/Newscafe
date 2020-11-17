// Change YOUR_API_KEY_HERE to your apiKey
const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=NEWS_API_KEY"

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}