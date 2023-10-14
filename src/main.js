import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Free icons styles */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

import axios from 'axios'

import globalMethod from "@/common/globalMethod";

/* add icons to the library */
library.add(faUserSecret, faTrashCan)

const app = createApp(App);

app.config.globalProperties.axios = axios;
app.use(globalMethod)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
