const {default: ReactDocgenTypescriptPlugin} = require("react-docgen-typescript-plugin");

module.exports = {
    framework: "@storybook/react",
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    features: {
        postcss: false,
    },
    plugins: [new ReactDocgenTypescriptPlugin({ tsconfigPath: "../tsconfig.json" })],
    addons: [
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "storybook-addon-styled-component-theme/dist/preset"
        //"themeprovider-storybook/register",
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript-plugin',
        reactDocgenTypescriptOptions: {},
    },
};