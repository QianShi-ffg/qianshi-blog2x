const publicUrl = import.meta.env.VITE_PUBLIC_URL
const demo: any = [
  {
    name: 'canvas像素点打散重聚',
    path: `${publicUrl}/canvas/index.html`
  },
  {
    name: '倒影效果',
    path: `${publicUrl}/invertedImage/index.html`
  },
  {
    name: '方向感应卡片',
    path: `${publicUrl}/orientation/index.html`
  },
  {
    name: '进度条',
    path: `${publicUrl}/progress/index.html`
  },
  {
    name: '流动的svg曲线',
    path: `${publicUrl}/dynamicCurve/index.html`
  },
  {
    name: 'canvas截屏',
    path: `${publicUrl}/canvas-screenshot/index.html`
  },
  {
    name: '鼠标运动视差效果',
    path: `${publicUrl}/mouseFollow/index.html`
  },
  {
    name: '3D旋转圆盘',
    path: `${publicUrl}/rotatingDisc/index.html`
  }
]


export default demo