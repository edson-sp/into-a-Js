export class ContacCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo = valor;
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }


}