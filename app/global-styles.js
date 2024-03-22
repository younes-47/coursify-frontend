import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
::selection { /* Optional */
  /* It can be really hard to read highlighted text with a text-shadow, it should be removed when selected */
  text-shadow: none;
  
  /* NOTE: Using this means the color and background-color are set to transparent for selected text... */
  /* So you can customise your styles below */
  color: #fff;
  background-color: #00f;
}

html {
  /* Make base font-size 100% of browser font-size */
  font-size: 100%;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth; /* Smoothly animate to different sections within a page, only if the user doesn't mind animations */
  }
}

*,
*::before,
*::after,
html {
  /* Declare your box-sizing here
  /* https://css-tricks.com/box-sizing */
  box-sizing: border-box ;
}

body {
  /* Declare your default font stack here */
  font-family: "Plus Jakarta Sans", sans-serif ;
  
  /* Better text rendering - font-smoothing has not been officially declared, but can still be useful */
  text-rendering: geometricPrecision ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  /* For responsive images that adjust & adapt */
  height: auto;
  max-width: 100%;
  
  /* This isn't needed, but as a user, I get frustrated when I highlight text and the image gets highlighted too */
  user-select: none;
}

button {
  color: inherit; /* By default, buttons don't inherit the font colour, this is a useful default to override */
}

a, button {
  touch-action: manipulation; /* Element doesn't want double-tap on mobile to zoom */
}

svg {
  /* Make the SVGs fit the parent container by default */
  height: 100%;
  width: 100%;
  
  /* Optional - make the SVG's fill be the same as the inherited color */
  fill: currentColor;
  
  /* Prevent the SVG from altering cursor interaction */
  pointer-events: none;
}

iframe, video {
  /* Make iframes & videos fit the parent container by default */
  height: 100%;
  width: 100%
}
`;

export default GlobalStyle;
