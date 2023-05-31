//Base 
 class TypeScript{
    version: string 

    constructor(version: string){
        this.version = version
    }

    info(name: string){
        return '[${name}] : TypeScript version is ${this.version}'
    }
 }

//  class Student{
//     readonly name: string
//     readonly lastname: string
//     readonly averageMark: number

//     constructor(name: string, lastname: string){
//         this.name = name,
//         this.lastname = lastname
//     }
//  }

//  Тоже самое что и выше, только упрощенная запись
class Student{
    readonly averageMark: number
    constructor(readonly name: string, readonly lastname: string){}
}


//Modificators
class Animal{
    protected voice: string = ''
    public color: string = 'black'

    constructor(){
        this.go()
    }

    private go(){
        console.log('Going...')
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('Meow')
console.log(cat.color)

//Abstracts
abstract class Component{
    abstract render(): void
    abstract info(): string 
}

class AppComponent extends Component{
    render(): void{
        console.log('Component on render')
    }
    info(): string{
        return 'Component on info'
    }
}
