module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"  // ← ¿Tienes esto?
  ],
  plugins: [
    require('flowbite/plugin')  // ← ¿Y esto?
  ]
}
