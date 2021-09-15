// Registering component in log-component.js
AFRAME.registerComponent('box', {
    schema: {
      message: {type: 'number', default: 0}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

