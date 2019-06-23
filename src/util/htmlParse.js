import cheerio from 'cheerio';

const htmlString = `<!DOCTYPE html>
<html>
<body>
<div>
<h2 some-attribute>Heading</h2>
<p class="a-class">first para</p>
<div>
<p>Second para</p>
</div>
</div>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`

export function countTags() {
  // const $ = cheerio.load(htmlString)

  // console.log($('*'));
  var $dom = new DOMParser();
  var doc = $dom.parseFromString(htmlString, 'text/html');
  var $allElements = doc.querySelectorAll('*');
  console.log('doc all els', $allElements);

  return $allElements;

  // let myCount = {};

  // $allElements.forEach( tag => {
  //   console.log(tag.tagName);
    
  //   myCount[tag.tagName] ? myCount[tag.tagName]++ : (myCount[tag.tagName] = 1)
  // });

  // console.log('MY Count', myCount);
  
  
  // $elementDistribution = array();
  // foreach($allElements as $element) {
  //   if (array_key_exists($element -> tagName, $elementDistribution)) {
  //     $elementDistribution[$element -> tagName] += 1;
  //   } else {
  //     $elementDistribution[$element -> tagName] = 1;
  //   }
  // }
  // print_r($elementDistribution);

}

// function v1() {
//   var $dom = new DOMParser();
//   var doc = $dom.parseFromString(htmlString);
//   $allElements = doc.getElementsByTagName('*');
//   $elementDistribution = array();
//   foreach($allElements as $element) {
//     if (array_key_exists($element -> tagName, $elementDistribution)) {
//       $elementDistribution[$element -> tagName] += 1;
//     } else {
//       $elementDistribution[$element -> tagName] = 1;
//     }
//   }
//   print_r($elementDistribution);
// }