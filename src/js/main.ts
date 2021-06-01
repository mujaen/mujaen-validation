interface List {
    validate: {}[]
}

interface Item {
    field?: string,
    message?: string,
    focus?: boolean,
    custom?: () => boolean,
    options?: Options
}

interface Options {
    required: boolean,
    email: boolean,
    checked: boolean,
    min: number,
    max: number
}

export default class Validation {
    public form: HTMLFormElement | null;
    public list: Item[];
    public check: boolean;
    public valid: boolean;

    constructor(form: string) {
        this.form = document.querySelector(form);
        this.list = [];
        this.check = false;
        this.valid = true;
    }

    private methods(element: HTMLInputElement | null | undefined, options: Options | undefined) {
        if(!options) this.valid = true;

        if(options) {
            Object.keys(options).forEach((key: string) => {
                switch (key) {
                    case 'required':
                        this.valid = !element?.value.trim() ? false : true;
                        break;
                    case 'email':
                        this.valid = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(`${element?.value}`);
                        break;
                    case 'checked':
                        this.valid = !element?.checked? false : true;
                        break;
                    case 'min':
                        this.valid = Number(element?.value.length) <= options[key] ? false : true;
                        break;
                    case 'max':
                        this.valid = Number(element?.value.length) >= options[key] ? false : true;
                        break;
                    default:
                        this.valid = true;
                }
            });
        }

        return this.valid;
    }

    private isValid(result: boolean, message: string | undefined, focus: boolean | undefined, element: HTMLInputElement | null | undefined) {
        switch (result) {
            case true:
                return true;
                break;
            default:
                if(message) alert(message);
                if(focus) element?.focus();
                return false;
        }
    }

    public validate(): boolean {
        this.check = true;

        this.list.some(item => {
            if(!this.isValid((item.custom ? item.custom() : this.methods(this.form?.querySelector(`${item.field}`), item.options)), item.message, item.focus, this.form?.querySelector(`${item.field}`))) {
                this.check = false;
                return true;
            }
        });

        return this.check == true ? true : false;
    }

    public submit(): void {
        this.form?.submit();
    }

    public add(items: List): void {
        items.validate.forEach((item: {}) => {
            if(Object.keys(item).length) this.list.push(item);
        });
    }
};