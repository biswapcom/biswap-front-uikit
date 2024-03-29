import React from "react";
//import { withThemesProvider } from "themeprovider-storybook";
import {withThemesProvider} from 'storybook-addon-styled-component-theme';

import light from "../src/theme/light";
import dark from "../src/theme/dark";
import ResetCSS from "../src/ResetCSS";
import { ModalProvider } from "../src/widgets/Modal";
import {MatchBreakpointsProvider} from "../src";

const globalDecorator = (StoryFn) => (
  <MatchBreakpointsProvider>
    <ModalProvider>
        <ResetCSS />
        <StoryFn />
    </ModalProvider>
  </MatchBreakpointsProvider>
);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
};

const themes = [
    {
        name: "Light",
        backgroundColor: light.colors.background,
        ...light,
    },
    {
        name: "Dark",
        backgroundColor: dark.colors.background,
        ...dark,
    },
];

export const decorators = [globalDecorator
//     ,{
//     name: "Dark",
//     backgroundColor: dark.colors.background,
//     ...dark,
// },
   ,withThemesProvider(themes)
];