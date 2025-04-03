<script setup>
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
const { count, count1 } = storeToRefs(counterStore);
</script>

<template>
  <header class="m-0 h-[50px] bg-[#f5f5f5] p-0">
    header {{ count }},{{ count1 }}
  </header>
</template>
