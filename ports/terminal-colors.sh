#!/usr/bin/env bash
# Syntalume terminal preview: prints the 16-color ANSI palette your terminal
# theme provides, then a SYNTALUME wordmark drawn entirely with those colors.
# Pairs with "Syntalume: Export Terminal Theme" — export a port, install it in
# your terminal, run this script, and the palette below becomes Syntalume.

set -euo pipefail

reset=$'\e[0m'

echo
echo "ANSI palette (0-15) from your terminal theme:"
echo
for row in 0 8; do
  line=""
  for offset in 0 1 2 3 4 5 6 7; do
    i=$((row + offset))
    # Readable label on both light and dark swatches.
    fg=$([ "$i" -eq 0 ] || [ "$i" -eq 8 ] && echo 97 || echo 30)
    line+=$'\e['"${fg}"$';48;5;'"${i}"'m '"$(printf '%02d' "$i")"' '"${reset} "
  done
  printf '  %b\n' "$line"
done
echo

# 5-row block font for the SYNTALUME wordmark. Each column of each glyph is
# painted with a cycling bright ANSI background, so the art is drawn by the
# terminal theme itself.
rows=(
  ".SSSS Y...Y N...N TTTTT .AAA. L.... U...U M...M EEEEE"
  "S.... .Y.Y. NN..N ..T.. A...A L.... U...U MM.MM E...."
  ".SSS. ..Y.. N.N.N ..T.. AAAAA L.... U...U M.M.M EEEE."
  "....S ..Y.. N..NN ..T.. A...A L.... U...U M...M E...."
  "SSSS. ..Y.. N...N ..T.. A...A LLLLL .UUU. M...M EEEEE"
)

# Bright red, green, yellow, blue, magenta, cyan.
colors=(9 10 11 12 13 14)

echo "SYNTALUME preview (uses your terminal theme colors):"
echo
for row in "${rows[@]}"; do
  line=""
  col=0
  for ((i = 0; i < ${#row}; i++)); do
    ch="${row:i:1}"
    if [ "$ch" = " " ]; then
      line+="  "
    else
      if [ "$ch" != "." ]; then
        color="${colors[$((col % 6))]}"
        line+=$'\e[48;5;'"${color}"'m  '"${reset}"
      else
        line+="  "
      fi
      col=$((col + 1))
    fi
  done
  printf '  %b\n' "$line"
done
echo
