// Código com problema: tudo dentro da classe Carro (motor e rádio como propriedades).
// Sua tarefa: refatorar usando COMPOSIÇÃO. Crie classes Motor e Radio; o Carro deve "ter um" motor e "ter um" rádio,
// delegando as ações para eles. O HTML não deve ser alterado: continua usando carro.motorLigado, carro.radioLigado e carro.volume
// (você pode usar getters no Carro que leem de this.motor e this.radio).

class Carro {
    constructor() {
        this.motorLigado = false;
        this.radioLigado = false;
        this.volume = 0;
    }

    ligarMotor() {
        this.motorLigado = true;
    }

    ligarRadio() {
        this.radioLigado = true;
    }

    aumentarVolume() {
        this.volume++;
    }
}
