import * as Phaser from 'phaser';
import GridSizer from '../gridsizer/GridSizer';
import { IConfig as IConfigBase } from '../gridsizer/GridSizer';
import { IConfig as IConfigButtons } from '../utils/buttons/Buttons';
import { IButtons } from '../utils/buttons/Buttons';


export interface IConfig extends IConfigBase, IConfigButtons {
    background?: Phaser.GameObjects.GameObject,

    buttons?: Phaser.GameObjects.GameObject[][],
}

export default class GridButtons extends GridSizer implements IButtons {
    sizerChildren: (Phaser.GameObjects.GameObject | null)[];

    constructor(
        scene: Phaser.Scene,
        config?: IConfig
    );

    emitButtonClick(
        index: number | Phaser.GameObjects.GameObject
    ): this;

    setButtonEnable(
        index?: number | Phaser.GameObjects.GameObject | boolean,
        enable?: boolean
    ): this;

    toggleButtonEnable(
        index?: number | Phaser.GameObjects.GameObject
    ): this;

    getButtonEnable(
        index: number | Phaser.GameObjects.GameObject
    ): boolean;

    addButton(
        gameObject: Phaser.GameObjects.GameObject
    ): this;

    removeButton(
        gameObject: Phaser.GameObjects.GameObject,
        destroyChild?: boolean
    ): this;

    clearButtons(
        destroyChild?: boolean
    ): this;

    showButton(
        index: number | Phaser.GameObjects.GameObject
    ): this;

    hideButton(
        index: number | Phaser.GameObjects.GameObject
    ): this;

    forEachButtton(
        callback: (button: Phaser.GameObjects.GameObject, index: number, buttons: Phaser.GameObjects.GameObject[]) => void,
        scop?: unknown
    ): this;

    value: unknown;
}