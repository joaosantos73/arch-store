import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,

      background: string,
      text: string,

      border: string,
      links: string,
      icons: string,
      textSpan: string,
      menu: string
    },
  }
}