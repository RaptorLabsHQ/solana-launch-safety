# Five checks before you sign on any Solana token creator

These checks take two minutes and need nothing but your wallet and an explorer. They apply to every no-code creator and launchpad, Solmint included.

## 1. Your wallet is the only signer

Open the wallet prompt and read the transaction summary. It should list one signer: you. A transaction that was partially signed by the service before it reached you is the pattern behind "approve once, lose everything" drains. If the prompt lists more than one signature or asks you to approve a message you did not initiate, close it.

## 2. The whole supply lands in your wallet

The transaction should create the mint, write the metadata and send the full supply to a token account owned by your wallet. If the summary shows tokens going anywhere else, or shows no token transfer to you at all, the service is keeping supply.

## 3. Authorities are revoked, or you chose to keep them

A Solana token has a mint authority (can print more) and a freeze authority (can freeze holders' accounts). A trustworthy creator revokes both by default and charges for keeping them, not for revoking them. After the mint, check the token on an explorer: both fields should read "none" unless you decided otherwise.

## 4. The transaction was simulated before the prompt

A good creator simulates the transaction against mainnet before your wallet opens and refuses to prompt you with one that would fail. Ask the service how it handles a failed simulation. "You pay and we retry" is the wrong answer.

## 5. Nobody ever asks for a seed phrase

No creator, launchpad, support agent or "verification bot" needs your seed phrase or private key for anything. The request itself is the tell. Close the page.

## After the mint: verify the token in thirty seconds

On Solscan, Solana Explorer or SolanaFM, open the mint address and read:

- **Mint authority** and **freeze authority**: "none" if you revoked them.
- **Supply** and **decimals**: what you set.
- **Metadata**: the name, symbol and image you chose, served from the URI the explorer shows. If the image is missing, the metadata document is not reachable, which is a creator problem, not a wallet problem.
- **Holders**: your wallet holding the full supply, until you add liquidity.

## What a wallet-draining page looks like

The drainer kit documented in this repository rendered a single "Connect Wallet" button on an otherwise empty page, loaded its code from a third-party static host, checked the visitor's country, and only then presented a transaction. A real creator shows the form, the price and the settings before it ever asks for a signature.
