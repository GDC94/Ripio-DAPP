import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      /*Copied from 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300&display=swap' */
      /*'https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@300;400;500;600&display=swap'*/

      /* latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 100;
        src: local('Lato Hairline'), local('Lato-Hairline'), url(https://fonts.gstatic.com/s/lato/v13/GtRkRNTnri0g82CjKnEB0Q.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/8qcEw_nrk_5HEcCpYdJu8BTbgVql8nDJpwnrE27mub0.woff2) format('woff2');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/MDadn8DQ_3oT6kvnUq_2rxTbgVql8nDJpwnrE27mub0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/rZPI2gHXi8zxUjnybc2ZQFKPGs1ZzpMvnHX-7fPOuAc.woff2) format('woff2');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/MgNNr5y1C_tIEuLEmicLm1KPGs1ZzpMvnHX-7fPOuAc.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/cT2GN3KRBUX69GVJ2b2hxn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/1KWMyx7m-L0fkQGwYhWwun-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Lato';
        font-style: italic;
        font-weight: 700;
        src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/AcvTq8Q0lyKKNxRlL28Rn4X0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 900;
        src: local('Lato Black'), local('Lato-Black'), url(../assets/fonts/Lato-Black.ttf), url(https://fonts.gstatic.com/s/lato/v13/R4a6fty3waPci7C44H8AjvY6323mHUZFJMgTvxaG2iE.woff2) format('woff2');
        unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 900;
        src: local('Lato Black'), local('Lato-Black'), url(../assets/fonts/Lato-Black.ttf), url(https://fonts.gstatic.com/s/lato/v13/tI4j516nok_GrVf4dhunkg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
      }

      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 300;
        src: local('Hind Vadodara Light'), local('HindVadodara-Light'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSDn3uW8-oBOL.woff2) format('woff2');
        unicode-range: U+0964-0965, U+0A80-0AFF, U+200C-200D, U+20B9, U+25CC, U+A830-A839;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 300;
        src: local('Hind Vadodara Light'), local('HindVadodara-Light'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSDn3uXo-oBOL.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 300;
        src: local('Hind Vadodara Light'), local('HindVadodara-Light'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSDn3uXQ-oA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* gujarati */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 400;
        src: local('Hind Vadodara Regular'), local('HindVadodara-Regular'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neINzCKvrIcn5pbuuuriV9tTQInVrEsf.woff2) format('woff2');
        unicode-range: U+0964-0965, U+0A80-0AFF, U+200C-200D, U+20B9, U+25CC, U+A830-A839;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 400;
        src: local('Hind Vadodara Regular'), local('HindVadodara-Regular'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neINzCKvrIcn5pbuuuriV9tTQJzVrEsf.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 400;
        src: local('Hind Vadodara Regular'), local('HindVadodara-Regular'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neINzCKvrIcn5pbuuuriV9tTQJLVrA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* gujarati */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 500;
        src: local('Hind Vadodara Medium'), local('HindVadodara-Medium'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSGH2uW8-oBOL.woff2) format('woff2');
        unicode-range: U+0964-0965, U+0A80-0AFF, U+200C-200D, U+20B9, U+25CC, U+A830-A839;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 500;
        src: local('Hind Vadodara Medium'), local('HindVadodara-Medium'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSGH2uXo-oBOL.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 500;
        src: local('Hind Vadodara Medium'), local('HindVadodara-Medium'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSGH2uXQ-oA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* gujarati */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 600;
        src: local('Hind Vadodara SemiBold'), local('HindVadodara-SemiBold'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSE3xuW8-oBOL.woff2) format('woff2');
        unicode-range: U+0964-0965, U+0A80-0AFF, U+200C-200D, U+20B9, U+25CC, U+A830-A839;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 600;
        src: local('Hind Vadodara SemiBold'), local('HindVadodara-SemiBold'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSE3xuXo-oBOL.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 600;
        src: local('Hind Vadodara SemiBold'), local('HindVadodara-SemiBold'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSE3xuXQ-oA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* gujarati */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 700;
        src: local('Hind Vadodara Bold'), local('HindVadodara-Bold'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSCnwuW8-oBOL.woff2) format('woff2');
        unicode-range: U+0964-0965, U+0A80-0AFF, U+200C-200D, U+20B9, U+25CC, U+A830-A839;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 700;
        src: local('Hind Vadodara Bold'), local('HindVadodara-Bold'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSCnwuXo-oBOL.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Hind Vadodara';
        font-style: normal;
        font-weight: 700;
        src: local('Hind Vadodara Bold'), local('HindVadodara-Bold'), url(https://fonts.gstatic.com/s/hindvadodara/v4/neIQzCKvrIcn5pbuuuriV9tTSCnwuXQ-oA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
            







`}
  />
);
