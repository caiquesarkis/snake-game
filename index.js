// Setup
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

let pixelSize =20;
let gameSpeed = 240;

let loadedLevel =  levelLoader(level);
let mapDimensions = {
    width: loadedLevel.level[0].split(" ").length*pixelSize,
    height: loadedLevel.level.length*pixelSize
}
canvas.width=mapDimensions.width;
canvas.height=mapDimensions.height;


console.log("Loaded level",loadedLevel)
console.log("Map dimensions",mapDimensions)

let tileRange = {x: loadedLevel.level.length, y: loadedLevel.level[0].split(" ").length}
console.log("X Range",tileRange.x)
console.log("Y Range",tileRange.y)


// Events

// Keyboard
let lastKeyPressed = "";
let keyPressed = "d";
document.addEventListener('keydown', function (e) {
    keyPressed = e.key;
})



// Entities
let snake = new Snake();
let food = new Food();
let drinks = new EnergyDrink();





function TeleportBoos(){
    // 

}

function sideWalkMob(){
    // A crab?
}


function animate(){
    clearBackground()
    snake.update()

    food.update();
    drinks.update()
    
    // camera.moveTo(getMousePos(canvas),e)
    

    

    

    let snakeHeadPosition = snake.rects.slice(-1)[0] 
    food.foods?.map((foodUnity,index)=>{
        if(`${snakeHeadPosition}` == `${foodUnity}`){
            snake.grow()
            food.delete(index)
        }
    })

    drinks.drinks?.map((drinkUnity,index)=>{
        if(`${snakeHeadPosition}` == `${drinkUnity}`){
            snake.grow()
            drinks.delete(index)
            drinks.energize()
            
        }
        return index
    })

    setTimeout(()=>{
        window.requestAnimationFrame(animate)
    },gameSpeed)
    
}

animate()