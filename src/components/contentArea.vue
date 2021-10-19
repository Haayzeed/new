<template>
    <section class="view">
        <div class="view__wrapper">
          <div class="view__header">
            <div class="view__controls">
              <button class="btn btn--view btn--celcius">℃</button>
              <button class="btn btn--view btn--farenheit">℉</button>
            </div>
          </div>
          <div class="view__main">
            <div class="view__container view__container--sm">
              <div class="card card--sm">
                <h1 class="card__header card__header--sm">Tomorrow</h1>
                <div class="card__image-box">
                  <img
                    src="@/assets/images/LightRain.png"
                    alt="card"
                    class="card__image card__image--sm"
                  />
                </div>
                <div class="card__details card__details--sm">
                  <p class="card__temperature">
                    <span class="card__temperature--left"> 16°C </span>
                    <span class="card__temperature--right"> 11°C </span>
                  </p>
                </div>
              </div>
              <div class="card card--sm">
                <h1 class="card__header card__header--sm">Sun, 7 Jun</h1>
                <div class="card__image-box">
                  <img
                    src="@/assets/images/Snow.png"
                    alt="card"
                    class="card__image card__image--sm"
                  />
                </div>
                <div class="card__details card__details--sm">
                  <p class="card__temperature">
                    <span class="card__temperature--left"> 16°C </span>
                    <span class="card__temperature--right"> 11°C </span>
                  </p>
                </div>
              </div>
              <div class="card card--sm">
                <h1 class="card__header card__header--sm">Mon, 8 Jun</h1>
                <div class="card__image-box">
                  <img
                    src="@/assets/images/HeavyRain.png"
                    alt="card"
                    class="card__image card__image--sm"
                  />
                </div>
                <div class="card__details card__details--sm">
                  <p class="card__temperature">
                    <span class="card__temperature--left"> 16°C </span>
                    <span class="card__temperature--right"> 11°C </span>
                  </p>
                </div>
              </div>
              <div class="card card--sm">
                <h1 class="card__header card__header--sm">Tue, 9 Jun</h1>
                <div class="card__image-box">
                  <img
                    src="@/assets/images/Shower.png"
                    alt="card"
                    class="card__image card__image--sm"
                  />
                </div>
                <div class="card__details card__details--sm">
                  <p class="card__temperature">
                    <span class="card__temperature--left"> 16°C </span>
                    <span class="card__temperature--right"> 11°C </span>
                  </p>
                </div>
              </div>
              <div class="card card--sm">
                <h1 class="card__header card__header--sm">Wed, 10 Jun</h1>
                <div class="card__image-box">
                  <img
                    src="@/assets/images/Snow.png"
                    alt="card"
                    class="card__image card__image--sm"
                  />
                </div>
                <div class="card__details card__details--sm">
                  <p class="card__temperature">
                    <span class="card__temperature--left"> 16°C </span>
                    <span class="card__temperature--right"> 11°C </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="view__highlight">
              <h1 class="view__title">Today’s Hightlights</h1>
              <div class="view__container view__container--lg">
                <div class="card card--lg">
                  <h1 class="card__header card__header--sm">Wind status</h1>
                  <h1 class="card__header card__header--lg">
                    <span class="card__header--number"> 7 </span>
                    <span class="card__header--unit"> mph </span>
                  </h1>
                  <div class="card__info">
                    <span class="card__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span class="card__text"> WSW </span>
                  </div>
                </div>
                <div class="card card--lg">
                  <h1 class="card__header card__header--sm">Humidity</h1>
                  <h1 class="card__header card__header--lg">
                    <span class="card__header--number"> 84 </span>
                    <span class="card__header--unit"> % </span>
                  </h1>
                  <div class="progress">
                    <div class="progress__bars">
                      <p class="progress__bar">0</p>
                      <p class="progress__bar">50</p>
                      <p class="progress__bar">100</p>
                    </div>
                    <progress
                      class="progress__input"
                      value="80"
                      max="100"
                    ></progress>
                    <div class="progress__unit">
                      <span class="progress__value"> % </span>
                    </div>
                  </div>
                </div>
                <div class="card card--lg">
                  <h1 class="card__header card__header--sm">Visibility</h1>
                  <h1 class="card__header card__header--lg">
                    <span class="card__header--number u-mr-sm"> 6,4 </span>
                    <span class="card__header--unit"> miles </span>
                  </h1>
                </div>
                <div class="card card--lg">
                  <h1 class="card__header card__header--sm">Air Pressure</h1>
                  <h1 class="card__header card__header--lg">
                    <span class="card__header--number u-mr-sm"> 998 </span>
                    <span class="card__header--unit"> mb</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<style lang="scss">
@import "@/assets/scss/layout/_view.scss";
@import "@/assets/scss/components/_button.scss";
@import "@/assets/scss/components/_card.scss";
@import "@/assets/scss/components/_progress.scss";
</style>