# vue-calendar
基于vue和moment开发的时间组件

## 感谢jinzhe的项目vue-calendar，此项目是根据jinzhe的样式上完成

## 项目实现效果
### 单一时间</p>
![单一时间](https://github.com/ydwan/vue-calendar/blob/master/resource/single.gif "单一时间")

### 区间时间
![区间时间](https://github.com/ydwan/vue-calendar/blob/master/resource/range.gif "区间时间")

## 运行方式:
<p><code>npm i</code>加载依赖</p>
<p><code>npm run dev</code>跑测试端口,届时浏览器会自动打开并进入页面<a href='http://localhost:8080/'>http://localhost:8080/</a></p>

## props参数：
| Parameter | Type | Description |
| --------| ------- | -------- |
| show | Boolean | 默认可以不传。传入时手动控制是否显示时间选择器，需要搭配open事件使用。具体查看RangeTime.vue |
| value | String | 视图渲染的时间值 |
| rangeValue | String | 视图渲染的区间时间值(第二值) |
| single | Boolean | 是否为单一选择器,默认为true |
| autoClose | Boolean | 点击后是否关闭show,默认为true自动关闭 |
| startview | String | 每次inti时显示的视图级别 |
| minview | String | 最大显示的视图级别 |
| maxview | String | 最大显示的视图级别 |
| placeholder | String | placeholder |
| begin | String | 限制开始时间(包含) |
| end | String | 限制结束时间(包含) |
| weeksWording | Array | 用于顶部显示周的文案,默认weeksWording:['日', '一', '二', '三', '四', '五', '六'] |
| monthsWording | Array | 用于顶部显示月份文案,monthsWording:[{ text: '一月', value: 0 }] |
| format | String | 展示的日期格式，配置参考 moment.js |
| change | Function({values}) | 勾选时间之后的回调函数，参数示例:{values:['2017-01-01','2017-02-01']} |
| open | Function({show}) | 打开时间选择器的回调函数，show:true |
| close | Function({show}) | 关闭时间选择器的回调函数，show:false |

## 调用示例：
<p><code><Calendar style="width:300px;margin:20px auto;" :value="calendar.items.value" :begin="calendar.items.begin" @close="dateClose" @change="dateOk" :end="calendar.items.end" :format="calendar.items.format" :single="calendar.items.single" :rangeValue='calendar.items.rangeValue' :autoClose='calendar.items.autoClose'>
</Calendar></code></p>
