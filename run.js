var nw = new NwBuilder({
    version: '0.14.7',
    files: './app/**',
    winIco: "./icons/icon.ico",
    macIcns: './icons/icon.icns',
    macPlist: {mac_bundle_id: 'xcaseEditorPkg'},
    buildDir: './buildApp',
    platforms: ['win32']/*['osx64', 'linux', 'win32']*/
});
// Log stuff you want
nw.on('log', function (msg) {
    console.log('nw-builder buildApp', msg);
});
