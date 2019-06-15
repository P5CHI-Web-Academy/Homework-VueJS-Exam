<template>
  <div>
    {{ issue.user.login }} - {{ issue.title }}
  </div>
</template>

<script>
export default {
  props: ['issue']
}
</script>

