/**
 * Phone Screen Organizer
 * https://www.codewars.com/kata/5e10ae1cdf8a12001da16779/train/javascript
 *
 */

const rearrangeApps = tiles => {
  let i = 0

  while (i < tiles.length) {
    if (tiles[i] === null) {
      let tile = tiles.pop()

      while (tile === null && i < tiles.length) {
        tile = tiles.pop()
      }

      tile != undefined && (tiles[i] = tile)
    }

    i += 1
  }

  return tiles
}
