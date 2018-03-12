import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

${reset}

html {
  font-family: 'Open Sans', sans-serif;
  color: white;
  background-color: black;
}

@font-face {
  font-family: 'weathericons';
  src: url('./font/weathericons-regular-webfont.eot');
  src: url('./font/weathericons-regular-webfont.eot?#iefix') format('embedded-opentype'), url('./font/weathericons-regular-webfont.woff2') format('woff2'), url('./font/weathericons-regular-webfont.woff') format('woff'), url('./font/weathericons-regular-webfont.ttf') format('truetype'), url('./font/weathericons-regular-webfont.svg#weather_iconsregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
`;

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;


export default baseStyles;
