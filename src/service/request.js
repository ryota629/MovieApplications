const API_KEY = "b688cb080282be003040a6d52d81892b"; //TMDBのAPI_KEY

export const requests = {
  // feactTopRated:`/discover/movie?api_key=${API_KEY}&language=ja-JP`
  feactTopRated: `search/movie?api_key=${API_KEY}&language=ja-JP`,
  feactCredit: `credits?api_key=${API_KEY}&language=ja-JP`,
  feactOverview: `api_key=${API_KEY}&language=ja-JP`,
};
