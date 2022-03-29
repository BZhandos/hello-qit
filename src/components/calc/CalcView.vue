<template>
  <div>
    <h2> Vue invoice Calc </h2>
    <CalcInput />
    <CalcList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CalcInput from './CalcInput.vue';
import CalcList from './CalcList.vue';

export default Vue.extend({
  name: 'CalcView',
  components: {
    CalcInput,
    CalcList,
  },
});
</script>

<style scoped>

</style>