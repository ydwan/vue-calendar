<template>
    <div>
        <Calendar style="width:200px;margin:20px auto;" :value="calendar.items.value" :begin="calendar.items.begin" @close="dateClose" @change="dateOk" :end="calendar.items.end" :format="calendar.items.format" :single="calendar.items.single" :rangeValue='calendar.items.rangeValue' :autoClose='calendar.items.autoClose'>
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
                    type: "date",
                    begin: moment().add('months', -15).format('YYYY-MM-DD'),
                    end: moment().add('months', 1).format('YYYY-MM-DD'),
                    value: moment().format('YYYY-MM-DD'),
                    format: 'YYYY-MM-DD',
                    single: true,
                    autoClose: true,
                    weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
            }
        }
    },
    watch: {
    },
    methods: {
        dateClose(obj) {
            this.calendar.show = obj.show;
        },
        dateOk(obj) {
            this.calendar.items.text = obj.values[0];
            this.calendar.items.value = obj.values[0];
        }
    }
}
</script>