/**
 * Return array of object with start of match and end of match index.
 * 
 * @param {string} testString 
 * @param {string} searchString 
 */
export function getMatchedParts(testString, searchString) {
  const regex = new RegExp(`<\s*${searchString}[^>]*>|<\s*/\s*${searchString}>`, 'gi');

  let match, parts = [];

  while ((match = regex.exec(testString))) {
    let start = match.index
    let end = regex.lastIndex
    
    if (end > start) {
      parts.push({ highlight: true, start, end })
    }
  }

  return parts;
}

/**
 * Divides the string into parts and return array of object with starting and end index of those parts.
 * 
 * @param {string} testString 
 * @param {string} searchString 
 */
export function getAllParts(testString, searchString) {

  let matchedParts = getMatchedParts(testString, searchString),
    totalLength = testString.length;
  const allParts = []
  const append = (start, end, highlight) => {
    if (end - start > 0) {
      allParts.push({
        start,
        end,
        highlight
      })
    }
  }

  if (matchedParts.length === 0) {
    append(0, totalLength, false)
  } else {
    let lastIndex = 0
    matchedParts.forEach((part) => {
      append(lastIndex, part.start, false)
      append(part.start, part.end, true)
      lastIndex = part.end
    })
    append(lastIndex, totalLength, false)
  }
  return allParts;
}


