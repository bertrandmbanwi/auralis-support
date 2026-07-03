#!/usr/bin/env bash
# Auralis terminal preview: prints the 16-color ANSI palette your terminal
# theme provides, then an AURALIS wordmark drawn entirely with those colors.
# Pairs with "Auralis: Export Terminal Theme" — export a port, install it in
# your terminal, run this script, and the palette below becomes Auralis.

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

# 5-row block font for the AURALIS wordmark. Each column of each glyph is
# painted with a cycling bright ANSI background, so the art is drawn by the
# terminal theme itself.
rows=(
  ".AAA. U...U RRRR. .AAA. L.... IIIII .SSSS"
  "A...A U...U R...R A...A L.... ..I.. S...."
  "AAAAA U...U RRRR. AAAAA L.... ..I.. .SSS."
  "A...A U...U R.R.. A...A L.... ..I.. ....S"
  "A...A .UUU. R..RR A...A LLLLL IIIII SSSS."
)

# Bright red, green, yellow, blue, magenta, cyan.
colors=(9 10 11 12 13 14)

echo "AURALIS preview (uses your terminal theme colors):"
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
