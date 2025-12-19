import React from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const RecipientDetails = ({ onBack }) => {
    return (
        <div style={{ width: '560px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginBottom: '42px',
                width: '518px',
                margin: '0 auto 42px auto'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        position: 'absolute',
                        left: 0,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <ArrowLeft size={24} color="#003B3E" />
                </button>
                <h2 style={{
                    color: '#003B3E',
                    fontSize: '20px',
                    fontWeight: '700',
                    margin: 0,
                    fontFamily: 'Outfit, sans-serif'
                }}>
                    Recipient details
                </h2>
            </div>

            {/* Content Wrapper */}
            <div style={{ width: '518px', margin: '0 auto' }}>
                {/* Bank Selection */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ color: '#003B3E', fontWeight: '700', fontSize: '15px', display: 'block', marginBottom: '8px' }}>
                        Bank
                    </label>
                    <div className="select-container">
                        <select className="select-box">
                            <option>Select an option</option>
                        </select>
                        <ChevronDown size={20} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>
                </div>

                {/* Account Number */}
                <div style={{ marginBottom: '24px' }}>
                    <label style={{ color: '#003B3E', fontWeight: '700', fontSize: '15px', display: 'block', marginBottom: '8px' }}>
                        Account number
                    </label>
                    <div className="select-container">
                        <input
                            type="text"
                            className="select-box"
                            placeholder="Enter your account number"
                            style={{ background: '#FFFFFF' }}
                        />
                    </div>
                </div>

                {/* Account Number Result */}
                <div style={{ marginBottom: '40px' }}>
                    <label style={{ color: '#003B3E', fontWeight: '700', fontSize: '15px', display: 'block', marginBottom: '8px' }}>
                        Account number
                    </label>
                    <div style={{
                        background: '#F3F4F6',
                        borderRadius: '24px',
                        padding: '16px 20px',
                        color: '#003B3E',
                        fontSize: '15px',
                        fontWeight: '600',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        ODUTUGA GBEKE
                    </div>
                </div>

                <button className="btn-convert">
                    Next
                </button>
            </div>
        </div>
    );
};

export default RecipientDetails;
