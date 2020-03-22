const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };
    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config;
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const cssloaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        },
        'css-loader'
    ];
    if (extra) {
        loaders.push(extra);
    }
    return loaders;
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: "./index.js"
    },
    output: {
        filename: 'js/' + filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.pug',
            minify: {
                collapsewhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template: './static/ui-kit/colors&type.pug',
            filename: 'static/ui-kit/' + filename('html'),
            path: path.resolve(__dirname, 'dist'),
            minify: {
                collapsewhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/' + filename('css'),
            path: path.resolve(__dirname, 'dist')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssloaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssloaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                use: ['file-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    }
};
