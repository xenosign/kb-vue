<script setup>
import CheckBoxItem from './components/CheckBoxItem.vue';
import CheckBoxItemProps from './components/CheckBoxItemProps.vue';
import CheckBoxItemProps2 from './components/CheckBoxItemProps2.vue';
import CheckBoxItemPropsCheck from './components/CheckBoxItemPropsCheck.vue';
import InputName from './components/InputName.vue';
import Sender from './components/Sender.vue';
import Receiver from './components/Receiver.vue';
</script>

<template>
  <div>
    <h2>Hello, Vue World!</h2>
    <hr />
    <ul>
      <CheckBoxItemProps
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      />
    </ul>
    <ul>
      <CheckBoxItemProps2 v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
    <ul>
      <CheckBoxItemPropsCheck
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      />
    </ul>
  </div>
  <InputName @nameChanged="nameChangeHandler" />
  <h1>부모 컴포넌트의 데이터 : {{ parentName }}</h1>
  <Sender />
  <Receiver />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Black Pink', checked: false },
        { id: 3, name: 'EXO', checked: false },
        { id: 4, name: 'ITZY', checked: false },
      ],
      parentName: '',
    };
  },
  methods: {
    nameChangeHandler(emittedData) {
      this.parentName = emittedData.name;
      console.log(emittedData.test);
    },
  },
};
</script>
