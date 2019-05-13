# 멀티 스텝 폼

- react with typescript
- functional programming (함수형 프로그래밍)
- hooks (state, effect, ...)

## 구동 방식

### 필수 소프트웨어

- yarn 0.25+

### 설명

create-react-app 으로 eject 안 한 상태에서 프로젝트를 진행했습니다.

개발자 모드로 실행하실려면

```bash
$ yarn && yarn run start
```

http://localhost:3000 or http://로컬아이피:3000

빌드하여 프로덕트 모드로 실행하시려면

```bash
$ yarn && yarn build && yarn global add serve && serve -s build
```

http://localhost:5000 or http://로컬아이피:5000

위 포트는 기본 설정에 의한 포트입니다.

패키지는 react-app-polyfill, react-router-dom, enzyme 관련 이외에는 설치하지 않았습니다.

오로지 CRA 에 의존하여 구현하였습니다.

typescript, 함수형 프로그래밍으로 구현하였습니다.

프로젝트 구조는

```
multi-steps-form
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── images.d.ts
├── json.d.ts # json 파일 로드를 위해 필요함
├── ts 관련 설정 파일
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── Componenets # 컴포넌트
        ├── Checkbox # 체크박스 인풋
            ├── __tests__ # 유닛테스트 폴더
        ├── Radio # 라디오 인풋
        ├── Select # 셀렉트
        ├── TextInput # 텍스트인풋
        └── MultiStepsForm # 멀티스텝폼
    ├── Routes # 라우트
        ├── App # 라우트 설정
        └── Home # root page (/)
    ├── assets # input.json
        └── input.json
    ├── setupTests.ts # jest 사용하기 위한 파일
    ├── index.css
    └── index.tsx
```

각 입력 엘리먼트들을 컴포넌트화 시켰고, formType 에 따라 Step을 생성하여 표현하도록 구현하였습니다.

유닛테스트 관련 파일은 각 컴포넌트 폴더 내 `__tests__` 폴더에 있고

실행 스크립트는

```bash
$ yarn run test
```

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
# 만약 serve가 없다면
# $ yarn global add serve
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

---

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

---

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

---

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

---

### MultiStepForm

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
