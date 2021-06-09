<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
      <span class="navbar-brand mb-0 h1">Cart ({{totalQty}})</span>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Header",
  computed: {
    // mengambil state yang ada di vuex dari state yg sudah difilter di getter
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a,b) => a+b.qty, 0)
    }
  }
};
</script>

<style>
nav {
  margin-bottom: 50px;
}
</style>
