function Snake(){
    this.life = 100;
    this.rects = loadedLevel.snake.map((snake)=>{
        return [snake.x*pixelSize,snake.y*pixelSize]
    })
    this.isGrowing = false;

    this.update = function(){
        this.draw();
        this.move();
        this.isSelfColiding();
    }

    this.move = function (){
        let snakeHeadPosition = this.rects.slice(-1)[0]
        switch (keyPressed){
            case 's': 
                this.rects.push([snakeHeadPosition[0],snakeHeadPosition[1] + pixelSize])
                this.growHandler()
            break
            case 'd': 
                this.rects.push([snakeHeadPosition[0]+ pixelSize,snakeHeadPosition[1]])
                this.growHandler()
            
            break
            case 'w': 
                this.rects.push([snakeHeadPosition[0],snakeHeadPosition[1] - pixelSize])
                this.growHandler()
            
            break
            case 'a': 
                this.rects.push([snakeHeadPosition[0]- pixelSize,snakeHeadPosition[1]])
                this.growHandler()
            break
        }
        
    }

    this.draw = function (){
        ctx.fillStyle = '#000';
        this.rects.map((rect)=>{
            ctx.fillRect(rect[0], rect[1], pixelSize, pixelSize);   
        })
    }

    this.growHandler = function(){
        if(this.isGrowing){
            this.isGrowing = false;
            this.getSnakeSize()
        }else{
            this.rects.shift()
        }
    }

    this.grow = function(){
        this.isGrowing = true;
    }

    this.getSnakeHeadPosition = function(){
        return {x:this.rects.slice(-1)[0][0], y: this.rects.slice(-1)[0][1]}
    }

    this.getSnakeSize = function (){
        return this.rects.length
    }

    this.isSelfColiding = function(){
        let snakeSize = this.getSnakeSize()
        for(let i=0 ; i < snakeSize - 1; i++){
                if(`${this.rects.slice(-1)[0]}` === `${this.rects[i]}`){
                   alert("You lose")
                }
        }
    }
}