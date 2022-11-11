import { createTheme, ThemeOptions, Typography, TypographyProps } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    NavHeader: true;
    UserName: true;
    UserRole: true;
    Email: true;
    DetailHeader: true;
    DetailItem: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  NavHeader: React.CSSProperties;
  UserName: React.CSSProperties;
  UserRole: React.CSSProperties;
  Email: React.CSSProperties;
  DetailHeader: React.CSSProperties;
  DetailItem: React.CSSProperties;
}

const breakpointTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const theme = createTheme({
  ...breakpointTheme,
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Open Sans'].join(','),
    NavHeader: {
      fontSize: '20px',
      color: '#4A4A4A',
      textTransform: 'uppercase',
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: '18px',
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: '16px',
      },
    },
    UserName: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#4A4A4A',
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: '12px',
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: '10px',
      },
    },
    UserRole: {
      fontSize: '12px',
      color: '#4A4A4A',
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: '10px',
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: '8px',
      },
    },
    Email: {
      fontSize: '12px',
      color: '#7E7E7E',
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: '10px',
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: '8px',
      },
    },
    DetailHeader: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#4A4A4A',
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: '10px',
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: '8px',
      },
    },
    DetailItem: {
      fontSize: '12px',
      color: '#4A4A4A',
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: '10px',
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: '8px',
      },
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions);

export const Text = (props: TypographyProps) => {
  return <Typography {...props} data-name="Text" />;
};
