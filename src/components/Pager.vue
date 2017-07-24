<style scoped>
/*css sabrosus style pagination*/

div.sabrosus {
  padding: 3px;
  margin: 3px;
  text-align: center;
  font-size: 18px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

div.sabrosus span {
  border: #9aafe5 1px solid;
  padding: 2px 10px;
  margin-left: 5px;
  text-decoration: none;
  cursor: pointer;
}

div.sabrosus span:hover {
  border: #2b66a5 1px solid;
  color: #000;
  background-color: lightyellow;
}

div.sabrosus span.current {
  border: navy 1px solid;
  font-weight: bold;
  color: #fff;
  background-color: #2e6ab1;
  cursor: default;
}

div.sabrosus span.disabled {
  border: #929292 1px solid;
  cursor: default;
}
</style>

<template>
  <div class="sabrosus">
    <span @click="goPage(1)"> &lt;&lt; </span>
    <span @click="prevPage(current.index-1)"> &lt; </span>
    <span v-for="item in list" :key="'pagerindex-'+item" :class="{'current':item==current.index}" @click="goPage(item)">{{item}}</span>
    <span @click="nextPage(current.index+1)"> &gt; </span>
    <span @click="goPage(pageNum)"> &gt;&gt; </span>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 100
    },
    //显示的页码数量
    limit: {
      type: Number,
      default: 5
    },
  },
  data() {
    return {
      current: {
        index: this.index,
        size: this.size,
        total: this.total
      },
      //页码值
      pageNum: Math.ceil(this.total / this.size),
      list: []
    }
  },
  methods: {
    goPage: function (clickIndex) {
      //准备跳转的页码值和当前所在的页码值相同，不进行任何操作
      if (clickIndex == this.current.index) {
        return false;
      }
      if (clickIndex <= this.pageNum) {
        this.current.index = clickIndex;
        this.onChange();
      }
    },
    prevPage: function (clickIndex) {
      if (clickIndex > 0) {
        this.current.index = clickIndex;
        this.onChange();
      }
    },
    nextPage: function (clickIndex) {
      if (clickIndex <= this.pageNum) {
        this.current.index = clickIndex;
        this.onChange();
      }
    },
    onChange: function () {
      this.$emit('change', this.current);
    },
    createPageList: function (pageIndex) {
      this.pageNum = Math.ceil(this.total / this.size);
      var absNum = (this.limit - 1) / 2;
      var middleNum = pageIndex;
      var minNum = middleNum - absNum;
      var maxNum = middleNum + absNum;

      if (minNum > 0 && maxNum < this.pageNum) {
        var list = [];
        for (var i = minNum; i <= maxNum; i++) {
          list.push(i);
        }
        this.list = list;
      }
      else if (minNum > 0 && maxNum >= this.pageNum) {
        minNum = this.pageNum - this.limit + 1;
        maxNum = this.pageNum;
        var list = [];
        for (var i = minNum; i <= maxNum; i++) {
          list.push(i);
        }
        this.list = list;
      }
      else {
        minNum = 1;
        maxNum = this.pageNum > this.limit ? this.limit : this.pageNum;
        var list = [];
        for (var i = minNum; i <= maxNum; i++) {
          list.push(i);
        }
        this.list = list;
      }

    }
  },
  watch: {
    'current.index': function (newVal) {
      this.createPageList(newVal);
    },
    size: function (newVal) {
      this.createPageList(this.current.index);
      this.onChange();
    },
    total: function (newVal) {
      this.createPageList(this.current.index);
    }
  },
  created: function () {
    this.createPageList(this.index);
  }
}
</script>