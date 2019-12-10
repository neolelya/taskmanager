import AbstractComponent from './abstract-component';

const createBoardContainerTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class Board extends AbstractComponent {
  getTemplate() {
    return createBoardContainerTemplate();
  }
}
