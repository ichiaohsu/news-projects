<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 112" class="progress-icon">
    <g style="isolation: isolate;">
      <g>
        <image class="progress-icon__shadow" width="113" height="112"
          xlink:href="data:image/png;base64,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"
        />
        <path fill="#fff" d="M55.8,5c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S83.4,5,55.8,5z M55.8,87.5 c-17.9,0-32.5-14.6-32.5-32.5s14.6-32.5,32.5-32.5S88.3,37.1,88.3,55S73.8,87.5,55.8,87.5z" />
        <image class="progress-icon__shadow" width="53" height="48" transform="translate(30 37)"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAwCAYAAACxKzLDAAAACXBIWXMAAAsSAAALEgHS3X78AAAFaklEQVRoQ9WZV6gdVRSGl8lNokmMCka9MTEaFAVbULHFgorYfbAhUewNVFQU64N5UOyCWBFLQJ8siAXEgmBiA1HBjjVKFI0FC8YUk+v/nbXHM3Nmzp0zZ/bcew18EJI9Z/a/17/+PXvGhoaGrAj9WWes03XuXcSMC4wXA2MQ5pXMMSeuqDJcMEFMEuuJyWKKmDoGmBJgXsyPeTLfTOU6RTFgYrhwQzFdDIrNxUwxaxTh/syD+WwiNjIXiriWsIwoa1tuYhjIRVuJ7cWuYk+xt5gn9hkF5gX2EruJHcUcsZmYZh3C0qLwKmXdWGwtdheHihPEqeIscY44V5w3wnDPs8XpYr440nyRtxObmjuL+WdEUSX8SZVmiLniMHGmuErcKO4Qd4t7R4F7xJ3iNrFAXCCOEXuI2WIDc5eNKxK1vrl/qdLx4nJxl3hMPC9eEYvE4hHmVfGyeEYsFNebL/iBYhvz/sKCrTRM2y+pFM1IHx0nrhYPiZfEe+Iz8bX4Rnw7QnCvL8XH4k3xlLjd3JKIolX+E9XZUzQaPUXiERCHi4vFfeaiPhLfiV/E7+LPEeAP8Zv4yXwx3xZPihvEKeZ9hf0IC4qSE0Xp8CX+3DJcQEDQT6wOlUIUgv4Wq8TqhlkplpsvJNXCig+LK8TRYifzoGAvzQZFRwIygEinWkeIS8UD5r7+ItwAUf+INWJtQ/DbCPtL/Cg+EM+KW8QZ5lHPtsN+2goJ6yIqqRbl3MJ8fzpZXCeeEO+YVwtrrAo3HmoIfptK4Ywl4nXzkCC8jhI7mC9+pkoZUQW9xX7FPnCwON88BV8Un4qfrV2ttTb85PqB30yq9IN43zz5bjJviXQvZaqUE9Vlz9pFHCuuEY+aJxCJxAo2Ua3EeivEr+a9hPVpAVqBlqA1CDQWnyJkHmqLRCU2JCKJyjliP/N94VbxnPhQLDNv4tjVQhCLhcWxOpbH+rTASeYtQWtkEm9YUQWhQbrwrIWP8fNCc38vMa/WSotXLRaHRcLaxPgn5pbH+rQArbCteWusawVVKhOVDo3Z1o54fI2/8Tl+x/erLU610uGAxbH6I+bWpwVoBVqC1iisUldRKWGdG3JnxON3fL/C2vFeNvFupMOhKML3NW+FzCNRJVFBWBIa6YjH17EjvigcFokHxWXmT+VdI7yqqKRa+Bcf4+cmIn64cGCfTIdDLsIrieqoVlMRnw4HFodF6gwH9ksWtTDC+xHVdMQnVUqHA4tVKRwqiUoJayLikyqxGCwKi8MisVgsGovXUzj0K6qJiC97vmPxck/hZZQO6BAWM+JrPd9FERWExYr42s93MUXFivjaz3fRRAVhdSO+lwgvfb6LLapuxEeP8NqiUsKqRnxyTI8e4TFFVY34NdZQhEcRlRJWJeIRhu2iR3g0UUFYLxG/1Pz9HcKWWwMRHltULxHP6XWZtV9MLrXIER5VVBA2XMRzan1DfGV+8Pve/PXxCxYxwpsQVRTxnFI5rXJqfVq8Kz43r9pi6+OIXoXSAb1g2YjndMopldMq/XK/eWXeEq+Zvwu/OYiOEuG5+ZQN6AXLR3wSGvPFteZfTngf/7i57S6x9hG9doTn5lM2oFcsG/FJaBxkvqkuMP9oxyeYK8WJQXSUCM/NpWxAFSwbGnxw5qvEIeI0cZG40DztDrB2ONSO8Nw8ygZUwbKhwSehWWLnIIInBiy3v/meNGgRwyEzj7IBVbHs3sVnlpnmL07mBoFUaEYQPSl2lVpzKBtQlVS1BoIwemZ6EDIY/j4t/F+0cMjMoWxAP3QIIwRIt6mByeHfxlvEcMjcv2xAvwRhaXETAgOJmCYEte5dNqAuKXEZyq6rQ+mA/yP/AlnE/ccwladqAAAAAElFTkSuQmCC"
        />
        <polygon fill="#fff" points="55.8,77.4 35.8,42.6 75.9,42.6" />
      </g>
      <circle cx="55.8" cy="55.2" r="41.2"
              transform="rotate(-90, 55.8, 55.2)" 
              stroke-dasharray="258.87" :stroke-dashoffset="offset"
      />
      <g>
        <rect x="54" y="5" width="2" height="18" />
        <rect x="28" y="15" width="2" height="18" transform="translate(-8.64 24.26) rotate(-40)" />
        <rect x="14" y="38" width="2" height="18" transform="translate(-33.89 53.61) rotate(-80)" />
        <rect x="19" y="66" width="2" height="18" transform="translate(-34.95 129.82) rotate(-120)" />
        <rect x="40" y="85" width="2" height="18" transform="translate(47.38 196.35) rotate(-160)" />
        <rect x="70" y="85" width="2" height="18" transform="translate(169.87 158.05) rotate(160)" />
        <rect x="91" y="66" width="2" height="18" transform="translate(202.95 32.83) rotate(120)" />
        <rect x="95" y="38" width="2" height="18" transform="translate(125.62 -55.7) rotate(80)" />
        <rect x="81" y="15" width="2" height="18" transform="translate(34.61 -47.09) rotate(40)" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'ProgressIcon',
  props: ['length'],
  computed: {
    offset () {
      return 258.87 - this.length
    }
  }
}
</script>

<style lang="stylus">
@import '../util/global-var.styl'

.progress-icon
  width 50px
  height 49.55px
  position fixed
  right 12px
  bottom 12px
  cursor: pointer
  z-index 999
  &:active polygon
    fill #ffec2f
  & rect
    fill #4d4d4d
  & circle
    fill none
    stroke #ffec2f
    stroke-miterlimit 10
    stroke-width 18.31px
    transition: stroke-dashoffset 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)
  &__shadow
    opacity 0.45
    mix-blend-mode multiply
</style>