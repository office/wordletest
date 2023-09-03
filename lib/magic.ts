import { Magic } from 'magic-sdk';

const network = {
  rpcUrl: process.env.NEXT_PUBLIC_RPC_URL as string,
  chainId: parseInt(process.env.NEXT_PUBLIC_DUELS_CHAIN_ID as string),
};

// Create client-side Magic instance
const createMagic = (key: string) => {
  return (
    typeof window != 'undefined' &&
    new Magic(key, {
      network,
    })
  );
};

const key: string ='pk_live_AF8ABAA0ADBCAB59';

export const magic: any = createMagic(key);
