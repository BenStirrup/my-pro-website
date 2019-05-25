<script>
export default {
  methods: {
    goTo(path, hash) {
      const currentPath = this.$route.path
      const currentHash = this.$route.hash
      if (path === currentPath && hash === currentHash) {
        const element = document.querySelector(hash)
        window.scrollTo({ top: element.offsetTop - 110, behavior: 'smooth' })
      } else {
        this.$router.push({ path, hash })
      }
    },
    goToExternal(path) {
      window.open('https://' + path, '_blank')
    }
  }
}
</script>
