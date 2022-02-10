require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note payment cluster include kiwi system that'; 
let testAccounts = [
"0xdd754dd7e8bc74e30ec8476cb340923811aa60e2c9769f3e1895827458fedc2e",
"0xc88195e1883a94b375ea290b2500d6687ee2ae64fd58f79e691fc69f891e93ed",
"0xd34fee024ac9ab928fec958b37a6b67fdc32838c4a6293f9f0e8364cac17bfcb",
"0x6f01b1970a2da3831707b8195d89a32e4989c20bae7f987deb2d4e4514e7e69b",
"0xd3555b9dc5b01bf1bd3836dd732d3f102a14d7b8aa55013f0295fc2e1e65d380",
"0xf2d9825d35662c8c866e9b20fb48acbc520eff9f70921fdc558d61ee453cc53a",
"0xb3d78e598d1a61c9deac0f3c52a8ae14d94097b7bbf500ba03ee3b3b9e4c770b",
"0xb5ce7a94e9edb5213cd935063ec95406be0781354f714bb9a110071cbd46e70e",
"0xc0b9e55cbb643202c6be1fc21f49f3ee776aff54d1150e5b3c176e5835bae06b",
"0xa4db810502e8be3a31ae0d3c019474043c4d6b1df0e490616a9c9899ab015a7a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


