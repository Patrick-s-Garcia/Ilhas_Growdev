
let saque = Number(prompt("Quanto você deseja sacar?"));
let notas = [50, 10, 5, 1];

console.log(saque);

for (let i = 0; i < 4; i++) {
    let resultado = ~~(saque / notas[i]); 
    console.log(`GC$${notas[i]} -> ${resultado}`);
    saque -= resultado * notas[i];
}












