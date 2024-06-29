import React, { useState } from "react";
import BottomNavigation from "../components/BottomNavigation";
import ChatbotButton from "../components/ChildrenScreen/ChatbotButton";
import WalletHeader from "../components/Wallet/WalletHeader";
import wallet from "../assets/wallet.png";
import TransactionList from "../components/WalletParent/TransactionList";
import TransactionDetail from "../components/WalletParent/TransactionDetail";

const WalletParentScreen = () => {
  const [showFinishedTasks, setShowFinishedTasks] = useState(true);
  const [isTransOpen, setIsTransOpen] = useState(false);
  const [selectedTran, setSelectedTran] = useState(null);

  const handleTransactionClick = (tran) => {
    setSelectedTran(tran);
    setIsTransOpen(true);
  };

  const handleTransClose = () => {
    setIsTransOpen(false);
    setSelectedTran(null);
  };

  return (
    <div className="relative min-h-screen bg-white h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
      <WalletHeader />
      <div className='pt-20 pb-12'>
        <div className="flex justify-center items-center">
          <img src={wallet} className="h-32" />
        </div>
      </div>

      <div className="flex justify-left space-x-4 my-4 flex-shrink-0">
        <button
          className={`px-4 py-2 rounded-full ${!showFinishedTasks ? "bg-mainColor text-black" : "bg-gray-200"}`}
          onClick={() => setShowFinishedTasks(false)}
        >
          History
        </button>
        <button
          className={`px-4 py-2 rounded-full ${showFinishedTasks ? "bg-mainColor text-black" : "bg-gray-200"}`}
          onClick={() => setShowFinishedTasks(true)}
        >
          Pending
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        <TransactionList onTransactionClick={handleTransactionClick} />
      </div>

      <div className={`absolute inset-0 transition-transform duration-500 transform ${isTransOpen ? 'translate-y-0' : 'translate-y-[300%]'}`} style={{ zIndex: 10 }}>
        <TransactionDetail tran={selectedTran} onClose={handleTransClose} />
      </div>

      <div className="flex-shrink-0">
        <BottomNavigation />
      </div>

      <ChatbotButton />
    </div>
  );
};

export default WalletParentScreen;
