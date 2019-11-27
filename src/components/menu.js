export const createMenuTemplate = () => {
  return (
    `<section class="control__btn-wrap">
      <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden"/>
      <label for="control__new-task" class="control__label control__label--new-task"></label>
          
      <input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked/>
      <label for="control__task" class="control__label"></label>
        
      <input type="radio" name="control" id="control__statistic" class="control__input visually-hidden"/>
      <label for="control__statistic" class="control__label" ></label>
    </section>`
  );
};
