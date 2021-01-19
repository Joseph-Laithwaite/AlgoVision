const delayMixin = {
  name:'delayMixin',
  methods: {
    async delay(ms = this.delayMs) {
      return await new Promise(resolve => setTimeout(resolve, ms));
    },
  },
  data() {
    return{
      delayMs:500,
    }
  }
}
