import { utils, BigNumber, ethers } from "ethers";

export const parseBalance = (balance) => {
  return parseFloat(utils.formatEther(balance)).toFixed(3);
};
