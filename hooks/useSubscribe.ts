import { useContractEvent } from 'wagmi';
import Duels from '@/hooks/abis/Duels.json';

export const useSubscribe = ({ eventName, listener }: any) => {
  const chainId = parseInt(process.env.NEXT_PUBLIC_DUELS_CHAIN_ID as string);
  const address = process.env
    .NEXT_PUBLIC_DUELS_CONTRACT_ADDRESS as `0x${string}`;
  const abi = Duels.abi;

  return useContractEvent({
    chainId,
    eventName,
    address,
    abi,
    listener: listener as (...args: unknown[]) => void,
  });
};
