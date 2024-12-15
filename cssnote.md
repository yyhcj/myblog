# 陈俊的前端笔记
## 动画
### 一：图片，组件的渐入渐出
``` css
@keyframes fadein{
  from{
      opacity: 0;
      transform: scale(.0) translate(15vh);
  }
}
```
在需要渐入渐出的元素都给一个fadein类（有共同的类名就可以）
给他们加上这个动画
``` css
  overflow: hidden;
  animation: fadein both;
  animation-timeline: view();
  animation-range: contain -100% contain 50%;
```
### 二：卡片翻转效果
首先准备好两个元素，一个正面一个背面，side1和side2
两个元素放在类名为card的div里，card要设置一下视角
card要用相对定位，然后side1和side2用绝对定位，top和left都是0，
然后调整side1和side2的z-index为2和-2，高度宽度都是100%
然后将他们设置为背部不可见
```css
    backface-visibility: hidden;
```
side2要先翻转一下，确保翻过来的话是正的
再设置一下翻转动画，两个元素hover的时候，翻转
以下为整体代码
```html
  <div class="card" >
    <div class="side1"></div>
    <div class="side2"></div>
  </div>
```
```css
.card{
    position: relative;
    width: 15%;
    height: 60%;
    height: 60%;
    perspective: 500px;
    transition:2s;
    transform-origin: 5% 50%; 
}
/* side1是正面，side2是反面 */
.side1,.side2{
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: 2s;
    position: absolute;
    border-radius: 10%;

}
.side1{
    display: flex;
    font-size: 32px;
    align-items: center;
    justify-content: center;
    background-color: aquamarine;
    z-index: 2;
}
.side2{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
    z-index: -1;
    transform: rotateY(180deg);
}
```
  