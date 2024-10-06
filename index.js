class idHeroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  idDesc() {
    return `${this.nome} ${this.idade} ${this.tipo}`;
  }
 
  atacar(){
  let skill;
   switch (this.tipo) {
       case "mago":
    skill = ("magia");
    break;
       case "guerreiro":
    skill = ("espada");
    break;
       case "monge":
    skill = ("artes marciais");
    break;
       case "ninja":
    skill = ("shuriken");
    break;
   }
   console.log(`O ${this.tipo} atacou usando ${skill}`);
 }
}
let meuHeroi = new idHeroi('Fulano', 32, 'ninja');
console.log(meuHeroi.idDesc());
meuHeroi.atacar();