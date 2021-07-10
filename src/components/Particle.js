import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    // <Particles
    //   params={{
    //     particles: {
    //       number: {
    //         value: 160,
    //         density: {
    //           enable: true,
    //           value_area: 1500,
    //         },
    //       },
    //       line_linked: {
    //         enable: false,
    //         opacity: 0.03,
    //       },
    //       move: {
    //         direction: "right",
    //         speed: 0.05,
    //       },
    //       size: {
    //         value: 1,
    //       },
    //       opacity: {
    //         anim: {
    //           enable: true,
    //           speed: 1,
    //           opacity_min: 0.05,
    //         },
    //       },
    //     },
    //     interactivity: {
    //       events: {
    //         onclick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //       },
    //       modes: {
    //         push: {
    //           particles_nb: 1,
    //         },
    //       },
    //     },
    //     retina_detect: true,
    //   }}
    // />
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 120,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.2
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 0.3,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
  );
}

export default Particle;
