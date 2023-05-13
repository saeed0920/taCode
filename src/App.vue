<template>
  <!-- header -->
  <div class="header-site grid">
    <!-- element of top -->
    <span class="layout bg-[#282c31]/70 p-2 backdrop-blur-sm h-min">
      <span class="flex items-center">
        <div
          class="icons flex items-center justify-between mr-auto [&>*]:text-white [&>*]:cursor-pointer gap-2 hover:[&>*]:text-[#28ae60] [&>*]:transition-colors"
        >
          <fa :icon="['fab', 'linkedin-in']"></fa>
          <fa :icon="['fab', 'facebook-f']"></fa>
          <fa :icon="['fab', 'google-plus-g']"></fa>
        </div>
        <div class="email flex items-center gap-3 mr-8 cursor-pointer">
          <fa icon="envelope" class="text-[#28ae60]"></fa>
          <h2 class="text-white font-normal">nfo@docmed.com</h2>
        </div>
        <div class="phoneNumber flex items-center gap-3 cursor-pointer">
          <fa icon="phone" class="text-[#28ae60]"></fa>
          <h2 class="text-white font-normal">1601-609 6780</h2>
        </div>
      </span>
    </span>
    <!-- navbar -->
    <div class="layout self-start mt-10">
      <nav class="mt-3 border-b-[1px] border-b-[#4B4E50] flex items-center py-4 justify-between">
        <img src="https://preview.colorlib.com/theme/busicol/img/logo.png" alt="logo" />
        <li
          class="text-white list-none flex items-center justify-between gap-4 hover:[&>*]:text-mainGreen [&>*]:transition-colors"
        >
          <ul>
            <a href="#">Home</a>
          </ul>
          <ul>
            <a href="#">About</a>
          </ul>
          <ul>
            <a href="#">Services</a>
          </ul>
          <ul>
            <a href="#">Blog> </a>
          </ul>
          <ul>
            <a href="#">Pages> </a>
          </ul>
          <ul>
            <a href="#"></a>
          </ul>
        </li>
        <div class="flex items-center gap-4">
          <fa class="text-white" icon="search"></fa>
          <button class="py-3 px-6 bg-mainGreen text-white rounded-md">Get a Quote</button>
        </div>
      </nav>
    </div>
    <!-- main-header -->
    <div class="self-center layout">
      <div class="flex flex-col items-start gap-4">
        <h3 class="text-white text-[50px]">
          Grow Big with <br />
          Musicol Business
        </h3>
        <p class="text-[#d5d5d5] text-[20px]">
          Nam libero tempore, cum soluta nobis est eligendi optio <br />
          cumque nihil impedit quo minus.
        </p>
        <div class="flex items-center gap-4 text-white text-[14px]">
          <a href="#" class="py-3 px-6 bg-mainGreen rounded-md">Our Services</a>
          <a
            href="#"
            class="py-3 rounded-md border border-white px-6 flex items-center gap-2 hover:bg-mainGreen hover:border-transparent transition-all"
          >
            <fa icon="play"></fa> See How it Work</a
          >
        </div>
      </div>
    </div>
    <!-- side image -->
    <button
      class="justify-self-start text-3xl text-white border border-[#787878] rounded-full self-center grid place-items-center w-[50px] h-[50px] ml-[10%] hover:bg-mainGreen transition-colors"
      v-html="'<'"
    ></button>
    <button
      class="justify-self-end text-3xl text-white border border-[#787878] rounded-full self-center grid place-items-center w-[50px] h-[50px] mr-[10%] hover:bg-mainGreen transition-colors"
      v-html="'>'"
    ></button>
    <span class="bg-[#2C2C2C]/60 z-[-1]"></span>
    <slidImage class="z-[-2]"></slidImage>
  </div>
</template>

<script>
import slidImage from './component/slid-img.vue'
export default {
  name: 'app',
  components: {
    slidImage
  }
}
</script>

<style lang="scss">
.header {
  grid-template-columns: 1fr 60% 1fr;
  & > * {
    grid-column: 2 / 3;
  }
}
.layout {
  grid-column: 1 / -1 !important;
  display: grid;
  grid-template-columns: 1fr 60% 1fr;
  & > * {
    grid-column: 2 / 3;
  }
}

.header-site {
  & > * {
    grid-column: 1 /-1 !important;
    grid-row: 1/ 2 !important;
  }
}
</style>
