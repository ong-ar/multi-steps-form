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

```bash
$ create-react-app multi-step-form --scripts-version=react-scripts-ts
```

## todo

### components

- [ ] Checkbox
- [ ] CheckboxGroup
- [ ] Radio
- [ ] RadioGroup
- [ ] TextInput
- [ ] SelectBox
- [ ] MainForm
