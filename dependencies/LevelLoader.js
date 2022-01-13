// Map wiki
    // s -> snake
    // t -> tile
    // f -> food
    // e -> energy drink
    // c -> crab mob
    // b -> boss
let level = `# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # e # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # e # # # # # # # # # # # f # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # s s # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # e # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # f # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # f # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # #`


function levelLoader(level){
    let snake = [];
    let tile = [];
    let food = [];
    let energyDrink = [];
    let crabMob = [];
    let boss = [];
    level = level.split("\n")
    level.map((line,i)=>{
        line.split(" ").map((cell,j)=>{
            switch(cell){
                case "s":
                    snake.push({x:j,y:i})
                break
                case "t":
                    tile.push({x:j,y:i})
                break
                case "f":
                    food.push({x:j,y:i})
                break
                case "e":
                    energyDrink.push({x:j,y:i})
                break
                case "crabMob":
                    crabMob.push({x:j,y:i})
                break
                case "b":
                    boss.push({x:j,y:i})
                break
            }
            
        })
    })
    return {snake,tile,food,energyDrink,crabMob,boss,level}
}