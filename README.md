# Solana Launch Safety

A public, evidence-backed record of hosts that drained wallets of Solana token creators or impersonated [Solmint](https://solmint.dev), plus a verification checklist anyone can run before signing a transaction on any token creator or launchpad.

Maintained by [RaptorLabs](https://raptorlabs.dev), the company behind Solmint. Contact for reports and disputes: security@raptorlabs.dev.

## What is in this repository

| File | What it is |
|---|---|
| [`blocklist.json`](./blocklist.json) | The full record: one entry per host with category, dates, current status, what was observed, who else lists it, and notes. This is the source of truth. |
| [`hosts.txt`](./hosts.txt) | One hostname per line, only the `drainer` and `impersonation` categories. For wallets, extensions, DNS filters and allow/deny tooling. |
| [`checklist.md`](./checklist.md) | Five checks to run before you sign on any token creator, and how to verify a finished token on an explorer. |
| [`ecosystem.md`](./ecosystem.md) | Infrastructure a Solana launch depends on: standards, explorers, wallets, DEXs and verification tools. |
| [`schema.json`](./schema.json) | The shape every entry must satisfy. `node scripts/validate.mjs` checks it and regenerates `hosts.txt`. |

## Categories

- **drainer**: served, loaded or backed a wallet-draining kit at the time of observation. The evidence is a saved copy of the code or a public verdict by a third party.
- **impersonation**: presented itself as Solmint or used Solmint's names, handles or wording to mislead users. No wallet-draining behaviour was observed unless the entry says so.
- **third-party-blocklist**: listed by a wallet or security vendor before Solmint existed under that name, so users can see the entry is not ours.
- **lookalike-suspended**: a look-alike name that its registrar suspended. Kept for the record.
- **lookalike-watch**: a registered look-alike with no content or activity observed at the last review. Not affiliated with solmint.dev. No concern is implied.
- **not-affiliated**: a separate service or site with a similar name. Not affiliated with solmint.dev. No concern is implied; listed only so people can tell the names apart.

Only the first two categories belong in a block decision. The other four exist to answer the question "is this Solmint?", which is the question most people bring here.

## Evidence standard

An entry is added only when at least one of these holds:

1. A copy of the offending code or page was saved and the behaviour can be described from it.
2. A wallet vendor, a registrar, a hosting provider or a security vendor has published or confirmed a verdict (restriction, suspension, sinkhole, blocklist entry).
3. The host used Solmint's names, handles or wording in a way that misleads, and that use is documented.

Each entry states what was observed in neutral words and never a motive. Where a domain changed hands, the entry says so and makes no statement about who operates it. Entries are re-checked and their `status` and `last_checked` fields updated; nothing is silently removed.

## Disputes and removals

If you operate a listed host and believe the entry is wrong or out of date, open an issue with the **Dispute** template or write to security@raptorlabs.dev. State the host, what you believe is inaccurate, and anything we can verify. Disputes are answered within seven days. A corrected entry keeps its history in the git log.

## Reporting a new host

Open an issue with the **Report** template, or send the host and what you saw to security@raptorlabs.dev. A saved copy of the page or the loader, or a link to a public verdict, lets us add it the same day.

## Using the data

```sh
curl -s https://raw.githubusercontent.com/RaptorLabsHQ/solana-launch-safety/main/hosts.txt
curl -s https://raw.githubusercontent.com/RaptorLabsHQ/solana-launch-safety/main/blocklist.json | jq '.entries[] | select(.category=="drainer") | .host'
```

Attribution is appreciated and required by the data licence: "Source: RaptorLabs, solana-launch-safety".

## Licence

Data (`blocklist.json`, `hosts.txt`) is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Text and scripts are released under the MIT licence. See [`LICENSE`](./LICENSE).

## Why this exists

Solmint mints tokens from the user's own wallet in one signed transaction, and the people who search for it are exactly the people drainers target. In October 2026 the Solmint team documented and reported a live wallet-draining kit behind a look-alike brand and an impersonation site that copied Solmint's handle and fabricated its statistics; both were restricted by their hosts within days. The filings, the saved evidence and the statuses are kept here so that the next person who searches a similar name finds the record first.
