interface Person{
    name: string
    age:number
}

type PersonKeys = keyof Person //'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

//Создать отдельный тип из типа
type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> //без каких ключей
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> //выбираем ключи

let u1: UserKeysNoMeta1 = 'name'
//u1 = '_id'