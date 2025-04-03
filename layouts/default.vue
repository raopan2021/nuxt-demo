<template>
  <div class="min-h-[100svh] w-[100svw] flex flex-col justify-between">
    <AppHeader />

    <div class="flex-1 bg-[#f0f0f0]">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>
