class Wagon {
    constructor(capacity) {       
        this.capacity = capacity;
        this.passengers = [];
    }



    getAvailableSeatCount() {
        return this.capacity - this.passengers.length;
    }  


     

    join(){
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(Traveler);
            this.capacity -= 1
        }
    }

    shouldQuarantine(passengers){ 
       passengers = this.passengers 
             //fazer umm for dentro da lista de passageiros para ver se tem algum doente;
        for(let j = 0; j < passengers.length; j++){

            if (this.passengers[j].isHealthy === false){
                return true
            }
        }        
        
    }

    totalFood(){
        let tot = this.passengers.food;
        for (let i = 0; i < this.passengers; i++){
            tot += this.passengers[i].food;
        }

        return tot
        
    }

}

module.exports = Wagon;