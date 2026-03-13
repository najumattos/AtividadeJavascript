// Código com problema: tudo dentro da classe Carro (motor e rádio como propriedades).
// Sua tarefa: refatorar usando COMPOSIÇÃO. Crie classes Motor e Radio; o Carro deve "ter um" motor e "ter um" rádio,
// delegando as ações para eles. O HTML não deve ser alterado: continua usando carro.motorLigado, carro.radioLigado e carro.volume
// (você pode usar getters no Carro que leem de this.motor e this.radio).

class Motor {
  constructor() {
    this.ligado = false;
  }

  LigarDesligarMotor(estado) {
    this.ligado = estado;
    return this.ligado ? "Ligado" : "Desligado";
  }
}

class Radio {
  constructor() {
    this.ligado = false;
    this.volume = 10;
  }

  LigarDesligarRadio(estado) {
    this.ligado = estado;
    return this.ligado ? "Ligado" : "Desligado";
  }

  AlterarVolume() {
    this.volume++;
  }
}

class Carro {
  constructor() {
    this.motor = new Motor();
    this.radio = new Radio();
  }

  get motorLigado() {
    return this.motor.ligado;
  }
  get radioLigado() {
    return this.radio.ligado;
  }
  get volume() {
    return this.radio.volume;
  }

  LigarMotor(status) {
    return this.motor.LigarDesligarMotor(status);
  }
  LigarRadio(status) {
    return this.radio.LigarDesligarRadio(status);
  }
  AlterarVolume() {
    return this.radio.AlterarVolume();
  }
}
