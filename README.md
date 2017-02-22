# vue-calendar
基于vue和moment开发的时间组件

##感谢jinzhe的项目vue-calendar，此项目是根据jinzhe的样式上完成

##项目示例
<p>单一时间</p>
![image](https://github.com/ydwan/vue-calendar/blob/master/resource/single.png)

<p>区间时间</p>
![image](https://github.com/ydwan/vue-calendar/blob/master/resource/range.png)

##运行方式:
<p><code>npm i</code>加载依赖</p>
<p><code>npm run dev</code>跑测试端口,届时浏览器会自动打开并进入页面<a href='http://localhost:8080/'>http://localhost:8080/</a></p>

##props参数：
<code>show{Boolean} 用于calendar显示/隐藏</code><br><br>
<code>autoclose{Boolean}  点击后是否关闭show,默认为true</code><br><br>
<code>single{Boolean} 是否为单一选择器,默认为true</code><br><br>
<code>x{Number} calendar显示x坐标</code><br><br>
<code>y{Number} calendar显示Y坐标</code><br><br>
<code>startview{String} 每次inti时显示的视图级别</code><br><br>
<code>minview{String} 最小显示的视图级别</code><br><br>
<code>maxview{String} 最大显示的视图级别</code><br><br>
<code>type{String} 类型//尚未实现datatime,后期迭代</code><br><br>
<code>begin{String} 限制开始时间(包含)</code><br><br>
<code>end{String} 限制结束时间(包含)</code><br><br>
<code>value{String} 视图渲染的时间值</code><br><br>
<code>rangeValue{String}  视图渲染的区间时间值(第二值)</code><br><br>
<code>sep{String} 用于返回结果的分隔符,默认为'-'</code><br><br>
<code>weeksWording{Array} 用于顶部显示周的文案,默认weeksWording:['日', '一', '二', '三', '四', '五', '六']</code><br><br>
<code>monthsWording{Array}  用于顶部显示月份文案,monthsWording:[{ text: '一月', value: 0 }]</code><br><br>

##选择日期之后的参数传递：
###<p>由于<code>vue2.0</code>移除了<code>.sync</code>,所以需要<code>$emit</code>触发事件传递勾选的值给父组件</p>
###<p><code>ok</code>事件用于传递值给父组件,回调参数为<code>Array</code>类型,返回所有勾选的值</p>
###<p><code>cancel</code>取消时间,传递一个包含<code>show</code>的对象类型:<code>{show:false}</code></p>
