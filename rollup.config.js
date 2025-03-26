export default {
  build: {
    rollupOptions: {
      external: ['go'] // Ensure Go 1.19 is installed and accessible in the build environment
    }
  }
};