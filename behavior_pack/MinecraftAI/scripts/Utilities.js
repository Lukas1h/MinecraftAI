import { world, BlockLocation } from "mojang-minecraft";
export default class Utilities {
    static fillBlock(blockType, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
        let overworld = world.getDimension("overworld");
        for (let i = xFrom; i <= xTo; i++) {
            for (let j = yFrom; j <= yTo; j++) {
                for (let k = zFrom; k <= zTo; k++) {
                    overworld.getBlock(new BlockLocation(i, j, k)).setType(blockType);
                }
            }
        }
    }
    static fourWalls(blockType, xFrom, yFrom, zFrom, xTo, yTo, zTo) {
        let overworld = world.getDimension("overworld");
        for (let i = xFrom; i <= xTo; i++) {
            for (let k = yFrom; k <= yTo; k++) {
                overworld.getBlock(new BlockLocation(i, k, zFrom)).setType(blockType);
                overworld.getBlock(new BlockLocation(i, k, zTo)).setType(blockType);
            }
        }
        for (let j = zFrom + 1; j < zTo; j++) {
            for (let k = yFrom; k <= yTo; k++) {
                overworld.getBlock(new BlockLocation(xFrom, k, j)).setType(blockType);
                overworld.getBlock(new BlockLocation(xTo, k, j)).setType(blockType);
            }
        }
    }
}

//# sourceMappingURL=../../_cottaDebug/Utilities.js.map
