module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    features: {
        postcss: false,
    },
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
};