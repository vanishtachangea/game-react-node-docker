export interface ITile {
    id: string;
    colour: string;
    xPos: number;
    yPos: number;
}

class Tile implements ITile {

    public id: string;
    public colour: string;
    public xPos: number;
    public yPos: number;

    constructor(id: string, colour: string, x: number, y: number) {
        this.id = id;
        this.colour = colour;
        this.xPos = x;
        this.yPos = y;
    }
}

export default Tile;
