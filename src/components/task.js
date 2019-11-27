export const createTaskTemplate = () => {
  return (
    `<article class="card card--black">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit"></button>
            <button type="button" class="card__btn card__btn--archive"></button>
            <button type="button" class="card__btn card__btn--favorites card__btn--disabled"></button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text"></p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date"></span>
                    <span class="card__time"></span>
                  </p>
                </div>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  <span class="card__hashtag-inner">
                    <span class="card__hashtag-name"></span>
                  </span>

                  <span class="card__hashtag-inner">
                    <span class="card__hashtag-name"></span>
                  </span>

                  <span class="card__hashtag-inner">
                    <span class="card__hashtag-name"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};
