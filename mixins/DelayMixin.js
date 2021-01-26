export default{
  name:'DelayMixin',
  methods: {
    async delay(ms = this.delayMs) {
      return await new Promise(resolve => setTimeout(resolve, ms));
    },
  },
  data() {
    return{
      delayMs:50,
    }
  }
}
