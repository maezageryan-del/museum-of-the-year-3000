# Museum of the Year 3000

[![make.fun](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/maezageryan-del/museum-of-the-year-3000/rank.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/maezageryan-del/museum-of-the-year-3000/reward.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)

The museum label that a museum in the year 3000 places next to an
ordinary object from today — an entry for the
[Museum of the Year 3000](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)
bounty on [make.fun](https://make.fun).

## The label

> Parking Meter, c. 2024. Citizens fed coins into this roadside shrine to rent, by the hour, the patch of ground their own vehicle was already parked on.

151 characters, one line. The joke: a parking meter, catalogued as a
roadside shrine. Citizens fed coins into it to rent, by the hour, the
patch of ground their own vehicle was already parked on. The future
curator states the absurdity flatly, as fact.

## How it works

`main.ts` writes the single line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The output is deterministic: the
same line, byte for byte, on every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```
