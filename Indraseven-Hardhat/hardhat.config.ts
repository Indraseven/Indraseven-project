import { defineConfig } from "hardhat/config";
import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";

export default defineConfig({
  // Standar Doc: Daftarkan plugin toolbox viem
  plugins: [hardhatToolboxViemPlugin],

  solidity: {
    version: "0.8.29",
  },
  
  // Standar Doc: Biarkan kosong agar otomatis menggunakan internal network
  networks: {},
});

