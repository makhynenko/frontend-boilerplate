const express = require('express');
const path = require('path');

const PORT = 7700;
const PUBLIC_PATH = path.join(__dirname, 'public');
const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment) {
    /* eslint-disable global-require */
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.development.config');
    const compiler = webpack(webpackConfig);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: '',
    }));
    app.use(require('webpack-hot-middleware')(compiler));
    /* eslint-enable global-require */
    app.use(express.static(PUBLIC_PATH));
} else {
    app.use(express.static(PUBLIC_PATH));
    app.all('*', (req, res) => {
        res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`); // eslint-disable-line no-console
});
