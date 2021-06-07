<template>
  <div>
    <div v-if="!cart.length" class="alert alert-secondary" role="alert">
      No Product in Cart!
    </div>
    <div v-if="orderPlaced" class="alert alert-success" role="alert">
      Order successfully placed!
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        @click="() => (orderPlaced = false)"
      ></button>
    </div>
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
            <p class="mt-0">{{ item.title }}</p>
            <button
              @click="reduceQty(item.id)"
              class="btn-qty btn-sm btn-secondary"
            >
              -
            </button>
            x {{ item.qty }}
            <button
              @click="addQty(item.id)"
              class="btn-qty btn-sm btn-secondary"
            >
              +
            </button>
          </div>
        </div>
      </li>
    </ul>
    <button
      class="btn-checkout btn btn-lg btn-block btn-success"
      v-if="cart.length"
      :disabled="isProcessing"
      @click="placeOrder"
    >
      <span v-if="!isProcessing">CheckOut ($ {{ totalPrice }} )</span>

      <div v-else class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      isProcessing: false,
      orderPlaced: false,
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    totalPrice() {
      return this.cart.reduce((a, b) => a + b.qty * b.price, 0);
    },
  },
  methods: {
    ...mapActions(["addQty", "reduceQty", "removeItem", "emptyCart"]),
    placeOrder() {
      this.isProcessing = true;
      setTimeout(() => {
        this.orderPlaced = true;
        this.isProcessing = false;
        this.emptyCart();
      }, 1000);
    },
  },
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

.btn-checkout {
  margin-top: 20px;
}
</style>
