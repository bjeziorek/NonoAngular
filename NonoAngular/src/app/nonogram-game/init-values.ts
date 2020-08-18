export class InitValues {
    static initialLivesValue: number;

    constructor() {
        InitValues.initialLivesValue = 8;
    }
    getLives(): number {
        return InitValues.initialLivesValue;
    }
}