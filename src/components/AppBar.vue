<template>
  <v-app-bar absolute style="background: black" elevate-on-scroll>
    <v-toolbar-title style="color: white">felipends</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn color="white" outlined @click="cb_lang">LANG: {{ lang }}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    //
  }),
  props: {
    cb_lang: Function,
    lang: String
  }
};
</script>
