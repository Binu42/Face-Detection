const Options = {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff6600"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#0000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#207561",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "bottom-left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        bubble: {
          size: 10
        }
      }
    },
    "retina_detect": true
  };

  module.exports = Options;