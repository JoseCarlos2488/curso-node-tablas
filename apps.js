const { crearArchivo } = require("./hellpers/multiplicar");
const argv =require("./config/yargs");
const colors = require('colors');

console.clear();

//console.log(process.argv);
//const [,,arg3]= process.argv;
//const [, base = 'base=5']=arg3.split('=');
//console.log(base = 5);

//console.log(process.argv);
console.log(argv);
//const base = 8;

//crearArchivo(base);

crearArchivo(argv.b, argv.l,argv.h)
  .then((NombreArchivo) => console.log(NombreArchivo.rainbow, "Creado"))
  .catch((err) => console.log(err));

//
//console.clear();
//
//console.log('-------------------------');
//console.log(`------ Tabla del ${base} -----`);
//console.log('-------------------------');
//
//let salida = '';
//for (let i = 1; i <= 10; i++){
//    salida +=`${base} x ${i} = ${base * i}\n`;

//}
//console.log(salida);

// funciona para crear archivo y escribir dentro
//fs.writeFile(`tabla-${base}.txt`,salida,(err)=> {
//    if (err) throw err;
//    console.log(`tabla-${base}.txt creado`)
//});

//fs.writeFileSync(`tabla-${base}.txt`,salida);
//console.log(`tabla-${base}.txt creado`)
