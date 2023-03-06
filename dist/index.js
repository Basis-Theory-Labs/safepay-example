function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "project", function () { return $5395a0f1ff554684$export$ab03b6763ed7026f; });
/* eslint-disable import/extensions,import/no-unresolved,@typescript-eslint/ban-ts-comment */ // @ts-ignore
var $60132404ee6e29eb$exports = {};
$60132404ee6e29eb$exports = "import React from 'react';\nimport {\n  BasisTheoryProvider,\n  useBasisTheory,\n} from '@basis-theory/basis-theory-react';\nimport { alpha, createTheme, CssBaseline, ThemeProvider } from '@mui/material';\nimport { Checkout } from './Checkout';\nimport { Container } from './Container';\n\nconst theme = createTheme({\n  palette: {\n    mode: 'dark',\n    primary: {\n      main: '#00D2EF',\n      contrastText: alpha('#000', 0.87),\n    },\n    background: {\n      default: '#0D0A2C',\n    },\n    text: {\n      primary: '#EBEDFF',\n      secondary: '#E2E6FFB2',\n    },\n  },\n  typography: {\n    fontFamily: \"'Inter'\",\n    h1: {\n      fontFamily: \"'Poppins'\",\n      fontSize: '17px',\n    },\n    h2: {\n      fontFamily: \"'Outfit'\",\n      fontSize: '16px',\n    },\n  },\n  components: {\n    MuiButton: {\n      styleOverrides: {\n        contained: {\n          textTransform: 'none',\n          fontWeight: '600',\n        },\n      },\n    },\n  },\n});\n\nconst App = () => {\n  const { bt } = useBasisTheory('test_123456789', { elements: true });\n\n  return (\n    <ThemeProvider theme={theme}>\n      <CssBaseline />\n      <BasisTheoryProvider bt={bt}>\n        <Container>\n          <Checkout />\n        </Container>\n      </BasisTheoryProvider>\n    </ThemeProvider>\n  );\n};\n\nexport default App;\nexport { App };\n";


var $3b4a0e9b1b883ddb$exports = {};
$3b4a0e9b1b883ddb$exports = "import React, { PropsWithChildren } from 'react';\nimport { alpha, Box, useTheme } from '@mui/material';\n\nexport const CardWrapper = ({ children }: PropsWithChildren) => {\n  const theme = useTheme();\n\n  return (\n    <Box\n      sx={{\n        backgroundColor: alpha(theme.palette.common.white, 0.11),\n        boxShadow:\n          '0px 2px 6px rgba(4, 6, 17, 0.2), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1)',\n        borderRadius: 2,\n        my: 2,\n        p: 1.5,\n      }}\n    >\n      {children}\n    </Box>\n  );\n};\n";


var $12a5e40664782974$exports = {};
$12a5e40664782974$exports = "import React from 'react';\nimport { CardElement, useBasisTheory } from '@basis-theory/basis-theory-react';\nimport { Button, Typography } from '@mui/material';\nimport { CardWrapper } from './CardWrapper';\n\nexport const Checkout = () => {\n  const { bt } = useBasisTheory();\n\n  return (\n    <>\n      <Typography variant=\"h2\">Checkout</Typography>\n      <Typography color=\"text.secondary\" variant=\"body2\">\n        Type in your credit card number.\n      </Typography>\n      <CardWrapper>\n        <CardElement\n          id=\"my-card\"\n          style={{\n            base: {\n              color: '#EBEDFF',\n            },\n          }}\n        />\n      </CardWrapper>\n      <Button color=\"primary\" variant=\"contained\">\n        Submit\n      </Button>\n    </>\n  );\n};\n";


var $c3aee4cff9924ef2$exports = {};
$c3aee4cff9924ef2$exports = "import React, { PropsWithChildren } from 'react';\nimport { Box, Divider, Typography } from '@mui/material';\n\nconst Circle = () => (\n  <Box\n    sx={{\n      width: '10px',\n      height: '10px',\n      background: 'rgba(196, 200, 224, 0.2)',\n      borderRadius: 2,\n      marginRight: '6px',\n      border: '0.799749px solid rgba(255, 255, 255, 0.08)',\n    }}\n  />\n);\n\nexport const Container = ({ children }: PropsWithChildren) => (\n  <Box\n    sx={{\n      background: 'linear-gradient(214.58deg, #411FA9 22.45%, #009FAC 92.89%)',\n      height: '100vh',\n      p: 6,\n      filter:\n        'drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.13)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0934511)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0774939)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.065)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0525061)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0365489))',\n    }}\n  >\n    <Box\n      sx={{\n        border: '0.999686px solid rgba(255, 255, 255, 0.1)',\n        borderRadius: 2,\n        background:\n          'linear-gradient(123.76deg, #1C2036 21.28%, #0D1025 112.39%)',\n        boxShadow:\n          '0px 100px 80px rgba(0, 0, 0, 0.14), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.10064), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.083455), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.07), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.056545), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0393604)',\n      }}\n    >\n      <Box\n        sx={{\n          display: 'flex',\n          background: 'rgba(255, 255, 255, 0.06)',\n          padding: '11px 14px',\n        }}\n      >\n        <Circle />\n        <Circle />\n        <Circle />\n      </Box>\n      <Box px={5} py={4}>\n        <Box alignItems=\"center\" display=\"flex\">\n          <svg\n            fill=\"none\"\n            height=\"26\"\n            viewBox=\"0 0 23 26\"\n            width=\"23\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              d=\"M12.3224 0.462906C11.6593 0.1682 10.9024 0.1682 10.2393 0.462906L1.52295 4.33685C0.596844 4.74846 0 5.66686 0 6.68032V12.5343C0 19.2716 4.51461 23.1803 10.6745 24.8546C11.0715 24.9625 11.4903 24.9625 11.8873 24.8546C18.0471 23.1803 22.5618 19.2716 22.5618 12.5343V6.68032C22.5618 5.66686 21.9649 4.74846 21.0388 4.33686L12.3224 0.462906Z\"\n              fill=\"#7479FF\"\n            />\n            <path\n              d=\"M12.502 7.06518C11.9291 7.02617 11.3454 7.19173 10.8788 7.52619C10.3577 7.89068 9.98833 8.46155 9.86435 9.08478C9.68826 9.92311 9.97986 10.84 10.608 11.4227C10.6973 11.513 10.819 11.579 10.8685 11.7022C10.9134 11.8087 10.9188 11.9442 10.8475 12.041C10.7989 12.1052 10.7127 12.1134 10.6383 12.1124C10.1244 12.1113 9.61049 12.1134 9.09661 12.1113C8.51984 12.1077 7.93973 11.9288 7.47795 11.5792C7.28108 11.4334 7.11115 11.252 6.98204 11.0435C6.894 10.9039 6.67402 10.8947 6.57186 11.0233C6.09058 11.5697 5.80951 12.2836 5.76715 13.0092C5.72865 13.6258 5.85725 14.2439 6.0857 14.815C6.34854 15.5073 6.894 16.0568 7.51646 16.4396C7.93896 16.6985 8.39637 16.9021 8.87432 17.034C9.45725 17.1965 10.0599 17.2825 10.6637 17.3097C11.6878 17.3526 12.7325 17.223 13.6838 16.8282C14.1086 16.6477 14.5247 16.4254 14.8597 16.103C15.2681 15.717 15.5522 15.1969 15.6318 14.6389C15.7039 14.1148 15.6341 13.5678 15.4126 13.0857C15.2137 12.6473 14.9054 12.2671 14.5573 11.9381C14.4703 11.8544 14.3684 11.7802 14.3122 11.6706C14.2236 11.5066 14.2313 11.2948 14.3343 11.1388C14.4662 10.9475 14.6443 10.7917 14.8422 10.6716C15.3194 10.3769 15.7594 9.98702 16.0112 9.47776C16.0587 9.3987 15.9953 9.28704 15.9031 9.2873C15.5679 9.25958 15.2324 9.22313 14.9033 9.15126C14.8445 9.13945 14.8122 9.08272 14.8024 9.02753C14.6813 8.4885 14.374 7.99438 13.9485 7.64247C13.5434 7.30364 13.0295 7.0965 12.502 7.06518Z\"\n              fill=\"white\"\n            />\n          </svg>\n          <Typography sx={{ ml: '10px' }} variant=\"h1\">\n            {'Safe Pay'}\n          </Typography>\n        </Box>\n        <Divider sx={{ my: 2 }} />\n        {children}\n      </Box>\n    </Box>\n  </Box>\n);\n";


const $0ee0ac04974f96cc$export$3a444357c5f65f65 = {
    "/App.tsx": {
        hidden: true,
        code: (0, (/*@__PURE__*/$parcel$interopDefault($60132404ee6e29eb$exports)))
    },
    "/Container.tsx": {
        hidden: true,
        code: (0, (/*@__PURE__*/$parcel$interopDefault($c3aee4cff9924ef2$exports)))
    },
    "/Checkout.tsx": {
        active: true,
        code: (0, (/*@__PURE__*/$parcel$interopDefault($12a5e40664782974$exports)))
    },
    "/CardWrapper.tsx": {
        code: (0, (/*@__PURE__*/$parcel$interopDefault($3b4a0e9b1b883ddb$exports)))
    }
};
 /* eslint-enable import/extensions,import/no-unresolved,@typescript-eslint/ban-ts-comment */ 

const $5395a0f1ff554684$export$ab03b6763ed7026f = {
    customSetup: {
        dependencies: {
            "@basis-theory/basis-theory-react": "latest",
            "@mui/material": "^5",
            "@emotion/react": "^11",
            "@emotion/styled": "^11"
        }
    },
    files: $0ee0ac04974f96cc$export$3a444357c5f65f65,
    options: {
        externalResources: [
            "https://fonts.googleapis.com",
            "https://fonts.gstatic.com",
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500&family=Poppins:wght@600&display=swap"
        ]
    },
    template: "react-ts"
};
window.SafePayExampleProject = $5395a0f1ff554684$export$ab03b6763ed7026f;


