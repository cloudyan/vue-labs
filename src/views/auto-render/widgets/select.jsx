
export default {
  props: {
    vname: String,
    schema: {
      type: Object,
      required: true,
    },
    formData: Object,
  },

  computed: {
    items() {
      const { schema } = this
      return (schema.enum || []).map((val, index) => {
        let item = {
          label: schema.enumNames ? schema.enumNames[index] : val,
          value: val,
        }
        return item
      })
    },
  },

  render(h) {
    const {
      vname,
      schema,
      formData,
    } = this.$props

    const nodes = (schema.enum || []).map((val, index) => {
      let item = schema.enumNames ? schema.enumNames[index] : val
      const isHtml = typeof item === 'string' && item[0] === '<'
      if (isHtml) {
        item = <span domPropsInnerHTML={{ item }} />
      }

      return (
        <ElOption
          value={val}
          key={item.value}
        >
          {option}
        </ElOption>
      )
    })

    return (
      <el-select
        // v-model={formData[vname]}
        v-model={this.schema.default}
        v-bind={options}
      >
        {nodes}
      </el-select>
    )
  },

  methods: {
    handleChange() {},
  },
}
