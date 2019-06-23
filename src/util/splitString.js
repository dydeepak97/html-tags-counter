// const regex = new RegExp(searchWord, 'gi');

export function getMatchedParts(testString, searchString) {

    const regex = new RegExp(searchString, 'gi')

    let match, parts=[];
    while ((match = regex.exec(testString))) {
      let start = match.index
      let end = regex.lastIndex
      // We do not return zero-length matches
      if (end > start) {
        parts.push({highlight: true, start, end})
      }
    }

    return parts;
}

export function getAllParts(testString, searchString){

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


