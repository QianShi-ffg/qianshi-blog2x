<template>
  <div class='loader'>
    <div class='loader_overlay'></div>
    <div class='loader_cogs'>
      <div class='loader_cogs__top'>
        <div class='top_part'></div>
        <div class='top_part'></div>
        <div class='top_part'></div>
        <div class='top_hole'></div>
      </div>
      <div class='loader_cogs__left'>
        <div class='left_part'></div>
        <div class='left_part'></div>
        <div class='left_part'></div>
        <div class='left_hole'></div>
      </div>
      <div class='loader_cogs__bottom'>
        <div class='bottom_part'></div>
        <div class='bottom_part'></div>
        <div class='bottom_part'></div>
        <div class='bottom_hole'>
          <!-- lol -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
/* Fonts */

// @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

/* Variables */

$color1: #cc1616;
$color2: #ec6319;
$color3: #ffcf2f;

/* Mixins */

@mixin center {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

@mixin hole {
  border-radius: 100%;
  background: var(--imgLoading-hole-color);
  position: absolute;
}

// body {

p {
  margin: 0 auto;
}

.loader {
  width: 150px;
  height: 150px;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s;
  border-radius: 0;
  z-index: 2;
  &_overlay {
    width: 80px;
    height: 80px;
    background: transparent;
    box-shadow: var(--imgLoading-overlay-shadow);
    border-radius: 100%;
    z-index: -1;
    @include center;
  }

  &_cogs {
    z-index: -2;
    width: 50px;
    height: 50px;
    top: -60px !important;
    @include center;

    &__top {
      position: relative;
      width: 50px;
      height: 50px;
      transform-origin: 25px 25px;
      animation: rotate 10s infinite linear;

      @for $i from 1 through 3 {
        div:nth-of-type(#{$i}) {
          transform: rotate($i * 30deg)
        }
      }

      div.top_part {
        width: 50px;
        border-radius: 5px;
        position: absolute;
        height: 50px;
        background: $color1;
      }

      div.top_hole {
        width: 25px;
        height: 25px;
        @include hole;
        @include center;
      }
    }

    &__left {
      position: relative;
      width: 40px;
      transform: rotate(8deg);
      top: 12px;
      transform-origin: 20px 20px;
      animation: rotate_left 10s .1s infinite reverse linear;
      left: -20px;
      height: 40px;

      @for $i from 1 through 3 {
        div:nth-of-type(#{$i}) {
          transform: rotate($i * 30deg)
        }
      }

      div.left_part {
        width: 40px;
        border-radius: 3px;
        position: absolute;
        height: 40px;
        background: $color2;
      }

      div.left_hole {
        width: 20px;
        height: 20px;
        @include hole;
        @include center;
      }
    }

    &__bottom {
      position: relative;
      width: 30px;
      top: -28px;
      transform-origin: 15px 15px;
      animation: rotate_left 10.2s .4s infinite linear;
      transform: rotate(2deg);
      left: 35px;
      height: 30px;

      @for $i from 1 through 3 {
        div:nth-of-type(#{$i}) {
          transform: rotate($i * 30deg)
        }
      }

      div.bottom_part {
        width: 30px;
        border-radius: 2px;
        position: absolute;
        height: 30px;
        background: $color3;
      }

      div.bottom_hole {
        width: 15px;
        height: 15px;
        @include hole;
        @include center;
      }
    }
  }
}

// }

/* Animations */

@keyframes rotate {
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
}

@keyframes rotate_left {
  from {
    transform: rotate(8deg)
  }

  to {
    transform: rotate(368deg)
  }
}

@keyframes rotate_right {
  from {
    transform: rotate(2deg)
  }

  to {
    transform: rotate(362deg)
  }
}
</style>