<template>
    <div>
        <Calendar style="width:300px;margin:20px auto;" :value="calendar.items.value" :begin="calendar.items.begin" @cancel="dateCancel" @change="dateOk" :end="calendar.items.end" :format="calendar.items.format" :single="calendar.items.single" :rangeValue='calendar.items.rangeValue' :autoClose='calendar.items.autoClose'>
        </Calendar>

        <div>
            <router-link to="/">回到菜单</router-link>
        </div>
    </div>
</template>
<script>
import Calendar from './common/Calendar.vue'
import moment from 'moment'

export default {
    name: 'rangeTime',
    components: {
        Calendar
    },
    data() {
        return {
            // 数据绑定
            calendar: {
                items: {
                    begin: "2016-08-20",
                    end: moment().format('YYYY-MM-DD'),
                    value: "2017-03-08",
                    rangeValue: moment().add('days', -5).format('YYYY-MM-DD'),
                    format: 'YYYY-MM-DD',
                    single: false,
                    autoClose: false,
                    weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
            }
        }
    },
    // 处理值的传递
    watch: {
        'calendar.value': function(value) {
            this.calendar.items[this.calendar.picker].value = value
        }
    },
    methods: {
        dateCancel(obj) {
            this.calendar.show = obj.show;
        },
        dateOk(obj) {
            this.calendar.items.value = obj.values[0];
            this.calendar.items.rangeValue = obj.values[obj.values.length - 1];
        }
    }
}
</script>