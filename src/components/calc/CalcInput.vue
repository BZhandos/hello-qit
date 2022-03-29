<template>
  <form v-on:submit="addProductHandler">
    <div class="form-wrap">
      <input placeholder="Product name" v-model="product.title" />
      <input placeholder="Price" type="number" step="0.01" min="0.01" v-model="product.price"/>
      <input placeholder="Qty" type="number" min="0"  v-model="product.quantity"/>
      <button type="submit" :disabled="!isValidToSave">Add</button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import { IProduct } from '@/@types/calc'

export default Vue.extend({
  name: 'CalcInput',
  data() {
    return {
      product: {
        id: '',
        title: '',
        price: 0,
        quantity: 0,
      } as IProduct,
    }
  },
  computed: {
    isValidToSave(): boolean {
      return !!(this.product.title.length && this.product.price && this.product.quantity)
    }
  },
  methods: {
    addProductHandler(e: any) {
      e.preventDefault()
      this.$store.dispatch('product/addProduct', this.product)
      this.product = {
        id: '',
        title: '',
        price: 0,
        quantity: 0,
      }
    }
  }
});
</script>

<style scoped>
.form-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>