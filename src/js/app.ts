import {Validation} from "./main";

const app = () => {
    const button = document.getElementById('submit');
    const zero = <HTMLInputElement>document.querySelector('[name=zero]');
    const form = new Validation('.form');

    button?.addEventListener('click', (event) => {
        event.preventDefault();

        if(form.validate()) {
            console.log('submit');
        }
    });

    (() => {
        form.add({
            validate: [
                {
                    field: '[name=custom]',
                    options: {
                        required: true,
                        email: true
                    },
                    message: '임의스크립트를 입력해 주세요',
                    focus: true
                },
                {
                    field: '[name=address]',
                    message: '주소를 입력해 주세요',
                    focus: true,
                    custom: function() {
                        return /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(zero.value);
                    }
                },
                {
                    field: '[name=id]',
                    options: {
                        checked: true
                    },
                    message: '아이디를 입력해 주세요'
                }
            ]
        });
    })();
};

document.addEventListener('DOMContentLoaded', () => app(), false);
