import {Validation} from "./main";

const app = () => {
    const button = document.getElementById('button');
    const zero = <HTMLInputElement>document.querySelector('[name=zero]');
    const form = new Validation('.form');

    button?.addEventListener('click', (event) => {
        event.preventDefault();

        if(form.validate()) {
            form.submit();
        }
    });

    (() => {
        form.add({
            validate: [
                {
                    field: '[name=id]',
                    options: {
                        checked: true
                    },
                    message: '아이디를 입력해 주세요',
                    focus: true
                },
                {
                    field: '[name=address]',
                    message: '주소를 입력해 주세요',
                    options: {
                        required: true
                    },
                    focus: true
                }
            ]
        });
    })();
};

document.addEventListener('DOMContentLoaded', () => app(), false);
