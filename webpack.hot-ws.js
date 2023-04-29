const webpack = require('webpack');
const { merge } = require('webpack-merge');
const dev = require('./webpack.js');

module.exports = merge(dev, {
	devServer: {
		webSocketServer: 'ws',
		client: {
			webSocketTransport: 'ws',
			webSocketURL: 'ws://nextcloud.local:3000/ws',
			progress: true,
			overlay: true,
		},
	},
})
