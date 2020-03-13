<template>
  <v-app>
    <v-app-bar
      absolute
      style="background: black"
      elevate-on-scroll
    >
      <v-toolbar-title style="color: white">felipends</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" outlined @click="langChange">LANG: {{ lang }}</v-btn>
    </v-app-bar>
    <v-content style="margin-top: 50px; background: black;" height="100vh">
      <v-container justify="center" class="prof">
        <v-row justify="center" align="center" max-height="500">
          <v-avatar class="my-5" size="200">
            <v-img style="color: white" src="../assets/perfil.jpg" />
          </v-avatar>
        </v-row>
        <v-row class="my-5" justify="center" align="center" max-height="500">
          <span style="color: white; font-size: 30px; text-align: center;"
            >Hi, my name is Felipe Nunes and i am</span
          >
        </v-row>
      </v-container>
      <v-container justify="center" class="prof">
        <v-row max-height="80px">
          <v-col
            justify="center"
            align="center"
            v-for="(t, index) in cards_text"
            :key="index"
            cols="12"
            sm="4"
            xs="12"
            height="40px"
          >
            <span style="color: white; text-align: center;">{{ t }}</span>
            <hr style="height: 1px; width: 45%; color: white;"/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      lang: "PT",
      cards_text: ["LEARNING", "CONTRIBUTING", "DEVELOPING"]
    };
  },
  methods: {
    langChange: function() {
      this.lang = this.lang === "EN" ? "PT" : "EN";
    }
  }
};
</script>

<style>
.prof {
  max-height: 500px;
  width: 100%;
}
</style>
