<template>
    <section class="sidebar">
        <div class="menu menu--hidden">
          <div class="menu__header">
            <span class="menu__close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                  />
                </g>
              </svg>
            </span>
          </div>
          <form action="#" class="form">
            <div class="form__group">
              <div class="form__container">
                <span class="form__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type="text"
                  class="form__input"
                  placeholder="search location"
                />
              </div>
              <button type="submit" class="btn btn--form btn--blue">
                Search
              </button>
            </div>
          </form>
          <ul class="menu__list">
            <li class="menu__item">
              <span class="menu__text" data-location="London"> London </span>
              <span class="menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                  </g>
                </svg>
              </span>
            </li>
            <li class="menu__item">
              <span class="menu__text" data-location="Barcelona">
                Barcelona
              </span>
              <span class="menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                  </g>
                </svg>
              </span>
            </li>
            <li class="menu__item">
              <span class="menu__text" data-location="Long Beach">
                Long Beach
              </span>
              <span class="menu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                  </g>
                </svg>
              </span>
            </li>
          </ul>
        </div>
        <div class="sidebar__header">
          <div class="sidebar__btn">
            <button class="btn btn--grey btn--menu-toggle">
              Search for places
            </button>
          </div>
          <div class="sidebar__geolocator">
            <span class="sidebar__geolocator-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 16l3 6H9l3-6zm-2.627.255a5 5 0 1 1 5.255 0l-1.356-2.711a2 2 0 1 0-2.544 0l-1.355 2.71zm-2.241 4.482A9.997 9.997 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.997 9.997 0 0 1-5.132 8.737l-1.343-2.688a7 7 0 1 0-7.05 0l-1.343 2.688z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div class="sidebar__main">
          <img
            src="@/assets/images/Cloud-background.png"
            alt="clouds"
            class="sidebar__overlay"
          />
          <div class="weather-info">
            <div class="weather-info__image-box">
              <img
                src="@/assets/images/Shower.png"
                alt="cloud"
                class="weather-info__image"
              />
            </div>
            <h1 class="weather-info__heading">
              <span class="weather-info__heading--main"> 15 </span>
              <span class="weather-info__heading--sub">℃</span>
            </h1>
            <p class="weather-info__description">Shower</p>
            <div class="weather-info__date">
              <span class="weather-info__current-time">Today</span>
              <span class="waether-info__divider"> . </span>
              <span class="weather-info__time"> Fri, 5 Jun </span>
            </div>
            <div class="weather-info__location">
              <span class="weather-info__location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </g>
                </svg>
              </span>
              <span class="weather-info__location-text"> Helsinki </span>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {

        }
    },

    methods: {

    },

    created() {
        axios.get('http://localhost:8080/api/location/search/?query=london').then(response => {
            console.log(response.data[0].woeid)
        })
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/components/_menu.scss";
@import "@/assets/scss/layout/_sidebar.scss";
@import "@/assets/scss/layout/_grid.scss";
@import "@/assets/scss/components/_form.scss";
</style>