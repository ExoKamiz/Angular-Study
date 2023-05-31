const T: boolean  = true
const F: boolean  = false

const int: number = 33
const float: number = 3.14
const num: number = 3e10

const message: string = 'M for Max'

const numArray: number[] = [1, 2, 3, 4, 5]
const numArray2: Array<number> = [1, 2, 3, 4, 5]    //generic

const words: string[] = ['Ever', 'Green']

//Data type - Tuple(перечесляем типы)
const me: [string, number] = ['Max', 21]

//Data type - Any(можем изменить на любой)
let anon: any = 10
anon = 'Max'
anon = []

//Data type - Never(либо всегда ошибка либо всегда правда)
function thowErr(message: string): never{
    throw new Error(message)
}

function infinite(): never{
    while(true){}
}

//Data type - Type(для создания своих типов данных)
type Man = string

const person: Man = 'Mark'

type ID = string | number 
const id1: ID = 123
const id2: ID = '123'