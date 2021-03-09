import {Validation} from "./main";

const app = () => {
    const valid = new Validation('.form');

    if(valid.validate()) {

    }


    (() => {
        valid.add({
            validate: [
                {
                    field: '[name=id]',
                    message: '아이디를 입력해 주세요'
                },
                {
                    field: '[name=address]',
                    message: '주소를 입력해 주세요',
                    required: false
                },
                {
                    field: '[name=custom]',
                    message: '주소를 입력해 주세요',
                    custom: 'custom1'
                }
            ]
        });

        valid.custom(
            'custom1',
            function(element: HTMLElement) {
                return true;
            }
        );
    })();
};

document.addEventListener('DOMContentLoaded', () => app, false);
