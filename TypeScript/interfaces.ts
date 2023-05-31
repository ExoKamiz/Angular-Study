//Base
 interface IChamster{
    readonly id: number
    color: string
    weight?: number
    breed: {
        type: string
        country: string
    }
 }

 const chamster1: IChamster = {
    id: 1,
    color: 'black',
    breed: {
        type: 'angularian',
        country: 'USA'
    }
 }

 chamster1.weight = 150

const chamster2 = {} as IChamster
const chamster3 = <IChamster>{}

//Inheritance(наследование)
interface IChamsterWeightToKg extends IChamster{
    getWeightInKg: () => number
}

const chamster4: IChamsterWeightToKg = {
    id: 4,
    color: 'white',
    weight: 110,
    breed: {
        type: 'reactarion',
        country: 'Brazil'
    },
    getWeightInKg(): number{
        return this.weight / 1000
    }
}

//Interface with class
interface IKnow{
    whatIKnow: string
    howOften: (amount:number, perHowMuchSec: number)=> number
}

class Know implements IKnow{
    whatIKnow: string
    howOften(amount:number, perHowMuchSec: number): number{
        return amount / perHowMuchSec
    }
}

//Interface for object with many dynamics keys(один тип - много значений)
interface IBody{
    [key: string]: number
}

const humanBody: IBody = {
    height: 180,
    weight: 70,
    handLength: 73
}