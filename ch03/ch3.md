# 3. 디렉티브

## 3.1 기본 디렉티브

### 3.1.1 v-text

- {{}} 를 이용하여 데이터를 삽입하는 법
- 또는 v-text 속성을 이용하여 데이터 값을 출력 가능
- 둘 다 사용할 경우 속성 사용법이 우선된다

```html
<h2 v-text="message">{{ message }}</h2>
```

### v-html

- html 태그 자체를 삽입하도록 해주는 방법

```html
<div v-html="htmlMsg"></div>

<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return {
        htmlMsg:
          '<span style="color: red;">Hello, <strong>Vue.js</strong>!</span>',
      };
    },
  }).mount('#app');
</script>
```

### 3.1.2 v-bind

- 요소의 속성에 원하는 데이터를 단방향으로 바인딩하는 디렉티브
- 단방향 특성으로 화면의 요소가 변해도, 처음에 바인딩 시킨 데이터는 변경되지 않는다
- v-bind:src 를 축약하여 :src 로 사용 가능

```html
<div id="app">
  <h2>{{ message }}</h2>
  <input type="text" v-bind:value="message" />
  <br />
  <img v-bind:src="imagePath" />
</div>
<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return {
        message: 'v-bind 디렉티브',
        imagePath: 'https://contactsvc.bmaster.kro.kr/photos/18.jpg',
      };
    },
  }).mount('#app');
</script>
```

### 3.1.3 v-model

- 양방향으로 데이터를 바인딩하는 디렉티브
- 화면에서 값이 변하면 실제 데이터도 변경 되므로, 주로 form 요소에 사용한다
- <v-model="속성"> 으로 사용

```html
<div id="app">
  <input type="text" v-model="name" />
  <br />
  입력한 값: <span>{{name}}</span>
</div>
<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return { name: '' };
    },
  }).mount('#app');
</script>
```

- checkbox 에 사용할 때는 아래와 같이 사용한다

```html
<div id="app">
  위의 내용에 동의하십니까?
  <input type="checkbox" v-model="agree" true-value="yes" false-value="no" />
  <hr />
  <span>선택된 값 : {{agree}}</span>
</div>
<script src="https://unpkg.com/vue"></script>
<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return {
        agree: 'no',
      };
    },
  }).mount('#app');
</script>
```

#### 수식어(modifier)

- v-model 디렉티브에 특별한 기능을 추가할 때 사용한다

- lazy : 엔터를 치거나 포커스 이동시 값을 동기화
  - <input type="text" v-model:lazy="name" />
- number : 문자열을 자동으로 숫자로 형변환하여 반영
  - <input type="text" v-model:number="number" />
- trim : 무낮열의 앞뒤 공백을 자동으로 제거

  - <input type="text" v-model:trim="number" />

  #### 한글 처리 문제

  - 한글의 경우 4byte 케이스라서 v-model 구현시 한글 입력이 끝나도, 제대로 처리가 안되는 문제 발생
  - v-model 이 아닌 이벤트 객체에 함수를 바인딩해서 사용하는 방식으로 구현 가능

  ```html
  <div id="app">
    <!-- v-model 이 아닌 bind 와 changeName 함수를 바인딩하여 e 객체로 값을 반영 -->
    <input type="text" :value="name" @input="changeName" /> <br />
    이름: <span>{{name}}</span>
  </div>
  <script src="https://unpkg.com/vue"></script>
  <script>
    let vm = Vue.createApp({
      name: 'App',
      data() {
        return { name: '' };
      },
      methods: {
        changeName(e) {
          this.name = e.target.value;
        },
      },
    }).mount('#app');
  </script>
  ```

### 3.1.4 v-show

- 화면 표현 여부를 결정하는 디렉티브
- 요소는 생성하나 화면에 출력하지 않는 개념
- <tag v-show="조건"> 으로 사용

```html
<div id="app">
  예금액: <input type="text" v-model="amount" />
  <img
    v-show="amount < 0"
    src="https://contactsvc.bmaster.kro.kr/img/error.png"
    title="마이너스는 허용하지 않습니다."
    style="width:15px; height:15px; vertical-align:middle"
  />
</div>
<script src="https://unpkg.com/vue"></script>
<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return { amount: '' };
    },
  }).mount('#app');
</script>
```

### 3.1.5 v-if

- v-show 와는 달리 조건에 부합하지 않으면 요소 생성 X
- 조건이 부합하면 런타임에 생성

#### v-else, v-else-if

```html
<div id="app">
  잔고: <input v-model="balance" />
  <br />
  회원님의 등급 :
  <span v-if="balance > 100000">Gold</span>
  <span v-else-if="balance >= 10000">Silver</span>
  <span v-else-if="balance >= 1000">Bronze</span>
  <span v-else="balance">Basic</span>
</div>
<script src="https://unpkg.com/vue"></script>
<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return { balance: 0 };
    },
  }).mount('#app');
</script>
```

### 3.1.6 v-for

- 반복적인 데이터를 렌더링할 때 사용
- <tag v-for="(var, index) in 배열" :key="id값">

```html
<style>
  #list {
    width: 600px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  #list td,
  #list th {
    border: 1px solid black;
    text-align: center;
  }
  #list > thead > tr {
    color: yellow;
    background-color: purple;
  }
</style>
<div id="app">
  <table id="list">
    <thead>
      <tr>
        <th>번호</th>
        <th>이름</th>
        <th>전화번호</th>
      </tr>
    </thead>
    <tbody id="contacts">
      <tr v-for="contact in contacts" :key="contact.no">
        <td>{{contact.no}}</td>
        <td>{{contact.name}}</td>
        <td>{{contact.tel}}</td>
      </tr>
    </tbody>
  </table>
</div>
<script src="https://unpkg.com/vue"></script>
<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return {
        contacts: [
          { no: 1011, name: 'RM', tel: '010-3456-8299' },
          { no: 1012, name: '정국', tel: '010-3456-8298' },
          { no: 1013, name: '제이홉', tel: '010-3456-8297' },
          { no: 1014, name: '슈가', tel: '010-3456-8296' },
        ],
      };
    },
  }).mount('#app');
</script>
```

- 객체 사용시
  - <tag v-for="(val, key, index) in 객체" :key="key">

```html
<option v-for="(val, key) in regions" :value="key" :key="key">{{val}}</option>

<script>
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return {
        regions: {
          A: 'Asia',
          B: 'America',
          C: 'Europe',
          D: 'Africa',
          E: 'Oceania',
        },
      };
    },
  }).mount('#app');
</script>
```

#### v-for 디렉티브와 key 특성

- 렌더링 시 key 가 없으면 전부 다시 렌더링, key 가 있으면 위치만 변경
  - 자동으로 배정되는 index 를 key 로 부여할 경우 제일 앞에 데이터가 추가되면 key 가 전부 변경되므로 전부 다시 렌더링이 된다
  - 대신 고유 key 값을 결정하면, 추가 된 데이터만 렌더링

## 3.2 데이터 변경시 주의사항

### 3.2.1 Proxy 객체

- Vue 인스턴스의 data 로 지정된 객체는 모두 proxy 로 매핑되어 해당 데이터가 변경되면 렌더링이 발생
- 같은 데이터라고 하더라도 Vue 인스턴스로 접근하는 것이 아니라 직접 접근하면 Proxy 가 작동하지 않아서 렌더링 발생 X

```html
<div id="app">
  <!-- Model 에 추가하면 Proxy 가 작동하지 않아 렌더링 발생 X -->
  <button v-on:click="pushMemberWithModel">Model 추가</button>
  <!-- Vue 인스턴스에 추가하면 Proxy 가 작동 -> 렌더링 발생 O -->
  <button v-on:click="pushMemberWithVm">vm 추가</button>
</div>
<script src="https://unpkg.com/vue"></script>
<script>
  const model = {
    contacts: [
      { no: 1011, name: 'RM', tel: '010-3456-8299' },
      { no: 1012, name: '정국', tel: '010-3456-8298' },
      { no: 1013, name: '제이홉', tel: '010-3456-8297' },
      { no: 1014, name: '슈가', tel: '010-3456-8296' },
    ],
  };
  let vm = Vue.createApp({
    name: 'App',
    data() {
      return model;
    },
    methods: {
      pushMemberWithModel: () =>
        model.contacts.push({ no: 1015, name: '진', tel: '010-3456-8296' }),
      pushMemberWithVm: () => {
        vm.contacts.push({ no: 1016, name: '뷔', tel: '010-3456-8296' });
      },
    },
  }).mount('#app');
</script>
```
