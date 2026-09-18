#!/bin/bash
set -e

# Dimensions: 1400x74
W=1400
H=74

# 1. Generate Vespa.cat badge (100x42)
convert -size 100x42 xc:'#facc15' \
  -stroke '#09090b' -strokewidth 4 \
  -draw "line -10,10 20,-10" \
  -draw "line 0,40 40,0" \
  -draw "line 20,50 60,10" \
  -draw "line 40,60 80,20" \
  -draw "line 60,70 100,30" \
  -draw "line 80,80 120,40" \
  -stroke none -fill '#09090b' -draw "roundrectangle 6,8 94,34 10,10" \
  -fill '#ffffff' -font "Liberation-Sans-Bold" -pointsize 10.5 -gravity center -annotate +0+0 "www.vespa.cat" \
  /tmp/badge_vespa.png

# 2. Generate IRTA logo (circle orange with text)
convert -size 44x44 xc:none \
  -fill '#ea580c' -draw "circle 22,22 22,2" \
  -fill '#ffffff' -font "Liberation-Sans-Bold" -pointsize 14 -gravity center -annotate +0+1 "irta" \
  /tmp/badge_irta.png

# 3. Prepare resized components
convert public/part_bufalvent.png -resize x44 /tmp/comp_bufalvent.png
convert public/part_uab.png -resize x40 /tmp/comp_uab.png
convert public/cand2.png -resize x46 /tmp/comp_asturias.png
convert public/cand1.png -resize x52 /tmp/comp_institucional.png

# 4. Create base white canvas and draw the left enclosing box
convert -size ${W}x${H} xc:white \
  -stroke '#cbd5e1' -strokewidth 1.5 -fill none \
  -draw "roundrectangle 12,8 570,66 6,6" \
  /tmp/canvas_base.png

# 5. Composite all components into the canvas
convert /tmp/canvas_base.png \
  /tmp/badge_vespa.png -geometry +24+16 -composite \
  /tmp/comp_bufalvent.png -geometry +136+15 -composite \
  /tmp/badge_irta.png -geometry +242+15 -composite \
  /tmp/comp_uab.png -geometry +296+17 -composite \
  /tmp/comp_asturias.png -geometry +595+14 -composite \
  /tmp/comp_institucional.png -gravity east -geometry +18+0 -composite \
  public/logos_pie_de_pagina.png

# Also duplicate with the exact upload name for total consistency
cp public/logos_pie_de_pagina.png "public/logos pie de pàgina.png"
cp public/logos_pie_de_pagina.png "public/logos pie de pagina.png"

echo "Footer banner generated successfully!"
