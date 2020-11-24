export default {
  data() {
    return {
      search: '',
      names: ['Maria', 'Aleksandr', 'Irishka']
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !==-1
      })
    }
  },
  created () {
    console.log('created')
  }
}