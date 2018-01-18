const path = require('path');

const config = {
    entry:{
        app:'./src/App.jsx'
    },
    output: { 
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/, 
                exclude: /node_modules/,
                loader:'babel-loader',
                options: {
                    presets: ["env","react"]
                }
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    watch: true,
    watchOptions:{
        ignored: /node_modules/
    },
    
    devServer:{
        contentBase: path.join(__dirname, 'dist')
    }
};

module.exports = config;

