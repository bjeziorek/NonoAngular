export class InitValues {
    initialLivesValue: number;

    constructor() {
        this.initialLivesValue = 8;
    }
    getLives(): number {
        return this.initialLivesValue;
    }
}