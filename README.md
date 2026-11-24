# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/bagusin03/one-line-one-chill/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/bagusin03/one-line-one-chill/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

One sentence, 107 characters, the scariest line I could write in a single breath: a father watches the baby monitor and sees himself already upstairs, leaning over the crib.

`main.ts` writes that single line to `/output/entry.txt`:

> The baby monitor showed me leaning over the crib, whispering, 'Daddy's home,' while I was still downstairs.

Why this line: the scare is earned, not announced — no gore, no darkness-for-its-own-sake. The image is concrete (baby monitor, crib, a whispered "Daddy's home"), the dread outlasts the sentence (who is upstairs, and what does it want with the baby?), and the last word lands the twist: he was still downstairs. No mirror, no doll, no basement.

Offline and deterministic: no network, no clock, no randomness, no API key. A runtime guard enforces the 1–200 character single-line gate, requires plain ASCII so bytes and characters agree, and verifies the written file round-trips byte-identical.

Run it with Node 22+:

```
node main.ts
```
