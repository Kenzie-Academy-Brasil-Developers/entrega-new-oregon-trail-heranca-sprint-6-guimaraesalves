class Traveler {
    constructor(nome){
        this.nome = nome;
        this.food = 1;
        this.isHealthy = true;
    }

    //função caçar
    hunt(){
        return this.food = this.food + 2;
    };

    // função comer
    eat() {
    if (this.food == 0){
        this.isHealthy = false;
    }

    if (this.food > 0){
        return this.food = this.food - 1;
    }
};

}

module.exports = Traveler;