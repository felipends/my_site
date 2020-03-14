import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
    values: {
        github: 'fab fa-github',
        linkedin: 'fab fa-linkedin',
        instagram: 'fab fa-instagram-square',
      },
  }
});
