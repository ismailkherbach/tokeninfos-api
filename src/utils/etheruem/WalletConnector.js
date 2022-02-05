import { utils, BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import { parseBalance } from "../helpers";

export const useAccount = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [errorWallet, setErrorWallet] = useState("");
  const [account, setAccount] = useState("");
  const [network, setNetwork] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  //   useEffect(() => {
  //     getTokenInfos({ symbol: "btc" });
  //   }, [wallet.tokenInfos, getTokenInfos]);

  const checkWalletConnection = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const balance = parseBalance(await signer.getBalance());
      const account = await signer.getAddress();
      setAccount(account);
      setWalletConnected(true);
      setAccountBalance(balance);
      await getNetwork();
    } catch {
      setWalletConnected(false);
    }
  };

  const getNetwork = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    setNetwork(network);
  };
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const method = "eth_requestAccounts";
        const accounts = await window.ethereum.request({
          method,
        });
        await getNetwork();
        if (accounts[0]) {
          setWalletConnected(true);
        } else {
          setWalletConnected(false);
        }
      } catch {
        setErrorWallet("Error occured please try again");
      }
    } else {
      setErrorWallet("Please install Metamask");
      setWalletConnected(false);
    }
  };
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        checkWalletConnection();
      });
    }
  }, []);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        checkWalletConnection();
      });
    }
  }, []);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("disconnect", () => {
        checkWalletConnection();
      });
    }
  }, []);

  return {
    account,
    network,
    errorWallet,
    walletConnected,
    accountBalance,
    connectWallet,
    checkWalletConnection,
  };
};
