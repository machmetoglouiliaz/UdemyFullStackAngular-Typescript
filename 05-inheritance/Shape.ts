export class Shape {

    constructor(
        private _x: number,
        private _y: number
    ) { }

    get x() {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    get y() {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    getInfo(): string {
        return `x=${this._x} y=${this._y}`
    }
}