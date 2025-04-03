<script setup>
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();
const { count, count1 } = storeToRefs(counterStore);

onMounted(() => {
  setInterval(() => {
    count.value++;
    count1.value++;
  }, 1000);
});
</script>

<template>
  <footer class="m-0 h-[50px] bg-[#f5f5f5] p-0">
    footer {{ count }},{{ count1 }}
  </footer>
</template>
