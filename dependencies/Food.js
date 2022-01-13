function Food(){ // food increase snake size
    this.energy; // should be integer 
    this.spawRate = 0.5;
    this.despawRate = 0.5;
    this.foods = loadedLevel.food.map((food)=>{
        return [food.x*pixelSize,food.y*pixelSize]
    })

    this.update = function(){
        this.draw();
        this.spaw()
        this.despaw()
    }

    this.draw = function(){
        ctx.fillStyle = '#FF0000';
        this.foods.map((food)=>{
            ctx.fillRect(food[0], food[1], pixelSize, pixelSize);
        })
    }

    this.spaw = function (){
        let rng = 10*Math.random()
        if(rng < this.spawRate){
            let randomSpot = [Math.floor(tileRange.x * Math.random())* pixelSize, Math.floor(tileRange.y * Math.random())* pixelSize]
            this.foods.forEach((food)=>{
                if (food != randomSpot){
                    this.foods.push(randomSpot)
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
            this.foods.splice(sortedIndex,1)
        }
    }

    this.delete = function(index){
        this.foods.splice(index,1)
    }

    this.count = function(){
        return this.foods.length
    }
}