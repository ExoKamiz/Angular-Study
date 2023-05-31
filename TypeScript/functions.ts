 //Functions reload
 interface IMyPosition{
    x: number | undefined 
    y: number | undefined
 }

 interface IMyPositionWIthDefault extends IMyPosition{
    default: string
 }

 function position(): IMyPosition
 //function position(a: number): IMyPositionWIthDefault
 function position(a: number, b: number):IMyPosition

 function position(a?: number, b?: number){
    if(!a && !b){
        return {x: undefined, y: undefined}
    }

    if(a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }
    
    return {x: a, y: b}
 }

 console.log('Empty: ', position())
 //console.log('One param: ', position(1))
 console.log('Two params: ', position(1, 2))

 