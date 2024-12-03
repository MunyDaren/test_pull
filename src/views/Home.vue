<template>
  <div>
    <Navbar />
 
    <HeroSection/>
  </div>
</template>
<script>
import HeroSection from "./HeroSection.vue";
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
    HeroSection,
  },

  setup() {
    return {};
  },
};
</script>
