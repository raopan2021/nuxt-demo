<template>
  <div class="flex min-h-[100svh] w-[100svw] flex-col justify-between">
    <AppHeader />

    <div class="flex-1 bg-[#f0f0f0]">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>
