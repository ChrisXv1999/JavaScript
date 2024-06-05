/**
 * @param max 
 * @param min 
 * @returns 
 */
export function getRandom(max:number,min=0){
    return Math.floor(Math.random()*max + min)
}