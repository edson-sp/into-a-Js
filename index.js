import { Cliente } from "./Cliente.js"
import { ContacCorrente } from "./ContaCorrente"

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContacCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.saldo += 100
contaCorrenteRicardo.sacar -= (50)

console.log(contaCorrenteRicardo)