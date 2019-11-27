export const createFilterTemplate = () => {
  return (
    `<section class="main__filter filter container">
      <input type="radio" id="filter__all" class="filter__input visually-hidden" name="filter" checked/>
      <label for="filter__all" class="filter__label"><span class="filter__all-count"></span></label>
        
      <input type="radio" id="filter__overdue" class="filter__input visually-hidden" name="filter" disabled/>
      <label for="filter__overdue" class="filter__label"><span class="filter__overdue-count"></span></label>
        
      <input type="radio" id="filter__today" class="filter__input visually-hidden" name="filter" disabled/>
      <label for="filter__today" class="filter__label"><span class="filter__today-count"></span></label>
        
      <input type="radio" id="filter__favorites" class="filter__input visually-hidden" name="filter"/>
      <label for="filter__favorites" class="filter__label"><span class="filter__favorites-count"></span></label>
        
      <input type="radio" id="filter__repeating" class="filter__input visually-hidden" name="filter"/>
      <label for="filter__repeating" class="filter__label"><span class="filter__repeating-count"></span></label>
        
      <input type="radio" id="filter__tags" class="filter__input visually-hidden" name="filter" />
      <label for="filter__tags" class="filter__label"><span class="filter__tags-count"></span></label>
        
      <input type="radio" id="filter__archive" class="filter__input visually-hidden" name="filter"/>
      <label for="filter__archive" class="filter__label"><span class="filter__archive-count"></span></label>
    </section>`
  );
};
