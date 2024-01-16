# Members Only

Welcome! MembersOnly is a web application that provides token-gated access to members-only content using Ethereum NFTs as a key.

![Landing Page](/app/public/LandingPage.png)
![Steve Club](/app/public/SteveClub.png)

# Key Features

1. Connect and authenticate user's wallet using Sign-In with Ethereum.
2. Allow user to mint non-fungible tokens (NFTs), paying in Ethereum.
3. Verify user owns particular NFT.
4. Display token-gated content based on NFT holder status.
5. Connect Spotify account and access public playlists.
6. Connect Discord account and access private channels via Collab.Land integration.

# Getting Started

We successfully deployed this app to Vercel. Link [here](https://qut-capstone-2023.vercel.app/). Connect your Web3 wallet to gain access to our site. 

Connect with us on Discord with the invitation link [here](https://discord.gg/Mz3VGaekfW).

# Overview of Tech Stack

To build `MembersOnly`, we have:

1. Used **NextJS** for front and back end
2. Used **Chakra UI** for frontend UI components
3. Used **RainbowKit SDK** to connect to wallets
4. Used **Alchemy** to verify owned NFTs
5. Used **Infura** to get total supply from the back end
6. Used **OpenZeppelin** smart contract standards (ERC721 NFT)
7. Used **MongoDB** for storing off-chain data (users Username, etc.)
8. Deployed contracts to **Ethereum Goerli Testnet**

# Solution Design

## Architecture Diagram
![Architecture Diagram](/app/public/ArchitectureDiagram.png)

## Sequence Diagram
![Sequence Diagram](/app/public/SequenceDiagram.png)


