# mujaen-validation
## Form Validation

### Install
```
npm install mujaen-validation
```

### field
- 'filed'에 지정할 수 있는 엘리먼트는 'input' 요소를 기본으로 합니다.
- 'field'에 지정한 요소가 문서에 없다면 실행되지 않습니다.
- 'input' 요소의 type 특성에 따라 'options'가 달라질 수 있습니다.

### message
- 입력값이 지정한 범위를 벗어날 경우 Validation Error를 발생시킵니다.
- 이때, 'message'에 원하는 오류 메시지를 문자열로 추가할 수 있습니다.

### focus
- 입력값이 지정한 범위를 벗어날 경우 Validation Error를 발생시킵니다.
- 이때, 'focus'를 설정하면 해당 엘리먼트가 Focus Event를 실행합니다.
- 디폴트값은 false 입니다.
```javascript
{
    field: '[name=email]',
    options: {
        email: true
    },
    focus: true
}
```

### custom
- 'field'에 지정한 요소에 사용자가 임의 스크립트를 설정하고자 할 때 사용합니다. 
- 'options'와 같이 사용할 수 없습니다.
- 'return'값은 반드시 boolean이며 false일 시 Validation Error를 발생시킵니다.
- 디폴트값은 false 입니다.
```javascript
{
    field: '[name=address]',
    custom: function() {
        return /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(input.value);
    }
}
```
| 속성 | 설명 | 기본값 | 타입 |
|---|---|---|---|
| cumstom | 임의 스크립트를 추가하여 결과에 따른 이벤트 발생 | false | boolean |

### add
- 유효성 검사 규칙을 추가합니다.
```javascript
form.add({validate: []});
```

### options

| 속성 | 설명 | 기본값 | 타입 |
|---|---|---|---|
| required | 입력값 유무 | false | boolean |
| checked | 체크 유무 | false | boolean |
| email | 이메일 유효성 | false | boolean |
| min | 입력 최솟값 | | number |
| max | 입력 최댓값 | | number |


### Usage
```javascript
import Validation from "mujaen-validation";

const form = new Validation('.form');

if(form.validate()) {
    form.submit();
}

form.add({
    validate: [
        {
            field: '[name=id]',
            options: {
                required: true
            },
            message: '아이디를 입력해 주세요!'
        },
        {
            field: '[name=email]',
            options: {
                required: true,
                email: true
            },
            message: '이메일을 입력해 주세요!'
        },
        {
            field: '[name=agree]',
            options: {
                checked: true
            },
            message: '약관에 동의해 주세요.'
        }
    ]
});
```




