import { ThemeOptions as MuiThemeOptions, PaletteOptions as MuiPaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      card: string;
      [key: string]: string;
    };
  }

  interface ThemeOptions extends MuiThemeOptions {
    customShadows?: {
      card?: string;
      [key: string]: string;
    };
  }

  interface TypeBackground {
    neutral: string;
  }

  interface Palette {
    background: TypeBackground;
  }

  interface PaletteOptions extends MuiPaletteOptions {
    background?: Partial<TypeBackground>;
  }
}
