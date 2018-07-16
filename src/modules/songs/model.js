export const filterShorted = (song) => ({
  name: song.name,
  artists: song.artists,
  authors: song.authors,
  genres: song.genres,
  thumbnail: song.thumbnail,
  downloadUrls: song.downloadUrls
})