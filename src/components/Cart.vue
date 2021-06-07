<template>
  <ul class="list-group">
    <li class="list-group-item">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
      <div class="media">
        <img
          class="mr-3"
          src="https://m.media-amazon.com/images/I/81XvT+ahkoL._AC_UY218_.jpg"
          alt="Generic placeholder image"
          width="80px"
        />
        <div class="media-body">
          <p class="mt-0">Judul</p>
          <button class="btn-qty btn-sm btn-secondary">-</button>
          x 1
          <button class="btn-qty btn-sm btn-secondary">+</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Cart",
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
}

.media-body {
  text-align: left;
}
</style>
