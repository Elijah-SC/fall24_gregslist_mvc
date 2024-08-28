import { router } from './router-config.js';
import { MainController } from './controllers/MainController.js';
const USE_ROUTER = true

class App {

  // NOTE today we will be registering controller in the router-config
  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
