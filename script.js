// console.log('ciao node!!');

//scrivere "node .\scripts.js" sul terminale (new terminal)



//1) Leggere il file CSV dal PC -> ci darà una stringa
//https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs (Reading files with Node.js)

//2) Spezzo il testo (file CSV) in un array di stringhe
//https://stackoverflow.com/questions/21895233/how-to-split-string-with-newline-n-in-node (Come si splita una stringa con "New line")

//3) Tolgo la prima riga dall'array e la metto da parte
//push - aggiungo in fondo, pop - tolgo in fondo 

//4) Creare un Array per contenere gli studenti

//5) Ciclo gli studenti (ciclo l'array di stringhe)

//6) Ogni giro creo un oggetto vuoto che deve contenere uno studente

//7) Spezzo le proprietà e i valori in due array di stringhe (li spezzo nei punti e virgola), ogni riga una stringa

//8) Faccio un ciclo interno e sull'array delle proprietà e metto dentro lo studente il valore corrispondente alla proprietà (proprietà e valore)

//9) Fuori dal ciclo interno metto lo studente creato nell'array degli studenti

//10) Converto l'Array creato in stringa

//11) Scrivo il risultato sul file
//https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs (Come scrivere un risultato su un file)


const fs = require('node:fs');  //1) primo task      //"require" sta per "richiesto"

let data;

//blocco "try/catch" - serve a prevenire che il codice si rompa
try {
    data = fs.readFileSync('Input/students.csv', 'utf8'); //windows usa lo reverse backslash (\) ma per usarlo in Javascript dobbiamo cambiarla
    // console.log(data);
} catch (err) {  // in caso il codice si rompa mi verrà un "catch"
    console.error(err);
}
const stringArray = data.split(/\r?\n/);  //2) secondo task  //per noi basterebbe mettere solo\n
//la differenza tra \r e \n è che sul tuo sistema operativo, uno di questi è il carattere corretto con cui terminare una riga, e l'altro no
//Windows considera \r\n insieme come il carattere corretto per la fine della riga.
const propertiesString = stringArray.shift();  //3) terzo task
//Il metodo unshift() consente di aggiungere uno o più elementi all'inizio di un array Javascript.

// console.log(stringArray);
// console.log(propertiesString);

const studentsArray = [];  //4) quarto task

// for (let i = 0; i < stringArray.length; i++) {  //5) quinto task
//     const studentString = stringArray[i];
//     console.log(i,studentString); //sto printando sia lo studente, sia la sua posizione dentro del Array
// }

for (let i = 0; i < stringArray.length; i++) {  //5) quinto task
    const valueString = stringArray[i];

    const student = {};  //6) sesto task

    // console.log("giro n.", i);
    // console.log("studente vuoto", student);
    // console.log("nomi delle proprietà (key)", propertiesString);
    // console.log("valori delle proprietà (value)", valueString);
    // console.log("------------------------------------------------------------");

    const propertiesArray = propertiesString.split(";"); //7) settimo task
    const valuesArray = valueString.split(";"); //invece di mettere a capo \n, metto ; che è la fine della mia stringa

    // console.log(propertiesArray);    
    // console.log(valuesArray);
    
    
    for (let j = 0; j < propertiesArray.length; j++) {  //8) ottavo task
        const property = propertiesArray[j];
        const value = valuesArray[j];
        student[property] = value;
        
    }

studentsArray.push(student);     //9) nonno task

}

console.log(studentsArray);    

const jsonString = JSON.stringify(studentsArray); //10) decimo task   //converto l'array in json

try {  //11) undicesimo task
  fs.writeFileSync('./Output/students-data.json', jsonString);  //salvo il file in formato .json nella cartella Output;  jsonArray è il contenuto del file
  // file written successfully
} catch (err) {
  console.error(err);
}




