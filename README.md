# Block-Chain Based Voting System

This project is blockchain based voting dapp created in React and Solidity.

## Contributors

Bishal Chakraborty : https://www.linkedin.com/in/chakraborty11bishal
Poushali Chattopadhyay : https://github.com/poushalic34/E-Nirvachan
                         https://www.linkedin.com/in/poushali-chattopadhyay

## Project Description

“Blockchain Based Voting System” is a web based online voting system primarily based on ethereum blockchain technology. Blockchain is a transparent, distributed, immutable and trustless ledger and to overcome the problems of the traditional voting system, blockchain plays a vital role in terms of security, trust and more. Here anyone eligible for voting can vote for their favorite candidate and they can see the result after the end of the election. It is fast, secure, and has low cost as compared to traditional voting systems. Some key features of our system are:

a) Decentralized & Transparent

b) Trustless

c) Immutable
## Installation

### Step 1. Clone the project

Download the folder as a zip file and extract it in a text editor like VS Code.

### Step 2. Start Ganache

Open the Ganache GUI client to start the local blockchain instance.

### Step 3. Compile & Deploy Election Smart Contract

```truffle migrate --reset```

We must migrate the election smart contract each time restart ganache.

### Step 4. Configure Metamask

- Unlock Metamask
- Connect metamask to the local Etherum blockchain provided by Ganache.
- Import an account provided by Ganache.

### Step 5. Run the Front End Application

```powershell
cd .\client
yarn install
yarn start
```

Visit URL in your browser: <http://localhost:3000>

## Next Steps

- Better legitimate user checking through biometrics
- Better voters and candidate data insertion
- Multiple candidate positions for votin
