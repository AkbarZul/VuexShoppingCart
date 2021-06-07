<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in cart" :key="item.id">
      <button
      @click="removeItem(item.id)"
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
      <div class="media">
        <img
          class="mr-3 gambar"
          :src="item.imgUrl"
          :alt="item.title"
          width="80px"
        />
        <div class="media-body">
          <p class="mt-0">{{item.title}}</p>
          <button @click="reduceQty(item.id)" class="btn-qty btn-sm btn-secondary">-</button>
          x {{item.qty}}
          <button @click="addQty(item.id)" class="btn-qty btn-sm btn-secondary">+</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cart"])
  },
  methods: {
    ...mapActions(["addQty", "reduceQty", "removeItem"])
  }
};
</script>

<style scoped>
.btn-qty {
  border-radius: 50%;
  width: 30px;
  border: none;
}

.media {
    width: 90%;
    text-align: left;
} 
</style>
