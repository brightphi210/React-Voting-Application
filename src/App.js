import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logins from "./Logins";
import MainApp from "./MainApp";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import {contractAbi, contractAddress} from './Constant/constant';
function App() {


  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [votingStatus, setVotingStatus] = useState(true);
  const [remainingTime, setremainingTime] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState('');
  const [CanVote, setCanVote] = useState(true);
  const [isLoading, setIsloading] = useState(false);

  async function vote(e) {
    setIsloading(true);
    e.preventDefault();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      

      const tx = await contractInstance.vote(number);
      await tx.wait();
      canVote();
      setIsloading(false)
  }


  async function canVote() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, contractAbi, signer
      );
      const voteStatus = await contractInstance.voters(await signer.getAddress());
      setCanVote(voteStatus);
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setIsConnected(true);
        canVote();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser")
    }
  }


  useEffect(()=>{
    connectToMetamask()
  },[])

  // console.log('This is my account', account);
  // console.log('This is my status', votingStatus);


  return (
  <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logins /> }/>
        <Route path="/dashboard" element={<MainApp /> }/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
