<template>
  <div class="home">
    <Transition
      name="fade-transform"
      mode="out-in"
    >
      <KeepAlive>
        <RouterView></RouterView>
      </KeepAlive>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  background-color: #f6f6f6;
  overflow-x: hidden;
}
@keyframes slidetoright {
  from {
    width: 0%;
  }
  to {
    width: 120px;
  }
}
</style>
