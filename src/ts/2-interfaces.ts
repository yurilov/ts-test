interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

const firstRect: Rect = {
    id: 'first',
    size: {
        width: 20,
        height: 30,
    },
    color: "#000"
}

const secondRect: Rect = {
    id: 'second',
    size: {
        width: 25,
        height: 40,
    }
}

secondRect.color = '#fff';

//===========

interface RectWithArea extends Rect {
    getArea: () => number
}

const thirdRect: RectWithArea = {
    id: 'third',
    size: {
        width: 20,
        height: 30,
    },
    getArea():number {
        return this.size.width * this.size.height;
    },
}

//========

interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//========
interface Styles {
    [key:string]:string
}
const css:Styles = {
    border: '1px solid black',
    marginTop: '2px',
}