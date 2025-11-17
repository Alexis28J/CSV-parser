
//FACCIAMO IL PROCESSO AL CONTRARIO (DA JSON A CSV)

//1) il primo passo è identico (LEGGERE IL FILE .json DAL PC)
const fs = require('node:fs');  

let jsonString;

//blocco "try/catch" - serve a prevenire che il codice si rompa
try {
    jsonString = fs.readFileSync('./Input/students-data.json', 'utf8'); 
    // console.log(data);
} catch (err) {  // in caso il codice si rompa mi verrà un "catch"
    console.error(err);
}

//console.log(jsonString);

//2) TRASFORMO IL JSON IN UN ARRAY JAVASCRIPT
const array = JSON.parse(jsonString);  //sto tornando indietro a Javascript
//console.log(array);

//3) CREO LA STRINGA DEL CSV
let csvString = '';

//4) PRENDO IL PRIMO OGGETTO DELL'ARRAY   
const first = array[0];   //{name: "apple", color: "red", shape: "round"} (esempio con FRUIT)

//5) PRENDO I NOMI DELLE PROPRIETà DELL'ARRAY
const keyArray = Object.keys(first); //["name", "color", "shape"]

//6) CICLO I NOMI DELLE PROPRIETà
for (let i = 0; i < keyArray.length; i++) {
    const key = keyArray[i];

    //7) OGNI GIRO ATTACCO LA PROPRIETà ALLA STRINGA
    csvString = csvString + key;


    //8) SE SONO ALL'ULTIMA PROPRIETà METTO A CAPO ALTRIMENTI SEPARO CON PUNTO E VIRGOLA
    if (i === keyArray.length - 1) {  //se sono all'ultima posizione
        csvString = csvString + '\n';
    } else {
        csvString = csvString + ';';
    }

}

//alla fine del ciclo mi verrà "name;color;shape\n"

//9) ORA CICLO TUTTO L'ARRAY
for (let i = 0; i < array.length; i++) {
    const element = array[i];   //{name: "apple", color: "red", shape: "round"}

    //10) PRENDO TUTTI I VALORI DEL MIO OGGETTO
    const values = Object.values(element);   //["apple", "red", "round"]

    //11) CICLO VALUES E USO LA STESSA LOGICA DELLE KEYS
    for (let j = 0; j < values.length; j++) {
        const value = values[j];
        
        csvString = csvString + value;

    if (j === values.length - 1) {  //se sono all'ultima posizione
        csvString = csvString + '\n';
    } else {
        csvString = csvString + ';';
    }
    }  
    //"name;color;shape\n
    // apple;red;round\n"
}
   //"name;color;shape\n
   // apple;red;round\n
   // lemon;yellow;round\n
   // banana;yellow;banana\n
   // pear;green;pear\n"

//console.log(csvString);

try {
  fs.writeFileSync('./Output/student-data.csv', csvString);
} catch (err) {
  console.error(err);
}

 
