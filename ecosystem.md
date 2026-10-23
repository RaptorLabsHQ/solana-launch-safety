# Infrastructure a Solana launch depends on

Public, widely used components, listed so that a launch can be checked against them. Inclusion is factual, not an endorsement, and nothing here is affiliated with RaptorLabs unless stated.

## Token standards

- [SPL Token](https://spl.solana.com/token): the standard fungible token program.
- [Token-2022 (Token Extensions)](https://spl.solana.com/token-2022): the newer program with extensions such as transfer fees, which is how creator-earnings tokens work.
- [Metaplex Token Metadata](https://developers.metaplex.com/token-metadata): the on-chain metadata account that wallets and explorers read for name, symbol and image.

## Explorers

- [Solscan](https://solscan.io)
- [Solana Explorer](https://explorer.solana.com)
- [SolanaFM](https://solana.fm)

## Wallets

- [Phantom](https://phantom.com)
- [Solflare](https://solflare.com)
- [Backpack](https://backpack.app)

## Where tokens trade

- [Raydium](https://raydium.io)
- [Orca](https://www.orca.so)
- [PumpSwap](https://swap.pump.fun)
- [Jupiter](https://jup.ag), the aggregator most wallets route through.

## Verification and safety

- [RugCheck](https://rugcheck.xyz): token risk report by mint address.
- [Phantom blocklist](https://github.com/phantom/blocklist): the public list Phantom warns on; pull requests are the intake.
- [Scam Sniffer scam-database](https://github.com/scamsniffer/scam-database): community-maintained list of malicious domains.
- [ChainPatrol](https://app.chainpatrol.io/chainpatrol/report): report form used by wallets and brands.
- [Chainabuse](https://www.chainabuse.com): public scam reports with on-chain addresses.
- [PhishDestroy](https://phishdestroy.io): takedown pipeline with public verdicts per domain.

## Solmint

- [solmint.dev](https://solmint.dev): no-code SPL and Token-2022 creator by RaptorLabs. The connected wallet is the only signer, the supply lands in that wallet, mint and freeze authority are revoked by default, and every transaction is simulated before the wallet prompt. Liquidity pools on Raydium, Orca and PumpSwap are created from the same dashboard.
