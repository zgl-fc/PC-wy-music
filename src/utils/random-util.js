export function randomSongIndex(index,songListLength) {
  let randomIndex = 0
  do {
    randomIndex = Math.floor(Math.random() * songListLength)
  } while (randomIndex !== index);
  return randomIndex
}