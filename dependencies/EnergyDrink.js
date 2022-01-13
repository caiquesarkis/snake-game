function EnergyDrink(){ // makes snake faster and change color
    this.energy = 1.05; // should be integer 
    this.spawRate = 0.5;
    this.despawRate = 0.5;
    this.drinks = loadedLevel.energyDrink.map((drink)=>{
        return [drink.x*pixelSize,drink.y*pixelSize]
    })

    this.update = function(){
        this.draw();
        this.spaw()
        this.despaw()
    }

    this.draw = function(){
        ctx.fillStyle = '#B246D9';
        this.drinks.map((drink)=>{
            ctx.fillRect(drink[0], drink[1], pixelSize, pixelSize);
        })
    }

    this.energize = function(){
        gameSpeed /= this.energy
    }

    this.spaw = function (){
        let rng = 10*Math.random()
        if(rng < this.spawRate){
            let randomSpot = [Math.floor(tileRange.x * Math.random())* pixelSize, Math.floor(tileRange.y * Math.random())* pixelSize]
            this.drinks.forEach((drink)=>{
                if (drink != randomSpot){
                    this.drinks.push(randomSpot)
                }else{
                    console.log("This place is already occupied")
                }
            })
        }
    }

    this.despaw = function (){
        let sortedIndex = this.count()*Math.random()
        let rng = 10*Math.random()
        if(rng < this.despawRate){
            this.drinks.splice(sortedIndex,1)
        }
    }

    this.delete = function(index){
        this.drinks.splice(index,1)
    }

    this.count = function(){
        return this.drinks.length
    }
}