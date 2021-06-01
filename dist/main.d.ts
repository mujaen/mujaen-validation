interface List {
    validate: {}[];
}
interface Item {
    field?: string;
    message?: string;
    focus?: boolean;
    custom?: () => boolean;
    options?: Options;
}
interface Options {
    required: boolean;
    email: boolean;
    checked: boolean;
    min: number;
    max: number;
}
export default class Validation {
    form: HTMLFormElement | null;
    list: Item[];
    check: boolean;
    valid: boolean;
    constructor(form: string);
    private methods;
    private isValid;
    validate(): boolean;
    submit(): void;
    add(items: List): void;
}
export {};
