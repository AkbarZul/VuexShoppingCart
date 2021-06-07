<template>
  <div class="row">
    <div
      class="card"
      style="width: 15rem;"
      v-for="item in products"
      :key="item.id"
    >
      <img :src="item.imgUrl" class="card-img-top" :alt="item.title" />
      <div class="card-body">
        <p class="card-title">{{ item.title }}</p>
        <p class="card-text">$ {{ item.price }}</p>
        <a  @click="addToCart(item)" class="btn btn-primary">Add To Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "ProductList",
  computed: {
      ...mapGetters(["products"])
  },
  methods: {
      ...mapActions(["getProducts", "addToCart"]),
  },
  mounted() {
      this.getProducts();
  }
};
</script>

<style scoped>
.card {
  border: none;
  padding: 20px;
}
</style>
