import React from 'react';
import { ThemeProvider } from '../src/ThemeProvider';
import { VisuallyHidden } from '../src/VisuallyHidden';
import { lightTheme } from '../src/themes/light-theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <main>
        <VisuallyHidden>
          {/* Necessary in order to prevent axe core from providing errors on main / heading */}
          <h1>Storybook story</h1>
        </VisuallyHidden>

        <Story />
      </main>
    </ThemeProvider>
  ),
];