import Vue from 'vue'

declare interface btn {
  type?: String
  icon?: String
  name?: String
  click?: () => void
  render?: () => Vue.VNode
}

declare class ElFormExpand extends Vue {
  btns: btn[]
}
