<template>
  <div class="banner">
    <!-- <img :src="coverUrl" alt=""> -->
    <div
      class="inner"
      :style="{ background: `url(${coverUrl}) no-repeat 0 40%` }"
    ></div>
    <div class="title">{{ title }}</div>
  </div>
  <div id="artDetail">
    <!-- <div class="banner" v-show="isBannerShow"> -->
    <MdPreview
      :editorId="id"
      :modelValue="text"
      @onGetCatalog="onGetCatalog"
      :mdHeadingId="mdHeadingId"
    />
    <!-- <md-editor v-model="text" previewOnly show-code-row-number :marked-heading-id="generateId" @onGetCatalog="onGetCatalog" code-theme="dracula"/> -->
    <div id="catalogue" :class="catalogueStyle">
      <ul class="rounded-xl" v-if="catalogList.length !== 0">
        <li
          v-for="(item, i) in catalogList"
          :key="i"
          :class="activeIndex === i ? 'active-li' : ''"
        >
          <a
            :href="`#${item.text}`"
            :data-level="item.level"
            :title="item.text"
            >{{ item.text }}</a
          >
        </li>
      </ul>
      <cityWeather />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { MdPreview, config } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import { getArticleDetail } from "@/api/api";
import { useStore } from "@/store/index";
import { useRoute } from "vue-router";
import navScroll from "@/hooks/navScroll";
import cityWeather from "@/components/cityWeather.vue";
import ancher from "markdown-it-anchor";

const id = "preview-only";

config({
  editorExtensions: {
    highlight: {
      css: {
        dracula: {
          light:
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/snazzy.min.css",
          dark: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/snazzy.min.css",
        },
      },
    },
  },
});
const store = useStore();
const route = useRoute();
const text = ref<any>("");
const title = ref<any>("");
const coverUrl = ref<any>("");
const catalogList = ref<any>([]);
const catalogueStyle = ref<String>("catalogueAbsolute");
const { activeIndex, toScrollTop } = navScroll();
// 获取文章详情
const articleList = async () => {
  // store.setMyLoading(true)
  const res: any = await getArticleDetail(route.query);
  console.log(res);
  text.value = res.articleContent;
  title.value = res.title;
  coverUrl.value = res.coverUrl
    ? res.coverUrl
    : "http://blog.xingyijun.cn/assets/111-92b95fe0.jpg";
  store.setMyLoading(false);
};
articleList();
const hScroll = computed(() => {
  return store.scroll;
});

// 菜单定位模式
watch(hScroll, (newVal) => {
  if (newVal > 350) {
    catalogueStyle.value = "catalogueFixed";
  } else {
    catalogueStyle.value = "catalogueAbsolute";
  }
});
// v3去除 h标签内a标签
const mdHeadingId = (_text: any, _level: any, index: any) => {
  console.log(_text, _level, index);
  return `heading-${index}`;
};

onMounted(() => {
  const aa = setTimeout(async () => {
    await getHTag();
    clearTimeout(aa);
  }, 300);
  // })
});
const getHTag = () => {
  const hList: any = document.querySelectorAll("h1,h2,h3,h4,h5");
  console.log(hList, "hListhListhListhListhList");
  for (const h of hList) {
    const slug = h.getAttribute("id");
    h.setAttribute("id", slug);
    h.innerHTML = `${h.innerHTML}<a name="${h.innerHTML}" style="position: relative; top: -180px;" class="darkAnchor"></a>`;
  }
};
// });
// v3菜单
const onGetCatalog = (list: []) => {
  catalogList.value = list;
  console.log(catalogList.value, 699666);
};
</script>

<style lang="scss" scoped>
#artDetail {
  position: relative;
  margin: auto;
  #preview-only {
    text-align: left;
    padding: 20px;
    @apply rounded-xl;
    .md-preview {
      h1 {
        font-size: 34px;
        font-weight: 700;
        line-height: 1.1;
      }
    }
    h2 {
      font-size: 26px;
      font-weight: 700;
    }
  }
  .catalogueFixed {
    position: fixed;
    top: 100px;
    right: calc((100% - 1196px) / 2);
  }
  .catalogueAbsolute {
    position: absolute;
    top: 50px;
    right: calc((100% - 1200px) / 2);
  }
}
@media screen and (min-width: 320px) {
  .banner {
    display: none;
  }
  #artDetail {
    padding-top: 80px;
    width: 95%;
  }
}
@media screen and (min-width: 800px) {
  .banner {
    display: block;
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    .inner {
      width: 100%;
      height: 100%;
      filter: blur(100px) brightness(0.8) contrast(1.2);
      background-size: 100% 100% !important;
    }
    .title {
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 32px;
      color: #fff;
    }
  }
  #artDetail {
    padding-top: 50px;
    width: 800px;
  }
}
@media screen and (min-width: 1280px) {
  .banner {
    display: block;
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    .inner {
      width: 120%;
      height: 120%;
      transform: translate(-10%, -10%);
      filter: blur(100px) brightness(0.8) contrast(1.2);
      background-size: 100% 150% !important;
    }
    .title {
      position: absolute;
      top: 40%;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 32px;
      color: #fff;
    }
  }
  #artDetail {
    padding-top: 50px;
    width: 1200px;
  }
}
</style>
