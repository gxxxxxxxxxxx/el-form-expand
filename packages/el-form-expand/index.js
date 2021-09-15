export default {
  props: {
    btns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      column: 4,
      labelWidth: '25%',
      isExpand: false,
      uniKey: ''
    }
  },
  created() {
    this.uniKey = String(new Date().getTime())
    window.addEventListener('resize', this.debounce(this.handleChangeColumns, 200))
  },
  destroyed() {
    window.removeEventListener('resize', this.debounce(this.handleChangeColumns, 200))
  },
  methods: {
    debounce(fn, time) {
      let that = null
      return () => {
        clearTimeout(that)
        that = setTimeout(() => {
          fn()
        }, time)
      }
    },
    handleChangeColumns() {
      if (document.body.offsetWidth < 1220) {
        this.column = 2
        this.labelWidth = '50%'
      } else if (document.body.offsetWidth < 1550) {
        this.column = 3
        this.labelWidth = '33%'
      } else {
        this.column = 4
        this.labelWidth = '25%'
      }
    },
    getRef() {
      return this.$refs[this.uniKey]
    }
  },
  render(h) {
    const defaultSlots = this.$slots.default.map(item => <div style={{ width: this.labelWidth, transition: 'all 0.2s' }}>{item}</div>)

    const expandIconStyle = {
      marginLeft: '5px',
      transition: 'all 0.3s ease 0s',
      transform: this.isExpand ? 'rotate(0.5turn)' : 'rotate(0turn)'
    }

    const systemBtn = (
      <div
        style={{
          fontSize: '14px',
          cursor: 'pointer',
          userSelect: 'none',
          color: '#1890ff'
        }}
        onClick={() => {
          this.isExpand = !this.isExpand
          this.$emit('expandChange', this.isExpand)
        }}
      >
        {' '}
        {this.isExpand ? '收起' : '展开'}
        <i style={expandIconStyle} class="el-icon-arrow-down"></i>
      </div>
    )

    const renderBtnList = this.btns.slice(0).map(item =>
      item instanceof h('span', '').constructor ? (
        item
      ) : typeof item.render === 'function' ? (
        item.render()
      ) : (
        <el-button type={item.type || 'primary'} icon={`el-icon-${item.icon}`} onClick={item.click}>
          {item.name}
        </el-button>
      )
    )

    const renderCustomBtns = (h, btns) => {
      const btnsStyle = {
        display: 'flex',
        flexDirection: 'row-reverse'
      }

      const btnStyle = {
        marginLeft: '10px'
      }
      return (
        <div style={{ flex: 1 }}>
          <el-form-item label-width={'0'}>
            <div style={btnsStyle}>
              {btns.map(btn => (
                <div style={btnStyle}>{btn}</div>
              ))}
            </div>
          </el-form-item>
        </div>
      )
    }

    renderBtnList.reverse()
    if (defaultSlots.length - this.column >= 0) {
      renderBtnList.unshift(systemBtn)
    }
    defaultSlots.push(renderCustomBtns(h, renderBtnList))
    if (!this.isExpand) defaultSlots.slice(this.column - 1, defaultSlots.length - 1).forEach(item => (item.data.style = { ...item.data.style, display: 'none' }))

    return h(
      'el-form',
      {
        props: {
          'label-width': '120px',
          ...this.$attrs,

          inline: false
        },
        ref: this.uniKey
      },
      [
        h(
          'div',
          {
            style: { display: 'flex', flexWrap: 'wrap' }
          },
          defaultSlots
        )
      ]
    )
  }
}
