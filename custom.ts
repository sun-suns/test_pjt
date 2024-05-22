

enum CustomBlock {
    //% blockIdentity="blocks.block" enumval=22 block="ラピスラズリブロック"
    //% jres alias=LAPIS_LAZULI_BLOCK
    LapisLazuliBlock = 22,
    //% blockIdentity="blocks.block" enumval=41 block="金のブロック"
    //% jres alias=GOLD_BLOCK
    GoldBlock = 41,
    //% blockIdentity="blocks.block" enumval=42 block="鉄のブロック"
    //% jres alias=IRON_BLOCK
    IronBlock = 42,
    //% blockIdentity="blocks.block" enumval=57 block="ダイヤモンドブロック"
    //% jres alias=DIAMOND_BLOCK
    DiamondBlock = 57,
    //% blockIdentity="blocks.block" enumval=133 block="エメラルドブロック"
    //% jres alias=EMERALD_BLOCK
    EmeraldBlock = 133
}

//% weight=999 color=#000000 icon="\uf1b3"
//% block="体験（たいけん）"
namespace lesson0 {

    //% weight=90
    //% blockId=customPlace
    //% block="$block を $pos におく"
    //% block.shadow=customBlock
    //% pos.shadow="positionXY"
    //% topblock topblockWeight=85
    //% shim=blocks::placeAsync promise
    export function customPlace(block: number, pos: Position): void {
        blocks.place(block, pos);
    }

    //% weight=85
    //% blockId=customBlock
    //% block="$block"
    //% block.fieldEditor="gridpicker"
    //% block.fieldOptions.width=340
    //% block.fieldOptions.columns=8
    //% block.fieldOptions.tooltips=true
    //% block.fieldOptions.tooltipsXOffset="20"
    //% block.fieldOptions.tooltipsYOffset="-20"
    //% block.fieldOptions.maxRows="8"
    //% block.fieldOptions.hasSearchBar=true
    //% block.fieldOptions.hideRect=true
    export function customBlock(block: CustomBlock): number {
        return block;
    }

    //% weight=80
    //% blockId=positionXY
    //% block="たいよう：$x うえ：$y"
    //% inlineInputMode=inline
    //% x.defl=0
    //% y.defl=0
    export function positionXY(x: number, y: number): Position {
        return world(x, y, 0);
    }




}
