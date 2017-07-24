<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li>
        <router-link to="/rangeTime">查看区间选择器</router-link>
      </li>
      <li>
        <router-link to="/singleTime">查看单一选择器</router-link>
      </li>
      <li>
        <router-link to="/pager">Pager组件</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: '欢迎使用vue-calendar'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>