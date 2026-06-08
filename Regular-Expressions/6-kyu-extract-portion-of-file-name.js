/**
 * extract portion of file name
 * https://www.codewars.com/kata/597770e98b4b340e5b000071/train/javascript
 *
 */

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    const { groups } = dirtyFileName.match(/(?<date>\d+)_(?<fName>[\w\d\-]+)(?<ext>\.[\w\d]+)/)
    return `${groups.fName}${groups.ext}`
  }
}
