// console.log('ciao node!!');

//scrivere "node .\scripts.js" sul terminale (new terminal)



//1) Leggere il file CSV dal PC -> ci darà una stringa
//https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs (Reading files with Node.js)

//2) Spezzo il testo (file CSV) in un array di stringhe
//https://stackoverflow.com/questions/21895233/how-to-split-string-with-newline-n-in-node (Come si splita una stringa con "New line")

//3) Tolgo la prima riga dall'array e la metto da parte
//push - aggiungo in fondo, pop - tolgo in fondo 


const fs = require('node:fs');  //1) primo task      //"require" sta per "richiesto"

let data;

try {
    data = fs.readFileSync('Input/students.csv', 'utf8'); //windows usa lo reverse backslash (\)nod ma per usarlo in Javascript dobbiamo cambiarla
    console.log(data);
} catch (err) {
    console.error(err);
}
const stringArray = data.split(/\r?\n/);  //2) secondo task

const propertiesString = stringArray.shift();  //3) terzo task

console.log(stringArray);
console.log(propertiesString);







