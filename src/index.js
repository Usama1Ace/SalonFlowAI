module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.wasm'], // Include .wasm in the extensions
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/async', // Handle .wasm files as async WebAssembly modules
      },
    ],
  },
};