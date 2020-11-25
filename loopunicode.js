const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
alphabet.push("å"); // push a to alåha
alphabet.push("ö");
alphabet.push("ä");
for (let i in alphabet) {
  console.log(alphabet[i]);
}
