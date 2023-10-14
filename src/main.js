import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Free icons styles */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTrashCan)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
