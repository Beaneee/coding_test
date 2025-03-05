const solution = (genres, plays) => {
  const result = [];

  // genres를 key로 plays를 value로 hash 생성
  const genreHash = genres.reduce((acc, curr, index) => {
    acc[curr] = (acc[curr] || 0) + plays[index];
    return acc
  }, {});

  // 가장 많이 재생된 장르 찾기
  const sortedGenreKeys = Object.entries(genreHash)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);

  // 음악 정보를 담은 배열을 생성
  const playList = genres.reduce((acc, curr, index) => {
    acc.push({ genre: curr, index, play: plays[index] })
    return acc;
  }, [])

  for (const genreKey of sortedGenreKeys) {
    const list = playList.filter(v => v.genre === genreKey);
    // 정렬
    list.sort((a, b) => b.play - a.play);

    const indexList = list.map(v => v.index).filter((_, idx) => idx < 2);
    // 같은 장르 최대 2개까지만
    result.push(...indexList);
  }

  return result;
}
