class Typescript {
    version: string

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}
//longer version

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

// shorter version
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string){}
}

//================================
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go!')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()
//cat.voice will throw erroe cause it is protected property
cat.setVoice('white')
console.log(cat.color)

abstract class Component {
    abstract render(): void
    abstract info():string
}

class AppComponent extends Component{
    render(): void{
        console.log('Component is rendering')
    }
    info(): string{
        return 'This is info'
    }
}