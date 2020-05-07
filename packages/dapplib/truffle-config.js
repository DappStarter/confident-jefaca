require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn pull grace credit flee seed'; 
let testAccounts = [
"0x60060ab5957d13b274dd8f947385416487eec98a9d3e66d925dafd8f9677f710",
"0x67468bd341a8053d371253f840f32a49c37f916b16bfe60fa66aed5bdbd095a1",
"0x1bfe65c25b3b7e38775b24cd13348fd6836c15c0331e32a9362ee468191a816a",
"0x066fa634cf63f1e534f11356f6cef884a5eedcc1250c6bcfee4d00af999bdf72",
"0xc313ada4e5c45f5b6715f12b39a79b3b18cee3260789d4a2fa31fa4f9fa2d9cd",
"0x120c1b5825dc5bd62cafee4e9510eb2fda59b1277b2c9efb4602ff1918496e4d",
"0xbfe3b381b525f5ce63bdf33b3227eca52c8d00f6bafe30eae897fdb5484e7c02",
"0x8fcdb807e3524fc481f7f3ed6e30800714de7faab55a8bf12d676e2a6f1537a0",
"0x56ea269ec0111755cc712a5d1ff5ad05f9ffe5398e27e1e3ce634b949816e8fb",
"0xc4b0c1bcfbe8ffa943c46ebeeb342ade96cd91ea7dc46166d7a25aec935ce404"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
