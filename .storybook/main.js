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
        reactDocgenTypescriptOptions: {
            propFilter: (prop) => {
                if (prop.name === 'children') {
                    return true;
                }

                if (prop.parent) {
                    return (
                        !/@types\/react/.test(prop.parent.fileName) &&
                        !/@emotion/.test(prop.parent.fileName)
                    );
                }
                return true;
            },
        },
    },
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        configFile: '../tsconfig.json',
                        transpileOnly: true
                    }
                },
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            ],
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    }
};