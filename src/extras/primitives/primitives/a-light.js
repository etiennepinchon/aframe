var registerPrimitive = require('../primitives').registerPrimitive;

registerPrimitive('a-light', {
  defaultComponents: {
    light: {}
  },

   mappings: {
     angle: 'light.angle',
     color: 'light.color',
     'ground-color': 'light.groundColor',
     decay: 'light.decay',
     distance: 'light.distance',
     intensity: 'light.intensity',
     penumbra: 'light.penumbra',
     type: 'light.type',
     target: 'light.target',
     'cast-shadow': 'light.castShadow',
     'shadow-bias': 'light.shadowBias',
     'shadow-camera-far': 'light.shadowCameraFar',
     'shadow-camera-fov': 'light.shadowCameraFov',
     'shadow-camera-near': 'light.shadowCameraNear',
     'shadow-camera-top': 'light.shadowCameraTop',
     'shadow-camera-right': 'light.shadowCameraRight',
     'shadow-camera-bottom': 'light.shadowCameraBottom',
     'shadow-camera-left': 'light.shadowCameraLeft',
     'shadow-camera-visible': 'light.shadowCameraVisible',
     'shadow-map-height': 'light.shadowMapHeight',
     'shadow-map-width': 'light.shadowMapWidth'
  }
});
