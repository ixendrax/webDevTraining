new Vue({
  el: '#exercise',
  data: {
    color: 'yellow',
    style: '',
    width: 50,
    userbinary: false,
    progress: 5,
    userchoice: 'shrink',
    attachHighlight: false
  },
  computed: {
    flashing: function() {
      return {
        highlight: this.attachHighlight,
        shrink: !this.attachHighlight
      };
    },
    userStyle: function() {
      return {
        border: 'solid',
        width: this.width + 'px'
      };
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval( function() {
        vm.attachHighlight = !vm.attachHighlight;
      }, 200);
    },
    startProgress: function () {
      var vm = this;
      setInterval( function() {
        if(vm.progress < 100) {
          vm.progress += 5;
        }
      }, 200);
    }
  }
});