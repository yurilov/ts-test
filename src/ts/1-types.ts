const isFetching: boolean = true;
const isLoading: boolean = false;

let int: number = 42;
int = 22;

const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello, Sigma";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArrayGeneric: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'World'];

//Tuple
const contacts: [string, number] = ['Yurii', 322223];

//Any
let variable:any = 42;
variable = 'str';

function sayMyName(name: string):void {
    console.log(name);
}
sayMyName('Heisenberg');

//Never

function throwError(msg: string):never {
    throw new Error(msg);
}

//Type
type Login = string;

const login: Login = 'admin';

type ID = string | number;

const id1: ID = 127;
const id2: ID = '128';