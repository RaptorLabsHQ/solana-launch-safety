# Contributing

## Adding or updating an entry

1. Open an issue with the Report template, or a pull request that edits `blocklist.json` only.
2. Every entry needs: `host`, `category` (one of the six in the README), `first_observed`, `last_checked`, `status`, `observed`, `also_listed_by` (may be empty) and `notes` (may be empty).
3. `observed` states what was seen, in neutral words. No motive, no adjectives, no guesses about who operates the host. If the host changed hands, say so.
4. Evidence must be one of: a saved copy of the page or loader (attach it or link a public archive), a public verdict by a wallet vendor, registrar, hosting provider or security vendor, or documented use of Solmint's names, handles or wording.
5. Run `node scripts/validate.mjs`. It checks the shape, rejects duplicate hosts and regenerates `hosts.txt`. Commit both files.
6. Nothing is removed silently. A host that is no longer live keeps its entry with an updated `status`.

## Disputes

Open an issue with the Dispute template. State the host, what you believe is inaccurate, and anything we can verify. Answered within seven days.

## Style

Plain words, short sentences, no em dashes. Dates are ISO (YYYY-MM-DD). Hosts are lowercase, without scheme or path, except where the path is the evidence (then it goes in `observed`, not in `host`).
