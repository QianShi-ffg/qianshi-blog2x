<template>
  <currencyBanner :title="'更新日志'"/>
  <div id="log">
    <ul class="timeline">
      <!-- Item 1 -->
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">blog2.0最终版</span>
            <span class="time-wrapper"><span class="time">2023-06-01</span></span>
          </div>
          <div class="desc">
            blog2.0功能不再更新,依赖不定时更新<br>
            博客已开源,持续维护......<br>
          </div>
        </div>
      </li>
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">新增友链刷新截屏</span>
            <span class="time-wrapper"><span class="time">2023-01-10</span></span>
          </div>
          <div class="desc">
            新增友链单独刷新重新加载截屏的功能
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">新增loading,配置主题</span>
            <span class="time-wrapper"><span class="time">2022-12-21</span></span>
          </div>
          <div class="desc">
            1.添加页面跳转时的loading效果,缓冲页面跳转时的视觉效果<br/>
            2.菜单新增主题切换按钮,新增切换主题功能<br/>
            3.首页文字聚光灯效果
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">新增实况天气组件</span>
            <span class="time-wrapper"><span class="time">2022-12-20</span></span>
          </div>
          <div class="desc">
            在首页与文章详情中添加实况天气组件,显示访问者当地的天气状况<br/>
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">更新友链页面</span>
            <span class="time-wrapper"><span class="time">2022-11-17</span></span>
          </div>
          <div class="desc">
            将友链模块中iframe展示修改为缩略图展示<br/>
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">更新友链页面</span>
            <span class="time-wrapper"><span class="time">2022-11-16</span></span>
          </div>
          <div class="desc">
            重构友链展示模块,添加缩略展示<br/>
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">优化代码块显示</span>
            <span class="time-wrapper"><span class="time">2022-11-02</span></span>
          </div>
          <div class="desc">
            1. 配置代码块主题显示<br/>
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">修复缺陷</span>
            <span class="time-wrapper"><span class="time">2022-10-26</span></span>
          </div>
          <div class="desc">
            1. 修复友链页面布局<br/>
            2. 修复无h标签时文章详情显示空白菜单<br/>
            3. 修复由文章详情跳转首页后滚动位置不正确<br/>
            4. 修复分页滚动位置<br/>
            5. 将打开文章方式切换为打开新标签
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">优化首页</span>
            <span class="time-wrapper"><span class="time">2022-09-28</span></span>
          </div>
          <div class="desc">
            优化首页header, 以及artList样式
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">新增分页</span>
            <span class="time-wrapper"><span class="time">2022-09-25</span></span>
          </div>
          <div class="desc">
            新增首页文章分页处理
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">更新https</span>
            <span class="time-wrapper"><span class="time">2022-09-24</span></span>
          </div>
          <div class="desc">
            将http变更为https进行访问
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">更新首页</span>
            <span class="time-wrapper"><span class="time">2022-09-23</span></span>
          </div>
          <div class="desc">
            1.新增右侧信息模块<br/>
            2.新增返回顶部控件
          </div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">修复友链页面</span>
            <span class="time-wrapper"><span class="time">2022-09-23</span></span>
          </div>
          <div class="desc">
            1.修复由于布局改动导致页面错乱的友链页面,新增多个友链<br/>
            2.新增banner字体加载效果
          </div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">新增时间轴</span>
            <span class="time-wrapper"><span class="time">2022-09-22</span></span>
          </div>
          <div class="desc">新增时间轴菜单,配置响应式,展示博客更新内容以及历史更新</div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">配置封面</span>
            <span class="time-wrapper"><span class="time">2022-09-19</span></span>
          </div>
          <div class="desc">配置文章封面展示,以及分类的展示</div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">首页响应式更新</span>
            <span class="time-wrapper"><span class="time">2022-09-17</span></span>
          </div>
          <div class="desc">更改首页文章列表布局,适配三端样式</div>
        </div>
      </li>

      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">新增文章目录</span>
            <span class="time-wrapper"><span class="time">2022-09-12</span></span>
          </div>
          <div class="desc">文章详情新增右侧目录,仅pc端展示,制作跟随效果以及跳转动画</div>
        </div>
      </li>

      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">新增响应式</span>
            <span class="time-wrapper"><span class="time">2022-09-05</span></span>
          </div>
          <div class="desc">为博客适配三端设备,修改首页布局</div>
        </div>
      </li>

      <!-- Item 2 -->
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">添加首页banner</span>
            <span class="time-wrapper"><span class="time">2022-09-02</span></span>
          </div>
          <div class="desc">为首页添加banner,制作文字视差效果</div>
        </div>
      </li>

      <!-- Item 3 -->
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">博客上线</span>
            <span class="time-wrapper"><span class="time">2022-09-01</span></span>
          </div>
          <div class="desc">博客系统极简版正式上线(垃圾版本)</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '@/store';
import currencyBanner from '@/components/banner.vue'

const store = useStore()

onMounted(() => {
  store.setMyLoading(false)
})
</script>

<style lang="scss" scoped>
#log {
  margin: 0 auto;
  margin-bottom: 100px;
}
.hexa {
  border: 0px;
  float: left;
  text-align: center;
  height: 35px;
  width: 60px;
  font-size: 22px;
  background: #f0f0f0;
  color: #3c3c3c;
  position: relative;
  margin-top: 15px;
}

.hexa:before {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 15px solid #f0f0f0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: -15px;
}

.hexa:after {
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 15px solid #f0f0f0;
  bottom: -15px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213, 213, 213);
  background: -moz-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(30, 87, 153, 1)), color-stop(100%, rgba(125, 185, 232, 1)));
  background: -webkit-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
  background: -o-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
  background: -ms-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
  background: linear-gradient(to bottom, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
  z-index: 1;
}

.timeline li {
  padding: 2em 0;
}

.timeline .hexa {
  width: 16px;
  height: 10px;
  position: absolute;
  background: #e63735;
  z-index: 1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid #e63735;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid #e63735;
  bottom: -4px;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  text-align: center;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: var(--home-box-background-color);
  font-weight: 600;
  z-index: 2;
  padding: 6px 10px;
  text-align: left;
  border-radius: 5px;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -15px;
  height: 0;
  width: 0;
  margin-left: -8px;
  border: solid transparent;
  border-bottom-color: var(--home-box-background-color);
  border-width: 8px;
  pointer-events: none;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 0 0;
  z-index: 2;
  line-height: 1em;
  vertical-align: middle;
  color: #fff;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.time {
  background: #e63735;
  display: inline-block;
  padding: 8px;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  background: var(--home-box-background-color);
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
  z-index: 2;
  border-radius: 12px;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  z-index: 2;
  text-align: left;
}

@media screen and (min-width: 320px) {
  #log {
    padding-top: 80px;
    width: 100%;
  }
}

@media screen and (min-width: 800px) {
  #log {
    padding-top: 50px;
    width: 800px;

    .timeline {
      width: 660px;
      margin: 0 auto;
      margin-top: 20px;
    }

    .timeline li:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .timeline .hexa {
      left: -28px;
      right: auto;
      top: 8px;
    }

    .timeline .direction-l .hexa {
      left: auto;
      right: -28px;
    }

    .direction-l {
      position: relative;
      width: 310px;
      float: left;
      text-align: right;
    }

    .direction-r {
      position: relative;
      width: 310px;
      float: right;
      text-align: left;
    }

    .flag-wrapper {
      display: inline-block;
    }

    .flag {
      font-size: 18px;
    }

    .direction-l .flag:after {
      left: auto;
      right: -16px;
      top: 50%;
      margin-top: -8px;
      border: solid transparent;
      border-left-color: var(--home-box-background-color);
      border-width: 8px;
    }

    .direction-r .flag:after {
      top: 50%;
      margin-top: -8px;
      border: solid transparent;
      border-right-color: var(--home-box-background-color);
      border-width: 8px;
      left: -8px;
    }

    .time-wrapper {
      display: inline;
      vertical-align: middle;
      margin: 0;
    }

    .direction-l .time-wrapper {
      float: left;
    }

    .direction-r .time-wrapper {
      float: right;
    }

    .time {
      padding: 5px 10px;
    }

    .direction-r .desc {
      margin: 1em 0 0 0.75em;
    }
  }
}

@media screen and (min-width: 1280px) {
  #log {
    padding-top: 50px;
    width: 1200px;

    .timeline {
      width: 800px;
      margin: 0 auto;
      margin-top: 20px;
    }

    .direction-l {
      position: relative;
      width: 380px;
      float: left;
      text-align: right;
    }

    .direction-r {
      position: relative;
      width: 380px;
      float: right;
      text-align: left;
    }
  }
}
</style>