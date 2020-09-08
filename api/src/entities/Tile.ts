export interface ITile {
    id: string;
    colour: string;
    xPos: number;
    yPos: number;
    isMarked: boolean;
    isVisited: boolean;
}

class Tile implements ITile {

    public id: string;
    public colour: string;
    public xPos: number;
    public yPos: number;
    public isMarked: boolean = false;
    public isVisited: boolean = false;

    constructor(id: string, colour: string, x: number, y: number, isMarked?: boolean, isVisited?: boolean) {
        this.id = id;
        this.colour = colour;
        this.xPos = x;
        this.yPos = y;
        if (isMarked)
            this.isMarked = isMarked;
        if (isVisited)
            this.isVisited = isVisited;
    }
}

export default Tile;
