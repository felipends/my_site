<template>
  <v-app>
    <v-app-bar absolute style="background: black" elevate-on-scroll>
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
          <span style="color: white; font-size: 30px; text-align: center;">{{
            textHeading
          }}</span>
        </v-row>
      </v-container>
      <v-container justify="center" align="center" class="prof">
        <v-row justify="center" align="center" max-height="80px" width="100%">
          <v-col
            justify="center"
            align="center"
            v-for="(t, index) in cards_text"
            :key="index"
            cols="12"
            sm="4"
            xs="12"
            style="height: 150px; width: 300px;"
            class="box-info"
          >
            <div class="front">
              <span style="padding: 10px; color: white; text-align: center;">{{
                t
              }}</span>
              <hr style="height: 1px; width: 60%; color: white;" />
            </div>
            <div class="back" style="word-wrap: break-word;">
              <p style="color: white; whidth: 40%; text-align: center;">
                {{ back_text[index] }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container style="width: 300px;">
        <v-row justify="center" align="center" style="height: 100px;">
          <a
            href="https://github.com/felipends"
            style="text-decoration: none;"
            class="social"
          >
            <v-icon
              style="color: white;"
              v-text="'$github'"
              class="mx-5"
            ></v-icon>
          </a>
          <a
            href="https://instagram.com/felipends"
            style="text-decoration: none;"
            class="social"
          >
            <v-icon
              style="color: white;"
              v-text="'$instagram'"
              class="mx-5"
            ></v-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-nunes-b2a9761a2/"
            style="text-decoration: none;"
            class="social"
          >
            <v-icon
              style="color: white;"
              v-text="'$linkedin'"
              class="mx-5"
            ></v-icon>
          </a>
        </v-row>
        <v-row justify="center" align="center">
          <span style="color: grey">felipends - 2020</span>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TextObjects from "../services/textObject.js";
export default {
  data() {
    return {
      lang: "PT",
      textHeading: "",
      cards_text: [],
      back_text: [],
      textObject: null
    };
  },
  methods: {
    langChange: function() {
      this.lang = this.lang === "EN" ? "PT" : "EN";
    }
  },
  created: function() {
    const userLang = navigator.language || navigator.userLanguage;

    this.lang = userLang === "pt-BR" ? "PT" : "EN";
  },
  watch: {
    lang: function(val) {
      this.textObject = val === "EN" ? TextObjects.en : TextObjects.pt;

      this.textHeading = this.textObject["heading"];
      this.cards_text = this.textObject["boxf"];
      this.back_text = this.textObject["boxb"];
    }
  }
};
</script>

<style>
.prof {
  max-height: 500px;
  width: 100%;
}

.front,
.back {
  width: 300px;
  height: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify: center;
  transition: transform 1s;
  backface-visibility: hidden;
}

.front {
}

.back {
  transform: rotateY(180deg);
}

.box-info {
  display: flex;
  justify-content: center;
}
.box-info:hover .front,
.box-info:focus .front,
.box-info:active .front {
  transform: rotateY(180deg);
}
.box-info:active .back,
.box-info:focus .back,
.box-info:hover .back {
  transform: rotateY(360deg);
}

.social:hover {
  transform: translateY(-5px);
  transition-duration: 300ms;
}
</style>
