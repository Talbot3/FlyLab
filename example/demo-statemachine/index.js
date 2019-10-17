const StateMachine = require('javascript-state-machine');
const utile = require('util');
var fsm = new StateMachine({
  init: 'solid',
  transitions: [
    { name: 'melt',     from: 'solid',  to: 'liquid' },
    { name: 'freeze',   from: 'liquid', to: 'solid'  },
    { name: 'vaporize', from: 'liquid', to: 'gas'    },
    { name: 'condense', from: 'gas',    to: 'liquid' }
  ],
  methods: {
    onMelt:     function() { console.log('I melted')    },
    onFreeze:   function() { console.log('I froze')     },
    onVaporize: function() { console.log('I vaporized') },
    onCondense: function() { console.log('I condensed') },
    onInvalidTransition: function(transition, from, to) {
      throw new Error(`transition ${transition} not allowed from ${from}  to ${to} that state`);
    },
    onPendingTransition: function(transition, from , to) {
      console.log(utile.format('PendingTransition: %s from %s to %s', transition, from, to));
    }
  }
});
fsm.observe('onMelt', function() {
  console.log('melt now');
});
console.log(fsm.state);
fsm.melt();
console.log(fsm.state);
fsm.melt();
