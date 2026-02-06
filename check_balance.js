require('dotenv').config();
const { ethers } = require('ethers');

async function main() {
    try {
        const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        const balance = await provider.getBalance(wallet.address);

        console.log('\n==============================');
        console.log('Indraseven Wallet Report');
        console.log('Address :', wallet.address);
        console.log('Saldo   :', ethers.formatEther(balance), 'ETH');
        console.log('==============================\n');
    } catch (e) {
        console.log('Error: Cek kembali RPC_URL dan PRIVATE_KEY di .env');
        console.log('Detail Error:', e.message);
    }
}
main();

