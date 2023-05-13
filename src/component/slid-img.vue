<template>
  <div class="container-img grid relative">
    <div class="contaienr__img relative top-0 left-0 w-full h-[80%]">
      <transition mode="out-in">
        <img
          v-if="showFirstImg"
          class="object-cover bg-cover"
          src="https://preview.colorlib.com/theme/busicol/img/banner/banner2.png.webp"
        />
        <img
          v-else
          class="object-cover bg-cover"
          src="https://preview.colorlib.com/theme/busicol/img/banner/banner.png.webp"
        />
      </transition>
    </div>
  </div>
</template>
<script>
import 'animate.css'
import { mapState } from 'pinia'
import useModalStore from '../stores/modal'
export default {
  name: 'slidImage',
  data() {
    return {}
  },
  computed: {
    ...mapState(useModalStore, ['showFirstImg'])
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.container-img {
  grid-column: 1 / -1 !important;
  & > * {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
}
</style>
