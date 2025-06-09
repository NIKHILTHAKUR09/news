export const fetchNews = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=2025-05-09&sortBy=publishedAt&apiKey=557a4679cd2c4e6d9ce3dde8a909928c`
  );
  const data = await response.json();
  return data.articles;
};
