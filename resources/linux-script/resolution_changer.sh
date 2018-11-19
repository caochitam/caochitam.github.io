#!/bin/bash

# Author : Cao Chi Tam
# Email: caochitam@gmail.com


# Get Connected Port and save to PORTS
PORT=()
INDEX=0
echo "=================="
echo "|[Connected port]|"
echo "===Index===Port==="
while  read port status trash
do
    if [ $status = "connected" ]
    then 
        echo "|   $INDEX     $port"
        ((INDEX++))
        PORT+=("$port")
    fi
done <<<$(xrandr)
echo "=================="
printf "Please select index of port, which you wanna use (0 OR 1 OR 2 ...etc.):"
read USEDPORT

# Get Modeline and Modename
MODELINE=$(cvt $1 $2 | cut -d$'\n' -f2 | cut -d$" " -f2-)
MODENAME=$(echo $MODELINE | cut -d$'\"' -f2)

echo "[MODELINE]: $MODELINE"
echo "[MODENAME]: $MODENAME"
echo "[USEDPORT]: ${PORT[$USEDPORT]}"

NEWCMD="xrandr --newmode $MODELINE"
ADDCMD="xrandr --addmode ${PORT[$USEDPORT]} $MODENAME"
echo "[RUN]: $NEWCMD"
eval $NEWCMD
echo "[RUN]: $ADDCMD"
eval $ADDCMD

# Save to init.d
echo "$NEWCMD" > /etc/init.d/change-resolutions
echo "$ADDCMD" >> /etc/init.d/change-resolutions
chmod +x /etc/init.d/change-resolutions

