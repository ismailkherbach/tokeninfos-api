import { ethers } from "ethers";
import React, { useEffect } from "react";
import { useAccount } from "../../utils/etheruem/WalletConnector";
import { Button } from "../Core/Button";
import { WalletContainer } from "../Core/Container";
import { Description, Subtitle } from "../Core/Title";
import "./Wallet.scss";
export default function Wallet() {
  const {
    account,
    network,
    walletConnected,
    accountBalance,
    connectWallet,
    disconnect,
    checkWalletConnection,
  } = useAccount();
  useEffect(() => {
    checkWalletConnection();
  }, [walletConnected]);

  return (
    <WalletContainer classname="wallet jcfe">
      {walletConnected ? (
        <Button>
          Connected : {account} Balance:{accountBalance} {network.name}
        </Button>
      ) : (
        <Button onClick={connectWallet}>Connect</Button>
      )}
    </WalletContainer>
  );
}
