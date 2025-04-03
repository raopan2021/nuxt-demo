<template>
  <div class="container">
    <AppHeader />

    <div class="main">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

<style>
.container {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main {
  flex: 1;
}
</style>
