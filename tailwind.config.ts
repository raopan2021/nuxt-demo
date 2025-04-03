/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{vue,ts}",
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 清除默认样式
  },
};
