"use client"

import React, { useState } from 'react';
import {   Check } from 'lucide-react';

const Landing = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`{
  "mcpServers": {
    "hedera": {
      "command": "npx",
      "args": [
        "-y",
        "hedera-mcp",
        "--hedera_account_id=YOUR_ACCOUNT_ID",
        "--hedera_private_key=YOUR_PRIVATE_KEY",
        "--hedera_network=testnet"
      ],
      "disabled": false
    }
  }
}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">Hedera MCP</span>
                    </div>
                    <div className="flex gap-4">
                     
                        <a href="https://github.com/pisuthd/hedera-mcp" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 flex items-center gap-1">
                          
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="py-20 pb-0 px-6">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Fully Functional MCP for Hedera
                    </h1>
                    <p className="text-xl text-gray-600  max-w-4xl mx-auto">
                        Enables AI assistants that support the Model Context Protocol to become fully functional Web3 agents, allowing them to create tokens, transfer assets, and interact with Hedera.
                    </p>
                </div>
            </section>

            <section id="installation" className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-16">Get Started</h2>

                    <p className="text-lg text-gray-600 mb-6 text-center">
                        Install an MCP-compatible client such as Claude Desktop:
                    </p>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
                        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                            <span className="font-mono">On Ubuntu</span>
                        </div>
                        <div className="p-6 bg-gray-900 text-gray-100 font-mono overflow-x-auto">
                            <pre>{`# Clone the repository
git clone https://github.com/aaddrick/claude-desktop-debian.git
cd claude-desktop-debian
 
# Build the package
./build.sh
`}</pre>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 text-center">
                        Then configure Claude Desktop to use Hedera MCP:
                    </p>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                            <span className="font-mono">Claude Desktop Configuration</span>
                            <button
                                onClick={handleCopy}
                                className={`text-xs py-1 px-3 rounded ${copied ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-700'} transition`}
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <div className="p-6 bg-gray-900 text-gray-100 font-mono text-sm overflow-x-auto">
                            <pre>{`{
  "mcpServers": {
    "hedera": {
      "command": "npx",
      "args": [
        "-y",
        "hedera-mcp",
        "--hedera_account_id=YOUR_ACCOUNT_ID",
        "--hedera_private_key=YOUR_PRIVATE_KEY",
        "--hedera_network=testnet"
      ],
      "disabled": false
    }
  }
}`}</pre>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start mt-12">


                    <div className="bg-white p-6 rounded-lg shadow-md flex-1 max-w-xs">
                        <h3 className="font-bold text-lg mb-2">Available MCP Tools</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span>Account Operations</span><span className="bg-purple-100 ml-auto text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">4 Tools</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>Token Operations</span>
                                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full ml-auto">7 Tools</span>


                            </li>
                            <li className="flex items-center gap-2">
                                <span>Token Distribution Tools</span>
                                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full  ml-auto">4 Tools</span>

                            </li>
                            <li className="flex items-center gap-2">
                                <span>Search & Analytics</span>
                                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full  ml-auto">1 Tools</span>

                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex-1 max-w-xs">
                        <h3 className="font-bold text-lg mb-2">Supported Networks</h3>
                        <ul className="space-y-2">
                            <RequirementItem text="Hedera Testnet" />
                            <RequirementItem text="Hedera Mainnet" />
                        </ul>
                    </div>


                    <div className="bg-white p-6 rounded-lg shadow-md flex-1 max-w-xs">
                        <h3 className="font-bold text-lg mb-2">Use Cases</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <span className="text-xl">🎮</span>
                                </div>
                                <span>NFT & Digital Collectibles</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <span className="text-xl">💸</span>
                                </div>
                                <span>Token-Based Loyalty Programs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <span className="text-xl">🏛️</span>
                                </div>
                                <span>DAO Governance & Treasury</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                    <span className="text-xl">🔄</span>
                                </div>
                                <span>DeFi & Tokenized Assets</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>



            {/* Examples */}
            <section id="examples" className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-16">Conversational examples</h2>

                    <div className="space-y-10">
                        <ExampleConversation
                            question="help send 0.5 HBAR to account 0.0.4299366?"
                            answer="I'll help you send 0.5 HBAR to account 0.0.4299366. Let me execute that transaction for you."
                        />

                        <ExampleConversation
                            question="suggest how we can Create fungible tokens on Hedera?"
                            answer="I'd be happy to suggest how you can create fungible tokens on Hedera! Here's a step-by-step approach: 1. Choose a token name and symbol (e.g., MyToken and MTK) 2. Determine the number of decimal places (typically 2-18) 3. Decide on an initial supply"
                        />

                        <ExampleConversation
                            question="help check my current HBAR balance ?"
                            answer="I've checked your account, and your current HBAR balance is 95.99261739 HBAR. This reflects the 1 HBAR transfer you just made to account 0.0.4299366, plus the transaction fee that was deducted when processing the transfer."
                        />
                    </div>


                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 px-6">
                <div className="container mx-auto max-w-6xl">


                    <div className="   flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Hedera MCP. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <a  href="https://github.com/pisuthd/hedera-mcp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function RequirementItem({ text }: any) {
    return (
        <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span>{text}</span>
        </li>
    );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function ExampleConversation({ question, answer }: any) {
    return (
        <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-100 p-4 border-b border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-gray-600 font-bold">
                        ME
                    </div>
                    <div className="pt-1">
                        <p className="text-gray-700">{question}</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 font-bold">
                        AI
                    </div>
                    <div className="pt-1">
                        <p className="text-gray-700 line-clamp-2">{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing