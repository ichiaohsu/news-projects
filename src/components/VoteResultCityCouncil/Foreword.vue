<template>
  <section class="foreword">
    <h1>你全家都議長</h1>
    <h2>誰在議會當老大？</h2>
    <p>2018 年底的大事，隨著選舉新任縣市長就職，各縣市議會也蓄勢待發。議會開議之前，最重要的是要決定議會的「老大」。議長選舉出爐，READr 帶你來看看這些議長的家庭背景，以及各地方議會有哪些家族勢力。</p>
    <div class="credit">
      <img src="/proj-assets/vote2018-result-city-council/logo-mm.png" alt="mirrormedia">
      <p><span>文／資料整理 李又如</span><span>設計／許玲瑋</span><span>工程／譚學勇</span></p>
      <p>2019.01.21</p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProjectForeword'
}
</script>
<style lang="stylus" scoped>

.foreword
  display flex
  flex-direction column
  padding 80px 1em 20px
  text-align center
  > h1, > h2, > p
    margin 0
  > h1
    order 1
    color #e5004f
    font-size 2.75rem
  > h2
    order 2
    margin 16px 0 45px
    font-size 1.625rem
  > p
    order 3
    text-align justify
    line-height 1.67

.credit
  order 4
  font-size .875rem
  margin-top 30px
  > img
    width 30px
    height 30px
  > p
    margin 20px 0 0
    span
      & + span
        margin-left 1.5em

@media (min-width: 768px)
  .foreword
    width 60%
    max-width 750px
    padding 60px 0
    margin 0 auto
    > h1
      font-size 4.5rem
    > h2
      margin 35px 0 40px
      font-size 1.875rem
    > p
      order 4
      margin-top 55px
  .credit
    order 3
    margin 0

@media (min-width: 1200px)
  .foreword
    padding 60px 0 85px
</style>
