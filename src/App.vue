<template>
  <v-content>
    <Home/>
  </v-content>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
