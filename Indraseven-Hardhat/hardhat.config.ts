import { defineConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

export default defineConfig({
  solidity: {
    // Menggunakan versi 0.8.29 sesuai permintaan sebelumnya
    version: "0.8.29",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
});

