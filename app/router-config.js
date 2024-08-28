import { CarsController } from "./controllers/CarsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomesController } from "./controllers/HomesController.js";
import { MainController } from "./controllers/MainController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [MainController],
    view: 'app/views/MainView.html'
  },
  {
    path: '#/about',
    controllers: [ExamplesController],
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: `#/homes`,
    controllers: [HomesController],
    view: 'app/views/HomesView'
  }
])