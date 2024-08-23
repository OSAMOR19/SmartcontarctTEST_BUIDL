import { ethers } from "ethers";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../src/store/auth/reducer";
import { tokenAddress, tokenABI } from "../constants/constant";
import toastService from "../lib/taostService";
import axios from "axios";

const useWallet = () => {
  const { user } = useSelector(selectAuth);
  const RPC = import.meta.env.VITE_RPC;
  const provider = useMemo(() => new ethers.JsonRpcProvider(RPC), [RPC]);

  const [balance, setBalance] = useState("0");
  const [tokenBalance, setTokenBalance] = useState("0");
  const [transactions, setTransactions] = useState([]);

  //   user address
  const address = user?.address;
  //   user mnemonic
  const mnemonic = user?.mnemonic;
  //   user private key
  const privateKey = user?.privateKey;

  //   ImportWallet function
  const importWallet = useCallback((mnemonic) => {
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    return {
      privateKey: wallet.privateKey,
      mnemonic,
      publicKey: wallet.publicKey,
      address: wallet.address,
    };
  }, []);

  //   Fetch balance
  useEffect(() => {
    const fetchBalance = async () => {
      if (address && provider) {
        const balanceWei = await provider.getBalance(address);
        const balanceEth = ethers.formatEther(balanceWei);
        setBalance(balanceEth);
      }
    };
    fetchBalance();
  }, [address, provider]);

  //   Fetch token balance
  useEffect(() => {
    const fetchTokenBalance = async () => {
      if (address && provider) {
        const tokenContract = new ethers.Contract(
          tokenAddress,
          tokenABI,
          provider
        );
        const balance = await tokenContract.balanceOf(address);
        const formattedBalance = ethers.formatUnits(balance, 18);
        setTokenBalance(formattedBalance);
      }
    };
    fetchTokenBalance();
  }, [address, provider]);

  //   Withdraw token
  const withdrawToken = useCallback(
    async (toAddress, amount) => {
      if (!address || !provider) return;

      try {
        const signer = new ethers.Wallet(user.privateKey, provider);
        const tokenContract = new ethers.Contract(
          tokenAddress,
          tokenABI,
          signer
        );

        const decimals = await tokenContract.decimals();
        const amountInWei = ethers.parseUnits(amount.toString(), decimals);

        const tx = await tokenContract.transfer(toAddress, amountInWei);
        await tx.wait();

        toastService.showSuccessMessage("Withdrawal successful");
        console.log("Transfer successful:", tx.hash);
        // Update balance or UI here
      } catch (error) {
        toastService.showErrorMessage("Withdrawal failed");
        console.error("Transfer failed:", error.message);
      }
    },
    [address, provider, user.privateKey]
  );

  //   Fetch transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!address) return;

      const apiKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
      const url = `https://api-goerli.basescan.org/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`;

      try {
        const response = await axios.get(url);
        setTransactions(response.data.result);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [address]);

  return {
    balance,
    tokenBalance,
    importWallet,
    withdrawToken,
    address,
    mnemonic,
    privateKey,
    transactions,
  };
};

export default useWallet;
