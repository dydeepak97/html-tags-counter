/**
 * Utility function to get the count of all html tags from the given string.
 * Return an object with with tagNames as keys and their count as value.
 * 
 * @param {string} sourceCode 
 */
export function countTags(sourceCode) {
  let $dom = new DOMParser(),
    doc = $dom.parseFromString(sourceCode, 'text/html'),
    $allElements = doc.querySelectorAll('*'),
    tagsCount = [];

  $allElements.forEach( tag => {
    let tagName = tag.tagName.toLowerCase();
    
    tagsCount[tagName] ? tagsCount[tagName]++ : (tagsCount[tagName] = 1)
  });

  return tagsCount;
}