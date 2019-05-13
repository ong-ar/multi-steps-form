# 멀티 스텝 폼

- react with typescript
- functional programming (함수형 프로그래밍)
- hooks (state, effect, ...)

## 요구사항

### 라이브러리

- redux 이외의 라이브러리 사용 금지

### 밸리데이션

- 각각의 페이지에서 ‘다음’ 버튼을 눌렀을 때 해당 페이지의 입력값을 검사하여, 값이 없다면 다음 페이지로 넘어가지 않고 ‘값을 입력해주세요!’라는 alert이 노출된다.
- 제출 버튼이 클릭되었을 때도 마찬가지로 밸리데이션을 실행해야한다.

### 유닛 테스트

- 루트와 페이지를 제외한 각 컴포넌트에는 유닛 테스트가 적용되어야 한다. (테스트 프레임워크는 자유롭게 사용하시면 됩니다)

### 참고

| formtype id | 폼 종류    |
| ----------- | ---------- |
| 1           | Checkbox   |
| 2           | Radio      |
| 3           | Text Input |
| 4           | SelectBox  |

## 프로젝트 설치

### create-react-app

```bash
$ create-react-app multi-step-form --scripts-version=react-scripts-ts
```

## 프로젝트 명령어

### 개발모드 실행

```bash
$ yarn run start
```

### 유닛 테스트

```bash
$ yarn run test
```

### production

```bash
$ yarn run build
# 만약 없다면
$ yarn global add serve
$ serve -s build
```

### packages

```bash
# ie9 또는 버전이 오래된 브라우저를 위해 추가
$ yarn add react-app-polyfill

# 라우터 경로 설정을 위한 패키지
$ yarn add react-router-dom && yarn add @types/react-router-dom --dev
```

## todo

### components

- [x] Checkbox
- [x] CheckboxGroup
- [x] Radio
- [x] RadioGroup
- [x] TextInput
- [x] SelectBox
- [x] MultiStepForm

### unit test (jest, enzyme)

1. Checkbox

   - [x] name
   - [x] value
   - [x] disabled
   - [x] checked

2. CheckboxGroup

   - [x] checkbox 갯수
   - [x] name
   - [x] value (checkbox)
   - [x] defaultValues

3. Radio

   - [x] name
   - [x] value
   - [x] disabled
   - [x] checked
   - [x] defaultChecked

4. RadioGroup

   - [x] name
   - [x] defaultValue

5. Select

   - [x] defaultValue

6. TextInput

   - [x] placeholder

## components 사용법

### Checkbox / CheckboxGroup

```jsx
<Checkbox>text</Checkbox>
<Checkbox value="text">text</Checkbox>

<CheckboxGroup>
    <Checkbox value="text">text</Checkbox>
</CheckboxGroup>
```

**Checkbox**

| Attribute      | Description                     | Type     |
| -------------- | ------------------------------- | -------- |
| name           | 이름                            | string   |
| value          | 값                              | string   |
| disabled       | 사용/미사용                     | boolean  |
| checked        | 체크/미체크                     | boolean  |
| defaultChecked | 체크/미체크 (렌더링될 때 1회만) | boolean  |
| onChange       | 변경 이벤트                     | function |

**CheckboxGroup**

| Attribute     | Description                      | Type             |
| ------------- | -------------------------------- | ---------------- |
| name          | 이름 (Checkbox 전부 적용)        | string           |
| defaultValues | 체크 할 값들                     | string[]         |
| onChange      | 변경 이벤트                      | function         |
| groupId       | 아이디 (onChange 2번째 파라미터) | string \| number |

### Radio / RadioGroup

```jsx
<Radio>text</Radio>
<Radio value="text">text</Radio>

<RadioGroup name="radio">
    <Radio value="text">text</Radio>
</RadioGroup>
```

**Radio**

| Attribute      | Description                     | Type     |
| -------------- | ------------------------------- | -------- |
| name           | 이름                            | string   |
| value          | 값                              | string   |
| disabled       | 사용/미사용                     | boolean  |
| checked        | 체크/미체크                     | boolean  |
| defaultChecked | 체크/미체크 (렌더링될 때 1회만) | boolean  |
| onChange       | 변경 이벤트                     | function |

**RadioGroup**

| Attribute     | Description                      | Type             |
| ------------- | -------------------------------- | ---------------- |
| name          | 이름 (Radio 전부 적용)           | string           |
| defaultValues | 체크 할 값들                     | string[]         |
| onChange      | 변경 이벤트                      | function         |
| groupId       | 아이디 (onChange 2번째 파라미터) | string \| number |

### Select / Option

```jsx
<Select>
  <Option value="select">select</Option>
</Select>
```

**Select**

| Attribute    | Description                      | Type             |
| ------------ | -------------------------------- | ---------------- |
| defaultValue | 선택 할 값                       | boolean          |
| onChange     | 변경 이벤트                      | function         |
| itemId       | 아이디 (onChange 2번째 파라미터) | string \| number |

**Option**

| Attribute | Description | Type    |
| --------- | ----------- | ------- |
| value     | 값          | string  |
| disabled  | 사용/미사용 | boolean |

### TextInput

```jsx
<TextInput placeholder="textinput" />
```

**TextInput**

| Attribute   | Description                      | Type             |
| ----------- | -------------------------------- | ---------------- |
| placeholder | placeholder                      | string           |
| onChange    | 변경 이벤트                      | function         |
| itemId      | 아이디 (onChange 2번째 파라미터) | string \| number |

## MultiStepForm

```jsx
const onSubmit = output => {
  console.log(output);
};
<MultiStepForm input={{}} onSubmit={onSubmit} />;
```

| Attribute | Description       | Type     |
| --------- | ----------------- | -------- |
| input     | JSON (input.json) | JSON     |
| onSubmit  | 제출 이벤트       | function |
