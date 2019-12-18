import BoardComponent from './components/board';
import BoardController from './controllers/board';
import FilterController from './controllers/filter';
import MenuComponent from './components/menu';
import TasksModel from './models/tasks';
import {generateTasks} from './mock/task';
import {render, RenderPosition} from './utils/render';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const menuComponent = new MenuComponent();

render(siteHeaderElement, menuComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);

boardController.render();
