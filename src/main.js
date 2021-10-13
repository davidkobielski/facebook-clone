import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Tailwind css
import './assets/tailwind.css';

// FontAawesome configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTv, faSearch, faHome, faBars, faPlus, faBell, faCaretDown, faUsers, faCalendarDay, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesomeFlag, faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTv, faFacebook, faSearch, faHome, faFontAwesomeFlag, faBars, faPlus, faFacebookMessenger, faBell, faCaretDown, faUsers, faCalendarDay, faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
