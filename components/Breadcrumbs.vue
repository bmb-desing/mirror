<template >
  <div class="breadcrumbs">
    {{breadcrumbsLinks}}
  </div>
</template>

<script>
  export default {
    name: 'breadcrumbs',
    computed: {
      breadcrumbsLinks () {
        const arr = [];
        const path = this.$route.fullPath
        const pathArr = path.split('/')
        pathArr.splice(0, 1);
        arr.push({title: 'Главная', alias: '/'})
        switch (pathArr[0]) {
          case '':
        }
        return arr
      }
    }
  }
</script>
