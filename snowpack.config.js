// Consult https://www.snowpack.dev to learn about these options
module.exports = {
    extends: '@sveltejs/snowpack-config',
    plugins: ['@snowpack/plugin-typescript'],
    mount: {
        'src/components': '/_components',
        'src/util': '/_util',
        'src/data': '/_data',
    },
    alias: {
        $components: './src/components',
        $util: './src/util',
        $data: './src/data',
    },
};
