/*
<script type="text/javascript" src="loopunicode.js" charset="utf-8"> </script>
I allways forget to include charset="utf-8"
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  alphabet.push("å"); // push a to the alphabet
  alphabet.push("ö");
  alphabet.push("ä");
  for (let i in alphabet) {
    console.log(alphabet[i]);
     // console.log(alphabet[i].toUpperCase());   // To make the chars UpperCase
}
