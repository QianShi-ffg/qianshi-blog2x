import { ref, onMounted } from 'vue'

export default function() {
  // 当前滚动高度
  const currentScroll:any = ref(0)
  // 激活的锚点
  const activeIndex = ref(0)
  // 当前滚动的dom
  const scrollDom:any = ref(null)
  onMounted(() => {
    window.addEventListener('scroll', onScroll, true)
  })
  const onScroll = (e:any) => {
    if (e.target.id !== 'home') {
      return
    }
    // 根据结构获取当前滚动dom,进行赋值 不一定是e.target.children[0] 可能是e.target 或者其他,看页面结构
    currentScroll.value = e.target.scrollTop
    // 锚点list
    const darkAnchorList = document.querySelectorAll('.darkAnchor')
    const offsetTopArr:any = []
    darkAnchorList.forEach((item:any) => {
      offsetTopArr.push(item.offsetTop)
    })
    for (let i = 0; i < offsetTopArr.length; i++) {
      if (currentScroll.value >= offsetTopArr[i] + 100) {
        activeIndex.value = i
      }
    }
  }
  // 回到顶端
  const toScrollTop = () => {
    scrollDom.value.scrollTop = 0
  }
  return {
    currentScroll,
    activeIndex,
    toScrollTop
  }
}
