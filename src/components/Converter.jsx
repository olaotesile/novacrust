import React, { useState } from 'react';
import { ChevronDown, Search, Wallet } from 'lucide-react';

const Converter = ({ onNext }) => {
    const [activeTab, setActiveTab] = useState('crypto-to-cash');
    const [payAmount, setPayAmount] = useState('1.00');
    const [receiveAmount, setReceiveAmount] = useState('1.00');
    const [isPayDropdownOpen, setIsPayDropdownOpen] = useState(false);
    const [payCurrency, setPayCurrency] = useState({ code: 'ETH', name: 'Ethereum', icon: '♦', isImage: false });

    const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(null);

    const wallets = [
        { id: 'metamask', name: 'Metamask', icon: '/assets/metamask.png', isImage: true },
        { id: 'rainbow', name: 'Rainbow', icon: '/assets/rainbow.png', isImage: true },
        { id: 'walletconnect', name: 'WalletConnect', icon: '/assets/walletconnect.png', isImage: true },
        { id: 'other', name: 'Other Crypto Wallets (Binance, Coinbase, Bybit etc)', icon: <Wallet size={16} color="#003B3E" />, isImage: false },
    ];

    const currencies = [
        { code: 'USDT - CELO', name: 'USDT - CELO', icon: '/assets/celo.png', isImage: true },
        { code: 'USDT - TON', name: 'USDT - TON', icon: '/assets/ton.png', isImage: true },
        { code: 'USDT - BNB', name: 'USDT - BNB', icon: '/assets/bnb.png', isImage: true },
        { code: 'ETH', name: 'Ethereum', icon: '♦', isImage: false, color: '#627EEA' },
    ];

    const tabs = [
        { id: 'crypto-to-cash', label: 'Crypto to cash' },
        { id: 'cash-to-crypto', label: 'Cash to crypto' },
        { id: 'crypto-to-fiat-loan', label: 'Crypto to fiat loan' },
    ];

    return (
        <div style={{ width: '560px', margin: '0 auto' }}>
            {/* Tabs */}
            <div style={{
                display: 'flex',
                background: '#F3F4F6',
                borderRadius: '9999px',
                padding: '2px',
                marginBottom: '42px',
                gap: '0',
                width: '380px',
                margin: '0 auto'
            }}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            flex: 1,
                            padding: '7.5px 10px',
                            borderRadius: '9999px',
                            fontSize: '13px',
                            fontWeight: '600',
                            whiteSpace: 'nowrap',
                            background: activeTab === tab.id ? '#003B3E' : 'transparent',
                            color: activeTab === tab.id ? '#FFFFFF' : '#6B7280',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Wrapper */}
            <div style={{ width: '518px', margin: '0 auto' }}>
                {/* Pay Card */}
                <div className="crypto-card">
                    <label className="input-label">You pay</label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <input
                            type="text"
                            className="amount-input"
                            value={payAmount}
                            onChange={(e) => setPayAmount(e.target.value)}
                        />
                        <div
                            className="currency-badge"
                            onClick={() => setIsPayDropdownOpen(!isPayDropdownOpen)}
                            style={{ cursor: 'pointer', position: 'relative' }}
                        >
                            <div style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {payCurrency.isImage ? (
                                    <img src={payCurrency.icon} alt={payCurrency.code} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                ) : (
                                    <span style={{ fontSize: '14px' }}>{payCurrency.icon}</span>
                                )}
                            </div>
                            <span>{payCurrency.code}</span>
                            <ChevronDown size={16} />

                            {isPayDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-search">
                                        <Search size={16} color="#9CA3AF" style={{ marginRight: '8px' }} />
                                        <input type="text" placeholder="Search" className="search-input" />
                                    </div>
                                    <div className="dropdown-list">
                                        {currencies.map((curr) => (
                                            <div
                                                key={curr.code}
                                                className="dropdown-item"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPayCurrency(curr);
                                                    setIsPayDropdownOpen(false);
                                                }}
                                            >
                                                <div className="curr-icon" style={{ background: curr.isImage ? 'transparent' : (curr.color || '#eee'), width: '28px', height: '28px' }}>
                                                    {curr.isImage ? (
                                                        <img src={curr.icon} alt={curr.code} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                    ) : (
                                                        curr.icon
                                                    )}
                                                </div>
                                                <span className="curr-name">{curr.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Receive Card */}
                <div className="crypto-card">
                    <label className="input-label">You receive</label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <input
                            type="text"
                            className="amount-input"
                            value={receiveAmount}
                            onChange={(e) => setReceiveAmount(e.target.value)}
                        />
                        <div className="currency-badge">
                            <span style={{ width: '20px', height: '20px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                🇳🇬
                            </span>
                            <span>NGN</span>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>

                {/* Pay From */}
                <div style={{ marginBottom: '20px', position: 'relative' }}>
                    <label style={{ color: '#003B3E', fontWeight: '700', fontSize: '15px', display: 'block', marginBottom: '8px' }}>
                        Pay from
                    </label>
                    <div
                        className="select-container"
                        onClick={() => setIsWalletDropdownOpen(!isWalletDropdownOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="select-box" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {selectedWallet ? (
                                <>
                                    <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {selectedWallet.isImage ? (
                                            <img src={selectedWallet.icon} alt={selectedWallet.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                        ) : (
                                            selectedWallet.icon
                                        )}
                                    </div>
                                    <span style={{ fontSize: '14px' }}>{selectedWallet.name}</span>
                                </>
                            ) : (
                                <span style={{ color: '#6B7280', fontSize: '14px' }}>Select an option</span>
                            )}
                        </div>
                        <ChevronDown size={20} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>

                    {isWalletDropdownOpen && (
                        <div className="dropdown-menu wallet-dropdown" style={{ width: '100%', top: 'calc(100% + 8px)' }}>
                            <div className="dropdown-list">
                                {wallets.map((wallet) => (
                                    <div
                                        key={wallet.id}
                                        className="dropdown-item"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedWallet(wallet);
                                            setIsWalletDropdownOpen(false);
                                        }}
                                        style={{ padding: '12px 16px' }}
                                    >
                                        <div className="curr-icon" style={{ background: 'transparent', width: '24px', height: '24px' }}>
                                            {wallet.isImage ? (
                                                <img src={wallet.icon} alt={wallet.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                            ) : (
                                                wallet.icon
                                            )}
                                        </div>
                                        <span className="curr-name" style={{ fontSize: '14px', marginLeft: '4px' }}>{wallet.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Pay To */}
                <div style={{ marginBottom: '8px' }}>
                    <label style={{ color: '#003B3E', fontWeight: '700', fontSize: '15px', display: 'block', marginBottom: '8px' }}>
                        Pay to
                    </label>
                    <div className="select-container">
                        <select className="select-box">
                            <option>Select an option</option>
                        </select>
                        <ChevronDown size={20} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>
                </div>

                <button className="btn-convert" onClick={onNext}>
                    Convert now
                </button>
            </div>
        </div>
    );
};

export default Converter;
