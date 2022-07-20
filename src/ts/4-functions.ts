function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

//overload

interface IPosition {
    x: number | undefined;
    y: number | undefined;
}

interface IPositionWithDefault extends IPosition{
    default: string;
}

function position(): IPosition
// function position(a: number): IPositionWithDefault
function position(a: number, b: number): IPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        }
    }

    if (a && !b) {
        return {
            x: a,
            y: undefined,
            default: a.toString()
        }
    }

    return {
        x: a,
        y: b
    }
}

console.log('Empty: ', position());
// console.log('One param: ', position(42));
console.log('Two params: ', position(42, 33));

