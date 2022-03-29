<template>
  <div>
    <table>
      <tr>
        <th><input type="checkbox" v-model="checkAll"/></th>
        <th>Product name</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Sum</th>
      </tr>
      <tr v-for="(product, idx) in mutatedProductList" :key="idx">
        <td><input type="checkbox" v-model="product.checked"/></td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ getSum(product) | currency }}</td>
      </tr>
    </table>
    <div class="table-footer" v-if="productList.length">
      <button @click="deleteProductHandler">Delete</button>
      <div>
        <h3>Total
        <code>{{ getTotalSum | currency }}</code></h3>
      </div>
    </div>
    <h3 v-else>List is empty</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {IProduct} from '@/@types/calc'

export default Vue.extend({
  name: 'CalcList',
  data() {
    return {
      checkAll: false,
      mutatedProductList: [] as IProduct[]
    }
  },
  watch: {
    checkAll(value) {
      if (value) {
        this.toggleStatus(true)
      }
      else this.toggleStatus(false)
    },
    productList(value:IProduct[]) {
      this.mutatedProductList = value?.map((product) => {
        return {
          ...product,
          checked: false
        }
      })
    }
  },
  computed: {
    productList() {
      return this.$store.getters['product/productList']
    },
    getTotalSum() {
      let sum = 0
      this.productList?.forEach((product: IProduct) => {
        sum += product.price * product.quantity
      })
      return sum
    },
  },
  filters: {
    currency(amount: number): string {
      return amount.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
    }
  },
  methods: {
    getSum(product: IProduct) {
      return product.price * product.quantity
    },
    toggleStatus(value: boolean) {
      this.mutatedProductList.forEach((product, index) => {
        this.mutatedProductList[index].checked = value;
      });
    },
    deleteProductHandler() {
      //roping value for empty list
      if (this.checkAll) this.checkAll = false
      this.mutatedProductList.forEach((product) => {
        if (product.checked) {
          this.$store.dispatch('product/removeProduct', product.id)
        }
      });
    }
  },
  mounted() {
    this.mutatedProductList = this.$store.getters['product/productList']
  },
});
</script>
<style>
.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
