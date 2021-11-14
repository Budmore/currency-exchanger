const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const prodConfig = {
    mode: 'production',
};

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        historyApiFallback: true,
    },
};

module.exports = ({ env }) => {
    const isDeveleopment = env !== 'production';

    return {
        entry: path.resolve(__dirname, './src/index.tsx'),
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|)$/,
                    type: 'asset/inline',
                },
            ],
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
            }),
            new Dotenv(),
        ],
        stats: 'errors-only',
        ...(isDeveleopment ? devConfig : prodConfig),
    };
};
