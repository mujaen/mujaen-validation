interface List {
    validate: {}[],
    field?: string,
    message?: string,
    required?: boolean
}

/*interface List {
    element?: string,
    message?: string,
    error?: string,
    required?: boolean,
    check?: boolean,
    phone?: boolean,
    email?: boolean,
    focus?: boolean,
    maxlength?: number,
    minlength?: number,
    equals?: string
}*/

class Validation {
    public form: HTMLElement | null;
    public list: List[];
    public check: boolean;

    constructor(form: string) {
        this.form = document.querySelector(form);
        this.list = [];
        this.check = false;
    }

    /*private isEmpty(element: HTMLInputElement | null | undefined): boolean {
        if(!element?.value.trim()) return false;

        return true;
    }

    private isChecked(element: HTMLInputElement[]): boolean {
        this.check = false;

        element?.some(item => {
            if(item.checked == true) {
                this.check = true;
                return true;
            }
        });

        if(!this.check == true) return false;

        return true;
    }

    private isPhone(element: HTMLInputElement | null | undefined): boolean {
        return /(01[0|1|6|9|7])([0-9\b -]{0,6})(\d{4}$)/g.test(`${element?.value}`);
        //return /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g.test(`${element?.value}`);
    }

    private isEmail(element: HTMLInputElement | null | undefined): boolean {
        return /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(`${element?.value}`);
    }

    private isMin(element: HTMLInputElement | null | undefined, min: number): boolean {
        if(element && element?.value.length < min) return false;

        return true;
    }

    private isMax(element: HTMLInputElement | null | undefined, max: number): boolean {
        if(element && element?.value.length > max) return false;

        return true;
    }

    private isEquals(element: HTMLInputElement | null | undefined, element2: HTMLInputElement | null | undefined): boolean {
        if(element?.value !== element2?.value) return false;

        return true;
    }*/

    public validate(): boolean {
        this.check = true;

        this.list.some(item => {
            /*if (item.required === true && !this.isEmpty(this.form?.querySelector(`${item.element}`))) {
                alert(item.message);
                this.check = false;
                return true;
            }

            if (item.check === true && !this.isChecked(Array.from(document.querySelectorAll(`${item.element}`)))) {
                alert(item.message);
                this.check = false;
                return true;
            }

            if (item.phone === true && !this.isPhone(this.form?.querySelector(`${item.element}`))) {
                alert(item.message);
                this.check = false;
                return true;
            }

            if (item.email === true && !this.isEmail(this.form?.querySelector(`${item.element}`))) {
                alert(item.message);
                this.check = false;
                return true;
            }

            if (item.minlength && !this.isMin(this.form?.querySelector(`${item.element}`), item.minlength)) {
                alert(`${item.minlength}자 이상 입력해 주세요`);
                this.check = false;
                return true;
            }

            if (item.maxlength && !this.isMax(this.form?.querySelector(`${item.element}`), item.maxlength)) {
                alert(`${item.maxlength}자 이내로 입력해 주세요`);
                this.check = false;
                return true;
            }

            if (item.equals && !this.isEquals(this.form?.querySelector(`${item.element}`), this.form?.querySelector(`${item.equals}`))) {
                alert(item.message);
                this.check = false;
                return true;
            }*/
        });

        if(this.check == true) {
            return true;
        }

        return false;
    }

    public add(items: List): void {
        items.validate.forEach((item: {}) => {
            this.list.push(item);
        });
    }

    public custom(element: string, block: () => {}): void {

    }
}

export {Validation};

