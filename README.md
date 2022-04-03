# 원티드 프리온보딩 코스 사전과제
## 🛼 실행방법

```
$ git clone https://github.com/seeun214/wanted_pre_onboarding.git
$ cd custom-component
$ yarn install
$ yarn start
```

## 📌 Toggle


### ✔️실행방법

![Toggle](https://user-images.githubusercontent.com/81206124/153207356-689e5696-c8fd-4db7-ad36-933c2d6608dc.gif)

토글 스위치를 클릭하면 색이 바뀌면서 ON/OFF 됩니다.

### ✔️구현방법

- useState로 `isOn` 상태를 정의해 토글 스위치를 클릭하면 `isOnHandler` 함수가 실행되어 true로 상태값을 바꿔줌.
- 삼항연산자를 이용해 isOn 값이 true일 경우 **배경 색 변경**, **토글 스위치 오른쪽으로 이동**, **토글 스위치 밑에 알림 메시지 변경**이 실행됨.
- linear-gradient를 사용하여 스위치의 배경 색이 점점 채워지는 느낌으로 구현
- Toggle.js 에서 정의한 css를 export하여 다른 파일에서 import 함. 중복된 css 코드를 재사용 할 수 있었음.

</br>

## 📌 Modal



### ✔️실행방법

![Modal](https://user-images.githubusercontent.com/81206124/153207379-29a117d1-3ad0-47c9-8788-a9229599de2b.gif)


Open Modal을 클릭하면 모달 창이 열립니다. x버튼과 모달 창 바깥쪽 어두운 부분을 클릭하여 모달 창을 닫을 수 있습니다.

### ✔️구현방법

- useState로 `isOpen` 상태를 정의해 Open Modal을 클릭하면 `openModalHandler` 함수가 실행되어 상태값을 true로 바꿔줌.
- 삼항연산자를 이용해 isOpen 값이 true일 경우 **버튼 안의 텍스트가 Opened로 변경되고, 모달 창 열림**
- 화면 전체 크기인 `ModalBack` 컴포넌트를 부모 컴포넌트로, 모달 창인 `ModalView` 컴포넌트를 자식 컴포넌트로 설정해주어 모달 창 바깥쪽 부분을 클릭했을 때도 모달 창이 닫힐 수 있도록 구현.

### ✔️Error Handling Log

모달 창 바깥쪽의 어두운 부분을 클릭했을 경우에도 모달 창을 닫을 수 있도록 하기 위해 화면 전체 크기인 `ModalBack` 컴포넌트를 부모 컴포넌트로, 모달 창인 `ModalView` 컴포넌트를 자식 컴포넌트로 설정해주었다. 이 때 부모 컴포넌트인 `ModalBack` 컴포넌트의 이벤트 핸들러가 자식컴포넌트에서도 작용하는 문제가 발생하여 모달창 내부를 클릭해도 모달 창이 꺼지는 문제가 발생함.

💡자식 컴포넌트인 `ModalView` 컴포넌트의 이벤트 핸들러에 stopPropagation()를 적용하여 부모 컴포넌트의 이벤트 핸들러가 작동하지 않게 해줌.

</br>

## 📌 Tab



### ✔️실행방법

![Tab](https://user-images.githubusercontent.com/81206124/153207399-725cf1fa-567a-4509-9984-b9ebbde36564.gif)

원하는 탭을 클릭하면 해당 탭의 뷰로 전환할 수 있습니다.

### ✔️구현방법

- tap의 이름과 내용을 담은 `tabs` 배열을 만들어 `map` 함수를 이용해 배열의 갯수만큼 Tab이 만들어질 수 있도록 구현(tap을 추가하고 싶으면 배열을 수정하면 됨)
- useState로 현재 클릭한 tap의 index 값을 담은 `focusedTab` 상태를 정의(초기값은 0)
- index 값을 map 함수의 인자로 추가하여 tap을 클릭했을 때  `selectTabHandler` 함수에 index 값을 전달해 줌. `selectTabHandler` 함수는 focusedTab 의 상태값을 현재의 index로 수정해 줌.
- 삼항연산자를 통해 선택된 tap은 ‘tab focused’ 나머지 탭들은 ‘tab’으로 className을 변경해주어 클릭된 tab의 css 속성을 다르게 설정해 줌.

</br>

## 📌 Tag



### ✔️실행방법
![Tag](https://user-images.githubusercontent.com/81206124/153207416-9d166767-2364-48d1-8307-0553041a1ff0.gif)


Input 창에 단어를 입력하면 tag가 만들어지고, 빈값이나 이미 존재하는 값을 입력하면 입력이 되지 않습니다. x버튼을 누르면 삭제가 가능합니다.

### ✔️구현방법

- useState로 `tags` 상태를 정의해 초기값을 'CodeStates'와 'JJang’ 로 설정해줌.
- Input 창에 단어를 입력하고 enter를 클릭하였을 때 `addTags` 함수가 실행되어 `setTags` 를 통해 새로운 단어를 추가함.
- 단어 입력 시 앞뒤 여백을 제거해 주기 위해 `trim()` 사용.
- `map` 함수를 통해 tags에 입력된 단어들을 하나씩 출력.
- index 값을 `map` 함수의 인자로 추가하여 tag의 x버튼을 눌렀을 때  `deleteTags` 함수에 index 값을 전달해 줌. `filter` 함수를 이용하여 전달받은 index에 해당하는 tags 배열의 값을 삭제해 줌.

### ✔️Error Handling Log

enter를 클릭하여 tag를 추가하고 나서도 Input 창에 입력한 단어가 남아있는 현상 발생.

💡event.target.value =""; 를 통해 태그가 추가된 후에 input 창에 입력된 값을 삭제하여 해결함.

</br>

## 📌 AutoComplete



### ✔️실행방법

![AutoComplete](https://user-images.githubusercontent.com/81206124/153207491-05bcca33-cbbc-4018-becf-6eba51d8cb5f.gif)

Input 창에 값을 입력하면 입력한 값과 유사한 단어들을 보여줍니다. 단어들 중 하나를 클릭하면 자동으로 검색어가 완성됩니다. x버튼을 눌러 검색창에 입력된 값을 삭제 할 수 있습니다.

### ✔️구현방법

- useState로 입력값의 유무를 나타내는 `hasText`, 입력값의 상태를 나타내는 `inputValue`, 입력값을 포함하는 검색 추천 리스트의 값들을 담고 있는 `options` 를 정의.
- Intput 창에 값을 입력하면 `includes()`를 통해 입력된 값을 포함하는 단어들만 `options` 에 담아줌.
- 추천된 단어 리스트 중 하나를 클릭하면 `handleOptionClick` 함수를 실행하여 `inputValue` 에 선택한 단어로 상태를 변화 시켜 자동으로 검색어가 완성되도록 구현.
- `inputValue` 값이 바뀔 때마다 `useEffect`가 실행되어 추천 리스트가 변경되도록 구현.
- x 버튼을 누르면 `inputValue`의 상태 값을 초기화시켜 Input 창을 비워줌.


</br>

## 📌 ClickToEdit



### ✔️실행방법

![ClickToEdit](https://user-images.githubusercontent.com/81206124/153207510-71e3ea2c-b41b-412e-920f-10dbb0c20552.gif)

Input 창에서 수정이 가능하고 Input 창이 아닌 곳을 클릭하면 수정한 내용이 반영됩니다.

### ✔️구현방법

- `useRef` 를 사용해서 Input 창을 클릭했을 경우에만 값을 바꿀 수 있게 구현.
- `NewInput`컴포넌트를  `ClickToEdit` 컴포넌트의 자식 컴포넌트로 구현하여 name 상태값과 age 상태값을 가지고 있는 value를 `NewInput` 컴포넌트에 전달
- useState로 `isEditMode` 상태를 정의해 `isEditMode` true가 되면 Input 창에 포커스를 줘서 수정이 가능하도록 구현.
- useState로 `newValue` 상태를 정의해 Input 창에 입력한 값을 저장해 두었다가 `onBlur`를 통해 Input 창이 아닌 다른 곳을 클릭하였을 때 `handleBlur` 함수를 실행해 출력 값이 수정되도록 구현.
