[![make.fun](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Erwinsays12/makefun-snooze-button-roast/rank.svg)](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Erwinsays12/makefun-snooze-button-roast/reward.svg)](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6)

# Snooze Button Roast

Entry for the [Snooze Button Roast](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one line roasting an alarm clock that rings at 6 AM on a Saturday to `/output/entry.txt`:

> My alarm clock rings at 6 AM on a Saturday like a rooster that flunked farm school and got a job in my bedroom.

The program is fully deterministic — it always writes the same curated line, so repeated runs produce byte-identical output. It validates the line against the gate (UTF-8 text, 1–200 characters, single line, not only whitespace) before writing, and reads the file back afterwards to confirm what landed on disk matches exactly.

## Run

```sh
node main.ts
```

`OUTPUT_PATH` may be set to override the output location for local testing (default `/output/entry.txt`).

## License

MIT — see [LICENSE](LICENSE).
