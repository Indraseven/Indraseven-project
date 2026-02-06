require('dotenv').config();
const { ethers } = require('ethers');

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const ensName = process.env.ENS_DOMAIN;
    
    try {
        console.log('--- Memeriksa Web3 Environment ---');
        const blockNumber = await provider.getBlockNumber();
        console.log('Koneksi RPC Berhasil! Block saat ini:', blockNumber);
        
        // Catatan: ENS utama ada di Mainnet, Base Sepolia mungkin perlu resolver khusus
        console.log('Mencoba Resolving ENS:', ensName);
        const address = await provider.resolveName(ensName);
        console.log('Hasil Address:', address || 'Tidak ditemukan di network ini');
    } catch (error) {
        console.error('Terjadi Kesalahan:', error.message);
    }
}

main();
