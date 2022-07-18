<template>
  <nav class="v-footer-nav">
    <ul>
      <li v-for="(li, i) in list" :key="i">{{ li.name }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'v-footer-nav',
  data() {
    return {
      list: [
        {
          name: 'Terms & Conditions',
        },
        {
          name: 'Privacy',
        },
        {
          name: 'CA Privacy Hub',
        },
        {
          name: 'Contact Us',
        },
        {
          name: 'Sitemap',
        },
        {
          name: 'Notice at Collection',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-footer-nav {
  ul {
    color: #fff;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 10px;
      cursor: pointer;
      font: 500 16px 'Roboto';
    }
  }
}
</style>
