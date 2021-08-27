const Traveler = require("./../../models/Traveler")

class Hunter extends Traveler {
    constructor(nome){
        super(nome)
        this.nome = nome;
        this.food = 2;
        this.isHealthy = true;
    }

    //função caçar
    hunt(){
        return this.food = this.food + 5;
    };

    // função comer
    eat() {
    if (this.food == 0){
        this.isHealthy = false;
    }

    if (this.food > 0){
        return this.food = this.food - 2;
    }
   }

   giveFood(traveler, numOfFoodUnits){
       let qtdComida = 0
       if (this.food > 0){
           this.Traveler += qtdComida
       }
   }
}
module.exports = Hunter;