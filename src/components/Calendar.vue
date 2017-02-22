<style scoped>
.calendar {
    width: 300px;
    padding: 10px;
    background: #fff;
    position: absolute;
    border: 1px solid #DEDEDE;
    border-radius: 2px;
    opacity:.95;
    transition: all .5s ease;
}
.calendar-enter, .calendar-leave {
    opacity: 0;
    transform: translate3d(0,-10px, 0);
}
.calendar:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
}
.calendar:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
}
.calendar-tools{
    height:32px;
    font-size: 20px;
    line-height: 32px;
    color:#5e7a88;
}
.calendar-tools .float.left{
    float:left;
}
.calendar-tools .float.right{
    float:right;
}
.calendar-tools input{
    font-size: 20px;
    line-height: 32px;
    color: #5e7a88;
    width: 70px;
    text-align: center;
    border:none;
    background-color: transparent;
}
.calendar-tools span{
    cursor: pointer;
}
.calendar-prev{
    float:left;
}
.calendar-next{
    float:right;
}
 
.calendar table {
    clear: both;
    width: 100%;
    margin-bottom:10px;
    border-collapse: collapse;
    color: #444444;
}


.calendar td{
    margin:2px !important;
    padding:0px 0;
    width: 14.28571429%;
    height:34px;
    text-align: center;
    vertical-align: middle;
    font-size:14px;
    line-height: 125%;
}

.calendar tbody td {
    cursor: pointer;
}
.calendar td.week{
    pointer-events:none !important;
    cursor: default !important;    
}
.calendar td.old{
    color: #c0c0c0;
    cursor: pointer !important;
}
.calendar td.disabled {
    color: #c0c0c0;
    cursor: default !important;
    pointer-events:none !important;
}
.calendar td span{
    display:block;
    height:30px;
    line-height:30px;
    margin:2px;
}
.calendar tbody td span:hover{
    background:#f3f8fa;
}
.calendar td.selected span{
    background-color: #5e7a88;
    color: #fff;
    border-radius:2px;
}
.calendar td.selected span:hover{
    background-color: #455963;
    color: #fff;
}
.calendar td.selected-start span{
    background-color: #5e7a88;
    color: #fff;
    margin: auto;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
.calendar td.selected-start span:hover{
    background-color: #455963;
    color: #fff;
}
.calendar td.selected-end span{
    background-color: #5e7a88;
    color: #fff;
    margin: auto;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
.calendar td.selected-end span:hover{
    background-color: #455963;
    color: #fff;
}
.calendar td.selected-item span{
    background-color: #84aabd;
    color: #fff;
    margin: auto;
    border-radius: 0;
}
.calendar td.selected-item span:hover{
    background-color: #6ca6c3;
    color: #fff;
}
.calendar thead td {
  text-transform: uppercase;
}
.calendar .timer{
    margin:10px 0;
    text-align: center;
}
.calendar .timer input{
    border-radius: 2px;
    padding:5px;
    font-size: 14px;
    line-height: 18px;
    color: #5e7a88;
    width: 50px;
    text-align: center;
    border:1px solid #efefef;
}
.calendar .timer input:focus{
    border:1px solid #5e7a88;
}
.calendar-button{
    text-align: center;
}
.calendar-button span{
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    min-width: 5em;
    vertical-align: baseline;
    margin: 0 0.5em;
    padding: .6em 2em;
    font-size: 0.75em;
    line-height: 1em;
    text-align: center;
    border-radius: .3em;
}
.calendar-button span.submit{
    background:#5e7a88;
    color:#fff;
}
.calendar-button span.submit:hover{
    background:#455963;
}
.calendar-button span.cancel{
    background:#efefef;
    color:#666;
}
.calendar-button span.cancel:hover{
    background:#d5d5d5;
    color:#666;
}
.calendar .lunar{
     font-size:11px;
     line-height: 150%;
     color:#aaa;   
}
.calendar td.selected .lunar{
     color:#fff;   
}
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../../static/fonts/glyphicons-halflings-regular.eot');
  src: url('../../static/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../../static/fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../../static/fonts/glyphicons-halflings-regular.woff') format('woff'), url('../../static/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../../static/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-menu-left:before {
  content: "\e257";
}
.glyphicon-menu-right:before {
  content: "\e258";
}
</style>

<template>
    <div @click.stop="" class="calendar" v-show="show" :style="{'left':x+'px','top':y+'px'}" transition="calendar" transition-mode="out-in">
        <div class="calendar-tools">
            <span class="calendar-prev" @click="prev"><i class="glyphicon glyphicon-menu-left"></i></span>
            <span class="calendar-next" @click="next"><i class="glyphicon glyphicon-menu-right"></i></span>
            <div style="text-align: center;cursor: pointer;" @click="setPrevTimeSwitch">{{timeSwitch}}</div>
</div>
<table>
    <thead>
        <tr v-if="list.head.length>0">
            <td v-for="item in list.head"><span>{{item}}</span></td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in list.body">
            <td v-for="td in item" @click.stop="select(td.value)" :class="getCssClass(td.value,td.cssClass)"><span>{{td.text}}</span></td>
        </tr>
    </tbody>
</table>
<div class="calendar-button" v-if="!autoclose"><span class='submit' @click='ok'>确定</span><span class='cancel' @click='cancel'>取消</span></div>
</div>
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            show: {
                type: Boolean,
                twoWay: true,
                default: false
            },
            //是否自动关闭
            autoclose: {
                type: Boolean,
                default: true
            },
            //渲染时默认显示视图层级
            startview: {
                type: String,
                default: "month"
            },
            //最小显示视图层级
            minview: {
                type: String,
                default: "month"
            },
            //最大显示视图层级(decade>year>month>day>hour)
            maxview: {
                type: String,
                default: "decade"
            },
            x: {
                type: Number,
                default: 0
            },
            y: {
                type: Number,
                default: 0
            },
            type: {
                type: String,
                default: "date"
            },
            begin: {
                type: String,
                twoWay: true,
                default: ""
            },
            end: {
                type: String,
                default: ""
            },
            //起始值
            value: {
                type: String,
                twoWay: true,
                default: ""
            },
            //是否单选(默认单选,false表示为多选，属区间范围)
            single: {
                type: Boolean,
                default: true
            },
            //多选第二个值(结束值)
            rangeValue: {
                type: String,
                default: ""
            },
            sep: {
                type: String,
                twoWay: true,
                default: "-"
            },
            weeksWording: {
                type: Array,
                default: function () {
                    return ['日', '一', '二', '三', '四', '五', '六']
                }
            },
            monthsWording: {
                type: Array,
                default: function () {
                    return [
                        { text: '一月', value: 0 },
                        { text: '二月', value: 1 },
                        { text: '三月', value: 2 },
                        { text: '四月', value: 3 },
                        { text: '五月', value: 4 },
                        { text: '六月', value: 5 },
                        { text: '七月', value: 6 },
                        { text: '八月', value: 7 },
                        { text: '九月', value: 8 },
                        { text: '十月', value: 9 },
                        { text: '十一月', value: 10 },
                        { text: '十二月', value: 11 }
                    ];
                }
            }
        },
        data() {
            return {
                //用于视图显示头和内容集合
                list: {
                    head: [],
                    body: []
                },
                days: [],
                today: [],
                //选中的集合,用于当前选中的样式
                selects: [],
                //当前展开视图的时间
                currentViewDate: "",
                //当前展开的视图
                currentViewType: {
                    text: "",
                    value: 0
                },
                //视图顶部显示的日期数据
                timeSwitch: "",
                selectValue: {
                    start: "",
                    end: ""
                }
            }
        },
        created() {
            this.init()
            // 延迟绑定事件，防止关闭
            window.setTimeout(() => {
                document.addEventListener('click', (e) => {
                    e.stopPropagation()
                    this.cancel()
                }, false)
            }, 500)
        },
        watch: {
            show() {
                this.init()
            },
            value() {
                this.init()
            }
        },
        computed: {

        },
        methods: {
            // 初始化数据
            init() {
                if (this.show) {
                    if (!this.value) {
                        this.selectValue.start = new Date();
                    }
                    this.selectValue.start = this.value;
                    this.selectValue.end = this.selectValue.start;
                    if (this.rangeValue) {
                        this.selectValue.end = this.rangeValue;
                    }

                    this.currentViewDate = this.selectValue.end;
                    this.currentViewType = {
                        text: this.startview,
                        value: viewTypeEnum[this.startview]
                    };

                    this.selects = [];
                    this.selects.push(this.selectValue.start);
                    if (!this.single) {
                        this.selects = this.getRangeDate(this.selectValue.start, this.selectValue.end, this.currentViewType.text);
                    }

                    //渲染日期视图
                    this.render(this.currentViewType.text, this.currentViewDate);
                }
            },
            //获取两个时间中间的时间(包含开始和结束)
            //@param{String,Date} start开始的时间
            //@param{String,Date} end结束的时间
            //@param{String} currentViewTypeText当前需要渲染的视图
            //@return{Array} 返回时间集合
            getRangeDate(start, end, currentViewTypeText) {
                var _self = this;
                var result = [];
                var type = '';
                //decade>year>month>day>hour
                switch (currentViewTypeText) {
                    case "decade":
                        type = 'years';
                        break;
                    case "year":
                        type = 'months';
                        break;
                    //展示month下的所有days数据
                    case "month":
                        type = 'days';
                        break;
                }
                var startMM = moment(start).endOf(type);
                var endMM = moment(end).endOf(type);
                while (startMM <= endMM) {
                    result.push(startMM.format('YYYY-MM-DD'));
                    startMM.add(1, type);
                }
                result = unique(result);
                return result;
            },
            //渲染日期
            //@param{String} currentViewTypeText当前需要渲染的视图
            //@param{String,Date} date根据此时间显示视图
            render(currentViewTypeText, date) {
                var _self = this;
                var mm = moment(new Date(this.formatViewTypeDate(date, currentViewTypeText)));
                //decade>year>month>day>hour
                switch (currentViewTypeText) {
                    case "decade":
                        _self.list.head = [];
                        var yearList = getYearDateBody(date);
                        var list = yearList.map(c => ({
                            text: c.text,
                            value: c.value
                        }));
                        list = _self.setDisableCssClass(list);
                        _self.list.body = splitTwoDimension(list, 4, 'years');
                        if (list.length > 0) {
                            _self.timeSwitch = list[0].text + '-' + list[list.length - 1].text;
                        }
                        break;
                    case "year":
                        _self.list.head = [];
                        var list = _self.monthsWording.map(c => ({
                            text: c.text,
                            value: mm.month(c.value).format('YYYY-MM-DD')
                        }));
                        list = _self.setDisableCssClass(list);
                        _self.list.body = splitTwoDimension(list, 4, 'months');
                        _self.timeSwitch = this.getTimeSwitch(currentViewTypeText, date);
                        break;
                    //展示month下的所有days数据
                    case "month":
                        _self.list.head = _self.weeksWording;
                        var list = getMonthDateBody(date);
                        list = _self.setDisableCssClass(list);
                        _self.list.body = splitTwoDimension(list, 7, 'days');
                        _self.timeSwitch = this.getTimeSwitch(currentViewTypeText, date);
                        break;
                }
            },
            // 上月
            prev(e) {
                e.stopPropagation();
                switch (this.currentViewType.text) {
                    case 'decade':
                        this.currentViewDate = moment(new Date(this.currentViewDate)).add(-10, "years");
                        this.render("decade", this.currentViewDate);
                        break;
                    case 'year':
                        this.currentViewDate = moment(new Date(this.currentViewDate)).add(-1, "years");
                        this.render("year", this.currentViewDate);
                        break;
                    case 'month':
                        this.currentViewDate = moment(new Date(this.currentViewDate)).add(-1, "months");
                        this.render("month", this.currentViewDate);
                        break;
                    case 'day':
                        break;
                    case 'hour':
                        break;
                }
            },
            //  下月
            next(e) {
                e.stopPropagation();
                switch (this.currentViewType.text) {
                    case 'decade':
                        this.currentViewDate = moment(new Date(this.currentViewDate)).add(10, "years");
                        this.render("decade", this.currentViewDate);
                        break;
                    case 'year':
                        this.currentViewDate = moment(new Date(this.currentViewDate)).add(1, "years");
                        this.render("year", this.currentViewDate);
                        break;
                    case 'month':
                        this.currentViewDate = moment(new Date(this.currentViewDate)).add(1, "months");
                        this.render("month", this.currentViewDate);
                        break;
                    case 'day':
                        break;
                    case 'hour':
                        break;
                }
            },
            // 选中日期
            select(value) {
                if (this.currentViewType.text != this.minview) {
                    if (this.currentViewType.value < viewTypeEnum[this.minview]) {
                        //设置viewType的value+1
                        this.currentViewType.value = this.currentViewType.value + 1;
                        //通过value+1找到对应的text
                        this.currentViewType.text = viewTypeEnum[this.currentViewType.value];
                        //设置为当前选中的时间
                        this.currentViewDate = value;
                        switch (this.currentViewType.text) {
                            case 'decade':
                                break;
                            case 'year':
                                this.render('year', value);
                                break;
                            case 'month':
                                this.render('month', value);
                                break;
                            case 'day':
                                break;
                            case 'hour':
                                break;
                        }

                    }
                    return false;
                }

                //每次点击时清空所有选择的数据
                this.selects = [];
                if (!this.single) {
                    //表示已经勾选起始和结束日期
                    if (this.selectValue.start && this.selectValue.end) {
                        this.selectValue.start = value;
                        this.selectValue.end = '';
                        this.selects.push(this.selectValue.start);
                    }
                    else if (this.selectValue.start) {
                        this.selectValue.end = value;
                        //如果第一个选择的时间小于第二个时间,将开始和结束时间对调
                        if (moment(value) < moment(this.selectValue.start)) {
                            this.selectValue.end = this.selectValue.start;
                            this.selectValue.start = value;
                        }
                        this.selects = this.getRangeDate(this.selectValue.start, this.selectValue.end, this.currentViewType.text);
                    }
                }
                else {
                    if (this.selects.some(c => c == value)) {
                        var index = this.selects.indexOf(value);
                        this.selects.splice(index, 1);
                    }
                    else {
                        this.selects.push(value);
                    }
                }
                //如果自动关闭
                if (this.autoclose && this.selectValue.start && this.selectValue.end) {
                    this.ok()
                }
            },
            // 多选的时候提交
            ok() {
                if (this.sep != '-') {
                    var sep = this.sep;
                    this.selects = this.selects.map(c => (c.replace(/-/g, sep)));
                }
                this.$emit('ok', { values: this.selects });
                this.cancel();
            },
            // 隐藏控件
            cancel() {
                this.$emit('cancel', { show: false });
            },
            //获取样式,cssClass为传过来的样式，如果有默认使用传递样式
            getCssClass(value, cssClass) {
                var _self = this;
                var newcssClass = {};
                var selects = this.selects || [], type = "";
                switch (this.currentViewType.text) {
                    case "decade":
                        type = 'years';
                        break;
                    case "year":
                        type = 'months';
                        break;
                    //展示month下的所有days数据
                    case "month":
                        type = 'days';
                        break;
                }
                value = this.formatViewTypeDate(value, type);
                if (!_self.single) {
                    selects = this.removeRedundancy(this.selects, value, type);
                }
                selects = selects.map(c => _self.formatViewTypeDate(c, type));
                selects = unique(selects);

                var index = selects.indexOf(value);
                if (index >= 0) {
                    newcssClass.selected = true;
                }
                //区间的情况
                if (this.selects.length >= 2) {
                    delete newcssClass.selected;
                    var startSelect = _self.formatViewTypeDate(this.selects[0], type);
                    var endSelect = _self.formatViewTypeDate(this.selects[this.selects.length - 1], type);
                    if (value == startSelect) {
                        newcssClass['selected-start'] = true;
                    }
                    else if (value == endSelect) {
                        newcssClass['selected-end'] = true;
                    } else {
                        if (index >= 0) {
                            //如果当前value并非selects中第一个和最后一个元素,表示为selected-item
                            newcssClass['selected-item'] = true;
                        }
                    }
                }
                return Object.assign(newcssClass, cssClass);
            },
            //获取视图顶部的视图时间
            //@param{String} currentViewTypeText当前需要渲染的视图
            //@param{String,Date} date根据此时间显示视图
            getTimeSwitch(currentViewTypeText, date) {
                var timeSwitch = [];
                var mm = moment(new Date(date));
                //显示为year下的视图，将月份添加到顶部中。
                if (currentViewTypeText == "year") {
                    timeSwitch.push(mm.year());
                }
                //显示为month下的视图，将年份、月份添加到顶部中。
                if (currentViewTypeText == "month") {
                    timeSwitch.push(mm.year());
                    timeSwitch.push(mm.month() + 1);
                }
                if (currentViewTypeText == "day") {
                    timeSwitch.push(mm.year());
                    timeSwitch.push(mm.month() + 1);
                    timeSwitch.push(Number(mm.format("DD")) + 1);
                }
                return timeSwitch.join('/');
            },
            //根据传入时间和类型将数组冗余数据剔除,,
            //@param{Array}  arr:[2016-01-02,2016-02-03]
            //@param{String}  date:'2016-01-02'
            //@param{String}  type:'months'
            //@return [2016-01-02]
            removeRedundancy(arr, date, type) {
                var dateSplit = date.split('-');
                var field = date;
                switch (type) {
                    case 'months':
                        //匹配年份:2017
                        field = dateSplit[0];
                        break;
                    case 'days':
                        //匹配年份+月份:2017-02
                        field = dateSplit[0] + '-' + dateSplit[1];
                        break;
                }
                var list = arr.filter(c => c.indexOf(field) >= 0);
                return list;
            },
            //根据当前时间格式化为当前视图类型的最后
            //@param{Date,String} date时间
            //@param{String} type视图类型
            formatViewTypeDate(date, type) {
                switch (type) {
                    case "decade":
                        type = 'years';
                        break;
                    case "year":
                        type = 'months';
                        break;
                    //展示month下的所有days数据
                    case "month":
                        type = 'days';
                        break;
                }
                date = moment(new Date(date)).endOf(type).format('YYYY-MM-DD');
                return date;
            },
            //根据当前视图Type，设置为上级视图，并渲染上级视图
            setPrevTimeSwitch() {
                //如果当前视图不是没有达到顶级decade之上
                if (this.currentViewType.value - 1 > 0) {
                    //设置viewType的value-1
                    this.currentViewType.value = this.currentViewType.value - 1;
                    //通过value-1找到对应的text
                    this.currentViewType.text = viewTypeEnum[this.currentViewType.value];
                }
                this.render(this.currentViewType.text, this.currentViewDate);
            },
            //根据begin和end给集合中满足条件的元素添加disable样式
            //@param {Array} body集合
            //@return {Array} body(添加disable样式)集合
            setDisableCssClass(arr) {
                var _self = this;
                var beginMM = null, endMM = null;
                if (this.begin) {
                    beginMM = moment(new Date(this.begin)).add(-1, 'days');
                }
                if (this.end) {
                    endMM = moment(new Date(this.end));
                }
                return arr.map(c => {
                    var disabled = false;
                    var mm = moment(c.value);
                    if (!c.cssClass) {
                        c.cssClass = {};
                    }
                    if (beginMM) {
                        //判断当前c的时间是否小于限制开始时间,如果小于则禁止点击
                        switch (_self.currentViewType.text) {
                            case 'decade':
                                disabled = mm.year() < beginMM.year()
                                break;
                            case 'year':
                                disabled = mm.year() == beginMM.year() && mm.month() < beginMM.month()
                                break;
                            case 'month':
                                disabled = mm < beginMM
                                break;
                        }
                    }
                    if (endMM && !disabled) {
                        //判断当前c的时间是否大于限制结束时间,如果大于则禁止点击
                        switch (_self.currentViewType.text) {
                            case 'decade':
                                disabled = mm.year() > endMM.year()
                                break;
                            case 'year':
                                disabled = mm.year() == beginMM.year() && mm.month() > endMM.month()
                                break;
                            case 'month':
                                disabled = mm > endMM
                                break;
                        }
                    }
                    return {
                        text: c.text,
                        value: c.value,
                        cssClass: Object.assign(c.cssClass, { disabled })
                    }
                });
            }
        }
    }



    var viewTypeEnum = {
        decade: 1,
        year: 2,
        month: 3,
        day: 4,
        hour: 5,
        '1': 'decade',
        '2': 'year',
        '3': 'month',
        '4': 'day',
        '5': 'hour'
    }

    //获取年份总共12个包含当前的年份
    //@param{String,Date} date日期
    //@return{Array} 返回12个年份集合
    var getYearDateBody = function (date) {
        var mm = moment(new Date(date));
        var year = mm.year();
        var result = [];
        var prevLength = year % 10;
        //首先补全10之前的尾数为9的年份
        result.push({
            text: moment(new Date(date)).add(0 - (prevLength + 1), "years").year(),
            value: moment(new Date(date)).add(0 - (prevLength + 1), "years").format("YYYY-MM-DD")
        });
        //补全当前选中年之前的年份
        for (var i = prevLength; i > 0; i--) {
            result.push({
                text: moment(new Date(date)).add(0 - i, "years").year(),
                value: moment(new Date(date)).add(0 - i, "years").format("YYYY-MM-DD")
            });
        }
        //补全当前年份以及到00年的
        var nextLength = 10 - prevLength;
        for (var i = 0; i <= nextLength; i++) {
            result.push({
                text: moment(new Date(date)).add(i, "years").year(),
                value: moment(new Date(date)).add(i, "years").format("YYYY-MM-DD")
            });
        }
        return result;
    }

    //获取月份的body数据
    var getMonthDateBody = function (date) {
        var mm = moment(new Date(date));
        var year = mm.year();
        //moment的month索引从0开始
        var month = mm.month() + 1;
        var result = [];

        var monthStartDay = mm.startOf("month").days();
        var monthEndDay = mm.endOf("month").days();
        //如果每个月第一天不是星期天,则补全当前行
        if (monthStartDay != 0) {
            var prevMM = moment(new Date(date)).add(-1, 'months');
            var prevPadding = prevMM.endOf("month").add(0 - monthStartDay, "days");
            for (var i = 0; i <= monthStartDay - 1; i++) {
                result.push({
                    text: prevPadding.add(1, "days").format("DD"),
                    value: prevPadding.add(0, "days").format("YYYY-MM-DD"),
                    cssClass: {
                        "old": true
                    }
                })
            }
        }
        //获取当前日期月份最后一天号数
        var thisMonthLastNum = Number(moment(new Date(date)).endOf("month").format("DD"));
        for (var i = 0; i <= thisMonthLastNum - 1; i++) {
            result.push({
                text: moment(new Date(date)).startOf("month").add(i, "days").format("DD"),
                value: moment(new Date(date)).startOf("month").add(i, "days").format("YYYY-MM-DD")
            });
        }
        //如果每个月第一天不是星期六,则补全当前行
        if (monthEndDay != 6) {
            var nextMM = moment(new Date(date)).add(1, 'months');
            var length = 6 - nextMM.startOf("month").days();
            for (var i = 0; i <= length; i++) {
                result.push({
                    text: moment(new Date(date)).startOf("month").add(1, 'months').add(i, "days").format("DD"),
                    value: moment(new Date(date)).startOf("month").add(1, 'months').add(i, "days").format("YYYY-MM-DD"),
                    cssClass: {
                        "old": true
                    }
                })
            }
        }
        return result;
    }

    //去除数组重复
    //@param{Array} arr数组
    //@return{Array}
    var unique = function (arr) {
        arr = arr || [];
        var hash = {}, result = [], type = '', item;
        for (var i = 0; i < arr.length; i++) {
            item = arr[i];
            type = Object.prototype.toString.call(item);

            if (!hash[item + type]) {
                hash[item + type] = true;
                result.push(item);
            }
        }
        return result;
    }


    //将数组拆分为二维数组
    //@param{Array} arr数组:{cssClass:{},text:'',value:''}
    //@param{Number} length分隔二维数组长度
    //@param{String} formatType格式化时间为当前类型的最后(formatType为:months时 2016-01-18 => 2016-01-31)
    var splitTwoDimension = function (arr, length, formatType) {
        //二维数组
        var result = [];
        //tr行的数据
        var twoDimension = [];
        for (var i = 0; i < arr.length; i++) {
            //开始
            if (i % length == 0 && i !== 0) {
                result.push(twoDimension);
                twoDimension = [];
            }
            if (formatType) {
                arr[i].value = moment(new Date(arr[i].value)).endOf(formatType).format('YYYY-MM-DD');
            }
            twoDimension.push(arr[i]);
            //结束
            if ((i + 1) == arr.length) {
                result.push(twoDimension);
            }
        }
        return result;
    }
</script>