export const tabbar = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/widget.schema.json',  // 第一个$id 可以写此文件存放路径
  title: 'tabbar 项',
  description: 'A widget schema for tianma design platform',
  type: 'object',
  options: {
    text: '首页',
    action: 'scheme/web',
    url: 'https://m.haoshiqi.net/index',
    icon_normal: 'https://files.haoshiqi.net/unknown/1uUnEMkJ5O_home_normal.png',
    icon_selected: 'https://files.haoshiqi.net/unknown/ZKeFIAP3nl_home_selected.png',
    text_color_normal: '#333333',
    text_color_selected: '#FF0000',
  },
  // required: [],
  properties: {
    text: {
      title: 'Icon 文字',
      type: 'string',
      widget: 'input',
      maxLength: 8,
      minLength: 2,
      options: {
        placeholder: 'Icon 文字, 最短 2, 最长 8',
        maxlength: 8,
        minlength: 2,
      },
    },
    action: {
      title: '跳转链接类型',
      type: 'string',
      widget: 'select',
      default: 'schema',
      options: {
        placeholder: '',
        showLabel: true,
      },
      enum: [
        'schema',
        'schema/web',
      ],
      enumNames: [
        'schema 链接',
        'H5 链接',
      ],
    },
    url: {
      title: '跳转链接',
      description: '根据连接类型附加格式校验',
      type: 'string',
      widget: 'input',
      options: {
        placeholder: 'https://m.haoshiqi.net/v2/xxx?xx=xxx',
      },
    },
    icon_normal: {
      title: 'Icon图片路径',
      type: 'string',
      widget: 'input',
      options: {
        placeholder: '支持远程 URL',
      },
    },
    icon_selected: {
      title: 'Icon选中时的图片路径',
      type: 'string',
      widget: 'input',
      options: {
        placeholder: '支持远程 URL',
      },
    },
    text_color_normal: {
      title: '文字默认颜色',
      type: 'string',
      widget: 'color',
      default: '',
      options: {
        showAlpha: false,
      },
    },
    text_color_selected: {
      title: '文字选中时的颜色',
      type: 'string',
      widget: 'color',
      default: '',
      options: {
        colorFormat: '', // hsl hsv hex rgb
        showAlpha: true,
      },
    },
  },
}
