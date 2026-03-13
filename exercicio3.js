// Código com problema: tudo dentro da classe Carro (motor e rádio como propriedades).
// Sua tarefa: refatorar usando COMPOSIÇÃO. Crie classes Motor e Radio; o Carro deve "ter um" motor e "ter um" rádio,
// delegando as ações para eles. O HTML não deve ser alterado: continua usando carro.motorLigado, carro.radioLigado e carro.volume
// (você pode usar getters no Carro que leem de this.motor e this.radio).

class Motor {
    constructor() {
        // o motor ta desligado this.ligado = estado(false/true)
        this.ligado = false;
    }

    //LigarDesligarMotor é um metodo que recebe o estado atual do motor(se ta ligado ou desligado) e muda o estado atual do motor (liga ou desliga).
    LigarDesligarMotor(estado) {
        this.ligado = estado;
        return this.ligado ? "Ligado" : "Desligado";
    }
}

class Radio {
    constructor() {
        // o radio ta desligado this.ligado = estado(false/true)
        this.ligado = false;
        // o radio pode ligar em qualquer volume, nesse caso volume=10
        this.volume = 10;
    }

    //LigarDesligarRadio é um metodo que recebe o estado atual do radio(se ta ligado ou desligado) e muda o estado atual do radio (liga ou desliga).
    LigarDesligarRadio(estado) {
        this.ligado = estado;
        return this.ligado ? "Ligado" : "Desligado";
    }

    AlterarVolume() {
        //ao clicar em AlterarVolume() o usuario esta pegando o valor atual e adicionando mais 1. é um looping que nesse caso começa com 10 e aumenta 11,12,13.... conforme for clicando no botao
        this.volume++;
    }
}

class Carro {
    constructor() {
        // O construtor serve para montar o carro. ele "coloca todas as peças do Carro" (motor, radio, ar condicionado)
        this.motor = new Motor();
        //INSTANCIAR é criar um radio para o carro. voce nao usa o molde para o radio Radio(), voce cria um pro seu carro this.radio
        this.radio = new Radio();
    }

    // Getters: Ao clicar em ligarMotor, Carro faz uma REQUISICAO(Pode ligar o motor?) ao motor
    get motorLigado() {
        return this.motor.ligado;
        //o motor responde ligando ou desligando o motor
    }
    // Getters: Ao clicar em ligarRadio, Carro faz uma REQUISICAO(Pode ligar o radio?) ao motor
    get radioLigado() {
        return this.radio.ligado;
        //o radio responde ligando ou desligando o radio
    }
    // Getters: Ao clicar em aumentarVolume, Carro faz uma REQUISICAO(Pode ligar o motor?) ao motor
    get volume() {
        return this.radio.volume;
        //o radio responde aumentando o volume (Era Aueba tocando)
    }

    // Métodos de ação que delegam para as classes especialistas
    LigarMotor(status) {
        //o carro precisa ligar o motor, ele nao se importa em como o motor funciona, ele só precisa que ao clicar no botao, o motor ligue
        return this.motor.LigarDesligarMotor(status);
    }
     LigarRadio(status) {
        //o carro precisa ligar o radio, ele nao se importa em como o radio funciona, ele só precisa que ao clicar no botao, o radio ligue
        return this.radio.LigarDesligarRadio(status);
    }
    AlterarVolume(){
        //o carro precisa aumentar o volume, ele nao se importa em como o radio funciona, ele só precisa que ao clicar no botao, a musica toque mais alto
        return this.radio.AlterarVolume();
    }
}

//se voce perceber bem, a logica de LigarDesligarRadio() e LigarDesligarMotor() é exatamente igual, aqui poderia ser criado um metodo generico. No C# aqui que entra o conceito de INTERFACES
