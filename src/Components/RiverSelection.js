import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const rivers = [
    {name: 'Arkansas', zip: '81242', img: 'https://captainzipline.com/wp-content/uploads/captain-zipline-ecology-arkansas-river.jpg', map: 'https://www.google.com/maps/@38.5164257,-105.9708654,13.92z?hl=en'}, 
    {name: 'Big Thompson', zip: '80515', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2021/02/big-thompson-river-fall-folliage-colorado-1600x800.jpg', map: 'https://www.google.com/maps/dir/Golden,+CO/Estes+Park,+CO/@40.3800843,-105.4768403,16.72z/data=!4m13!4m12!1m5!1m1!1s0x876b981287686cf7:0x14c64654208055dc!2m2!1d-105.2210997!2d39.755543!1m5!1m1!1s0x876965d6bb191a03:0xdb9698b7a9caac0c!2m2!1d-105.5216651!2d40.3772059'}, 
    {name: 'Blue', zip: '80497', img: 'https://ap.rdcpix.com/e693f5db765860bd8e94bd27025d9299l-m3028902430xd-w1020_h770_q80.jpg', map: 'https://www.google.com/maps/place/Blue,+CO+80424/@39.6253066,-106.069859,17.33z/data=!4m5!3m4!1s0x876af42f1058b273:0x165da2b6474661dc!8m2!3d39.476845!4d-106.0169971'}, 
    {name: 'Clear Creek', zip: '80403', img: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_304,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/goldenco/Fly_fisher2crop_87987216-e2dc-4818-8862-97c048fc9f0c.jpg', map: 'https://www.google.com/maps/place/Clear+Creek/@39.7358661,-105.3663553,16.31z/data=!4m5!3m4!1s0x876b87f00d3be711:0x656e35544f29a9c0!8m2!3d39.7966884!4d-105.042603'}, 
    {name: 'Colorado', zip: '80459', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2020/08/colorado-river-state-bridge-co-1600x800-1-1600x800.jpg', map: 'https://www.google.com/maps/place/Kremmling,+CO+80459/@40.0468243,-106.3343256,14.57z/data=!4m5!3m4!1s0x876a0310eaaf8967:0x91adef6f27328cf0!8m2!3d40.0588744!4d-106.3889199?hl=en'}, 
    {name: 'Dream Stream', zip: '80827', img: 'https://static.getmatcha.com/image/upload/s--tG_52KYz--/f_auto,q_auto,t_rr_large_natural/ththiaaneusuug1brcuo.jpg', map: 'https://www.google.com/maps/place/Dream+Stream/@38.9630611,-105.5794633,15.55z/data=!4m5!3m4!1s0x0:0xf7a2507daf857ccb!8m2!3d38.9681347!4d-105.5821173'}, 
    {name: 'Eagle', zip: '81632', img: 'https://1.bp.blogspot.com/-MrLdyTkWLXM/WbsxQxw4AaI/AAAAAAAAGfE/QT7aV0Kt0ocCQ4j6NRKKMB9Qre1S9iMsgCLcBGAs/s1600/IMG_1500.JPG', map: 'https://www.google.com/maps/place/Horn+Ranch+Conservation+Easement+Parking+Lot/@39.7035192,-106.7269905,16z/data=!4m13!1m7!3m6!1s0x8741c4cdc27c744f:0x51f88fd70c52fd2!2sEagle!3b1!8m2!3d39.6547202!4d-106.6301662!3m4!1s0x8741c39d42671e7d:0xdb67471cf1cb099f!8m2!3d39.7028903!4d-106.7287477'}, 
    {name: 'South Boulder Creek', zip: '80466', img: 'https://lh3.googleusercontent.com/XyYOMhNNKjV_2jr9nYDreyFwUbLuNob_IE9Mce8P1L3V4SOcBAsI-XIwK0O5fT0P9vkRhnGpFjCLVVicJnE1bRIXrOBXH_RTXGFJlGNx1uS_w6_9JqPmJH5bF1rKyFBp2-hEnOPjfJAGXV8JGm-c0LPdwg3MppyNyiEMJxdh0Zfj6RXLzwVUHzQN2hX67bNR6Vy1moKpXMv88jj0xhfIJB5LixA-EmCOROU4IGu617JGgwjh91yA9OBcJRZ4ZgurzYSpfQjOTHocX5FDNzJSOIWVouWijmHuqbN2zMVt1a-9-LEQ8DFyyxDWm41Z8wXvYO3Yj6k3bL4mAz6tN6jMNTnsMjZO09r43piviDcWBFhllrw_99t1aUQD7L3bH93JYrWz2bsdRD3UY2tiyTEuACHjBbNMTtye0csBk-EB8hCNJDNDr8aAoTcrwxFNE8a2uuy9YHkpDSt4uBg3HWGooqic9AKdoReD05G_Ur8rrpnNZI6V4B__ezSZn3i89QCQYDYaitbhMei9-hAwz8ocRgo_fxkBvsbYhBZLioP09KVnJZLFHLrJEvwS73vF-lKUV_e3xYGqCp6fF5JT2EluxlgwqnEsSCp0X-wRzRCaLBpQY4N8XEAN4UyOR0RUXL1ydLiUPOzU_HkOBAx7RgQFOS6XkiSZ93_IrnhEz9_zmuxoix3bPKRYZjopBFK8734=w1184-h888-no?authuser=0', map: 'https://www.google.com/maps/place/South+Boulder+Creek/@39.9388052,-105.3492709,16.21z/data=!4m5!3m4!1s0x876bf1ffbab4f76f:0x8ccc81af88645046!8m2!3d39.9532046!4d-105.2416038'}, 
    
    {name: 'Arkansas', zip: '81201', img: 'https://captainzipline.com/wp-content/uploads/captain-zipline-ecology-arkansas-river.jpg', map: 'https://www.google.com/maps/@38.5164257,-105.9708654,13.92z?hl=en'}, 
    {name: 'Big Thompson', zip: '80515', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2021/02/big-thompson-river-fall-folliage-colorado-1600x800.jpg', map: 'https://www.google.com/maps/dir/Golden,+CO/Estes+Park,+CO/@40.3800843,-105.4768403,16.72z/data=!4m13!4m12!1m5!1m1!1s0x876b981287686cf7:0x14c64654208055dc!2m2!1d-105.2210997!2d39.755543!1m5!1m1!1s0x876965d6bb191a03:0xdb9698b7a9caac0c!2m2!1d-105.5216651!2d40.3772059'}, 
    {name: 'Blue', zip: '80497', img: 'https://ap.rdcpix.com/e693f5db765860bd8e94bd27025d9299l-m3028902430xd-w1020_h770_q80.jpg', map: 'https://www.google.com/maps/place/Blue,+CO+80424/@39.6253066,-106.069859,17.33z/data=!4m5!3m4!1s0x876af42f1058b273:0x165da2b6474661dc!8m2!3d39.476845!4d-106.0169971'}, 
    {name: 'Clear Creek', zip: '80403', img: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_304,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/goldenco/Fly_fisher2crop_87987216-e2dc-4818-8862-97c048fc9f0c.jpg', map: 'https://www.google.com/maps/place/Clear+Creek/@39.7358661,-105.3663553,16.31z/data=!4m5!3m4!1s0x876b87f00d3be711:0x656e35544f29a9c0!8m2!3d39.7966884!4d-105.042603'}, 
    {name: 'Colorado', zip: '80459', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2020/08/colorado-river-state-bridge-co-1600x800-1-1600x800.jpg', map: 'https://www.google.com/maps/place/Kremmling,+CO+80459/@40.0468243,-106.3343256,14.57z/data=!4m5!3m4!1s0x876a0310eaaf8967:0x91adef6f27328cf0!8m2!3d40.0588744!4d-106.3889199?hl=en'}, 
    {name: 'South Platte', zip: '80827', img: 'https://static.getmatcha.com/image/upload/s--tG_52KYz--/f_auto,q_auto,t_rr_large_natural/ththiaaneusuug1brcuo.jpg', map: 'https://www.google.com/maps/place/Dream+Stream/@38.9630611,-105.5794633,15.55z/data=!4m5!3m4!1s0x0:0xf7a2507daf857ccb!8m2!3d38.9681347!4d-105.5821173'}, 
    {name: 'Eagle', zip: '81632', img: 'https://1.bp.blogspot.com/-MrLdyTkWLXM/WbsxQxw4AaI/AAAAAAAAGfE/QT7aV0Kt0ocCQ4j6NRKKMB9Qre1S9iMsgCLcBGAs/s1600/IMG_1500.JPG', map: 'https://www.google.com/maps/place/Horn+Ranch+Conservation+Easement+Parking+Lot/@39.7035192,-106.7269905,16z/data=!4m13!1m7!3m6!1s0x8741c4cdc27c744f:0x51f88fd70c52fd2!2sEagle!3b1!8m2!3d39.6547202!4d-106.6301662!3m4!1s0x8741c39d42671e7d:0xdb67471cf1cb099f!8m2!3d39.7028903!4d-106.7287477'}, 
    {name: 'South Boulder', zip: '80466', img: 'https://lh3.googleusercontent.com/XyYOMhNNKjV_2jr9nYDreyFwUbLuNob_IE9Mce8P1L3V4SOcBAsI-XIwK0O5fT0P9vkRhnGpFjCLVVicJnE1bRIXrOBXH_RTXGFJlGNx1uS_w6_9JqPmJH5bF1rKyFBp2-hEnOPjfJAGXV8JGm-c0LPdwg3MppyNyiEMJxdh0Zfj6RXLzwVUHzQN2hX67bNR6Vy1moKpXMv88jj0xhfIJB5LixA-EmCOROU4IGu617JGgwjh91yA9OBcJRZ4ZgurzYSpfQjOTHocX5FDNzJSOIWVouWijmHuqbN2zMVt1a-9-LEQ8DFyyxDWm41Z8wXvYO3Yj6k3bL4mAz6tN6jMNTnsMjZO09r43piviDcWBFhllrw_99t1aUQD7L3bH93JYrWz2bsdRD3UY2tiyTEuACHjBbNMTtye0csBk-EB8hCNJDNDr8aAoTcrwxFNE8a2uuy9YHkpDSt4uBg3HWGooqic9AKdoReD05G_Ur8rrpnNZI6V4B__ezSZn3i89QCQYDYaitbhMei9-hAwz8ocRgo_fxkBvsbYhBZLioP09KVnJZLFHLrJEvwS73vF-lKUV_e3xYGqCp6fF5JT2EluxlgwqnEsSCp0X-wRzRCaLBpQY4N8XEAN4UyOR0RUXL1ydLiUPOzU_HkOBAx7RgQFOS6XkiSZ93_IrnhEz9_zmuxoix3bPKRYZjopBFK8734=w1184-h888-no?authuser=0', map: 'https://www.google.com/maps/place/South+Boulder+Creek/@39.9388052,-105.3492709,16.21z/data=!4m5!3m4!1s0x876bf1ffbab4f76f:0x8ccc81af88645046!8m2!3d39.9532046!4d-105.2416038'}, 

    {name: 'Arkansas', zip: '81201', img: 'https://captainzipline.com/wp-content/uploads/captain-zipline-ecology-arkansas-river.jpg', map: 'https://www.google.com/maps/@38.5164257,-105.9708654,13.92z?hl=en'}, 
    {name: 'Big Thompson', zip: '80515', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2021/02/big-thompson-river-fall-folliage-colorado-1600x800.jpg', map: 'https://www.google.com/maps/dir/Golden,+CO/Estes+Park,+CO/@40.3800843,-105.4768403,16.72z/data=!4m13!4m12!1m5!1m1!1s0x876b981287686cf7:0x14c64654208055dc!2m2!1d-105.2210997!2d39.755543!1m5!1m1!1s0x876965d6bb191a03:0xdb9698b7a9caac0c!2m2!1d-105.5216651!2d40.3772059'}, 
    {name: 'Blue', zip: '80497', img: 'https://ap.rdcpix.com/e693f5db765860bd8e94bd27025d9299l-m3028902430xd-w1020_h770_q80.jpg', map: 'https://www.google.com/maps/place/Blue,+CO+80424/@39.6253066,-106.069859,17.33z/data=!4m5!3m4!1s0x876af42f1058b273:0x165da2b6474661dc!8m2!3d39.476845!4d-106.0169971'}, 
    {name: 'Clear Creek', zip: '80403', img: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_304,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/goldenco/Fly_fisher2crop_87987216-e2dc-4818-8862-97c048fc9f0c.jpg', map: 'https://www.google.com/maps/place/Clear+Creek/@39.7358661,-105.3663553,16.31z/data=!4m5!3m4!1s0x876b87f00d3be711:0x656e35544f29a9c0!8m2!3d39.7966884!4d-105.042603'}, 
    {name: 'Colorado', zip: '80459', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2020/08/colorado-river-state-bridge-co-1600x800-1-1600x800.jpg', map: 'https://www.google.com/maps/place/Kremmling,+CO+80459/@40.0468243,-106.3343256,14.57z/data=!4m5!3m4!1s0x876a0310eaaf8967:0x91adef6f27328cf0!8m2!3d40.0588744!4d-106.3889199?hl=en'}, 
    {name: 'South Platte', zip: '80827', img: 'https://static.getmatcha.com/image/upload/s--tG_52KYz--/f_auto,q_auto,t_rr_large_natural/ththiaaneusuug1brcuo.jpg', map: 'https://www.google.com/maps/place/Dream+Stream/@38.9630611,-105.5794633,15.55z/data=!4m5!3m4!1s0x0:0xf7a2507daf857ccb!8m2!3d38.9681347!4d-105.5821173'}, 
    {name: 'Eagle', zip: '81632', img: 'https://1.bp.blogspot.com/-MrLdyTkWLXM/WbsxQxw4AaI/AAAAAAAAGfE/QT7aV0Kt0ocCQ4j6NRKKMB9Qre1S9iMsgCLcBGAs/s1600/IMG_1500.JPG', map: 'https://www.google.com/maps/place/Horn+Ranch+Conservation+Easement+Parking+Lot/@39.7035192,-106.7269905,16z/data=!4m13!1m7!3m6!1s0x8741c4cdc27c744f:0x51f88fd70c52fd2!2sEagle!3b1!8m2!3d39.6547202!4d-106.6301662!3m4!1s0x8741c39d42671e7d:0xdb67471cf1cb099f!8m2!3d39.7028903!4d-106.7287477'}, 
    {name: 'South Boulder', zip: '80466', img: 'https://lh3.googleusercontent.com/XyYOMhNNKjV_2jr9nYDreyFwUbLuNob_IE9Mce8P1L3V4SOcBAsI-XIwK0O5fT0P9vkRhnGpFjCLVVicJnE1bRIXrOBXH_RTXGFJlGNx1uS_w6_9JqPmJH5bF1rKyFBp2-hEnOPjfJAGXV8JGm-c0LPdwg3MppyNyiEMJxdh0Zfj6RXLzwVUHzQN2hX67bNR6Vy1moKpXMv88jj0xhfIJB5LixA-EmCOROU4IGu617JGgwjh91yA9OBcJRZ4ZgurzYSpfQjOTHocX5FDNzJSOIWVouWijmHuqbN2zMVt1a-9-LEQ8DFyyxDWm41Z8wXvYO3Yj6k3bL4mAz6tN6jMNTnsMjZO09r43piviDcWBFhllrw_99t1aUQD7L3bH93JYrWz2bsdRD3UY2tiyTEuACHjBbNMTtye0csBk-EB8hCNJDNDr8aAoTcrwxFNE8a2uuy9YHkpDSt4uBg3HWGooqic9AKdoReD05G_Ur8rrpnNZI6V4B__ezSZn3i89QCQYDYaitbhMei9-hAwz8ocRgo_fxkBvsbYhBZLioP09KVnJZLFHLrJEvwS73vF-lKUV_e3xYGqCp6fF5JT2EluxlgwqnEsSCp0X-wRzRCaLBpQY4N8XEAN4UyOR0RUXL1ydLiUPOzU_HkOBAx7RgQFOS6XkiSZ93_IrnhEz9_zmuxoix3bPKRYZjopBFK8734=w1184-h888-no?authuser=0', map: 'https://www.google.com/maps/place/South+Boulder+Creek/@39.9388052,-105.3492709,16.21z/data=!4m5!3m4!1s0x876bf1ffbab4f76f:0x8ccc81af88645046!8m2!3d39.9532046!4d-105.2416038'}, 

    {name: 'Arkansas', zip: '81201', img: 'https://captainzipline.com/wp-content/uploads/captain-zipline-ecology-arkansas-river.jpg', map: 'https://www.google.com/maps/@38.5164257,-105.9708654,13.92z?hl=en'}, 
    {name: 'Big Thompson', zip: '80515', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2021/02/big-thompson-river-fall-folliage-colorado-1600x800.jpg', map: 'https://www.google.com/maps/dir/Golden,+CO/Estes+Park,+CO/@40.3800843,-105.4768403,16.72z/data=!4m13!4m12!1m5!1m1!1s0x876b981287686cf7:0x14c64654208055dc!2m2!1d-105.2210997!2d39.755543!1m5!1m1!1s0x876965d6bb191a03:0xdb9698b7a9caac0c!2m2!1d-105.5216651!2d40.3772059'}, 
    {name: 'Blue', zip: '80497', img: 'https://ap.rdcpix.com/e693f5db765860bd8e94bd27025d9299l-m3028902430xd-w1020_h770_q80.jpg', map: 'https://www.google.com/maps/place/Blue,+CO+80424/@39.6253066,-106.069859,17.33z/data=!4m5!3m4!1s0x876af42f1058b273:0x165da2b6474661dc!8m2!3d39.476845!4d-106.0169971'}, 
    {name: 'Clear Creek', zip: '80403', img: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_304,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/goldenco/Fly_fisher2crop_87987216-e2dc-4818-8862-97c048fc9f0c.jpg', map: 'https://www.google.com/maps/place/Clear+Creek/@39.7358661,-105.3663553,16.31z/data=!4m5!3m4!1s0x876b87f00d3be711:0x656e35544f29a9c0!8m2!3d39.7966884!4d-105.042603'}, 
    {name: 'Colorado', zip: '80459', img: 'https://mk0uncovercolor8845v.kinstacdn.com/wp-content/uploads/2020/08/colorado-river-state-bridge-co-1600x800-1-1600x800.jpg', map: 'https://www.google.com/maps/place/Kremmling,+CO+80459/@40.0468243,-106.3343256,14.57z/data=!4m5!3m4!1s0x876a0310eaaf8967:0x91adef6f27328cf0!8m2!3d40.0588744!4d-106.3889199?hl=en'}, 
    {name: 'South Platte', zip: '80827', img: 'https://static.getmatcha.com/image/upload/s--tG_52KYz--/f_auto,q_auto,t_rr_large_natural/ththiaaneusuug1brcuo.jpg', map: 'https://www.google.com/maps/place/Dream+Stream/@38.9630611,-105.5794633,15.55z/data=!4m5!3m4!1s0x0:0xf7a2507daf857ccb!8m2!3d38.9681347!4d-105.5821173'}, 
    {name: 'Eagle', zip: '81632', img: 'https://1.bp.blogspot.com/-MrLdyTkWLXM/WbsxQxw4AaI/AAAAAAAAGfE/QT7aV0Kt0ocCQ4j6NRKKMB9Qre1S9iMsgCLcBGAs/s1600/IMG_1500.JPG', map: 'https://www.google.com/maps/place/Horn+Ranch+Conservation+Easement+Parking+Lot/@39.7035192,-106.7269905,16z/data=!4m13!1m7!3m6!1s0x8741c4cdc27c744f:0x51f88fd70c52fd2!2sEagle!3b1!8m2!3d39.6547202!4d-106.6301662!3m4!1s0x8741c39d42671e7d:0xdb67471cf1cb099f!8m2!3d39.7028903!4d-106.7287477'}, 
    {name: 'South Boulder', zip: '80466', img: 'https://lh3.googleusercontent.com/XyYOMhNNKjV_2jr9nYDreyFwUbLuNob_IE9Mce8P1L3V4SOcBAsI-XIwK0O5fT0P9vkRhnGpFjCLVVicJnE1bRIXrOBXH_RTXGFJlGNx1uS_w6_9JqPmJH5bF1rKyFBp2-hEnOPjfJAGXV8JGm-c0LPdwg3MppyNyiEMJxdh0Zfj6RXLzwVUHzQN2hX67bNR6Vy1moKpXMv88jj0xhfIJB5LixA-EmCOROU4IGu617JGgwjh91yA9OBcJRZ4ZgurzYSpfQjOTHocX5FDNzJSOIWVouWijmHuqbN2zMVt1a-9-LEQ8DFyyxDWm41Z8wXvYO3Yj6k3bL4mAz6tN6jMNTnsMjZO09r43piviDcWBFhllrw_99t1aUQD7L3bH93JYrWz2bsdRD3UY2tiyTEuACHjBbNMTtye0csBk-EB8hCNJDNDr8aAoTcrwxFNE8a2uuy9YHkpDSt4uBg3HWGooqic9AKdoReD05G_Ur8rrpnNZI6V4B__ezSZn3i89QCQYDYaitbhMei9-hAwz8ocRgo_fxkBvsbYhBZLioP09KVnJZLFHLrJEvwS73vF-lKUV_e3xYGqCp6fF5JT2EluxlgwqnEsSCp0X-wRzRCaLBpQY4N8XEAN4UyOR0RUXL1ydLiUPOzU_HkOBAx7RgQFOS6XkiSZ93_IrnhEz9_zmuxoix3bPKRYZjopBFK8734=w1184-h888-no?authuser=0', map: 'https://www.google.com/maps/place/South+Boulder+Creek/@39.9388052,-105.3492709,16.21z/data=!4m5!3m4!1s0x876bf1ffbab4f76f:0x8ccc81af88645046!8m2!3d39.9532046!4d-105.2416038'}, 
]

const RiverSelection = () => {  
    return (
        <div className="river-container">

            {rivers.map((river, index) => {
                // const {name} = river 
                const name = river.name
            
                return (
                    <Link to={`/riverweather/${river.name}`} class="link"> 
                        <div key={index}>
                        </div>
                        <h2 className='button'>{name}</h2>
                    </Link>)
            })}
        </div>
    )

    // return <div>
    //     {rivers.map((thing, index) => {
    //         const {name} = thing 
            
    //         return (<Link to={`/riverweather/${thing.zip}`}>
    //                 <div
    //                 key={index}>
    //                 </div>
    //                 <h2>{name}</h2>
    //         </Link>)
    //     })}
    // </div>
      
    
    
    // const handleClick = (riverName) => {
    //     console.log(riverName)
    // }


    // const loaded = () => {
    //     return (
    //         <div>
    //             {
    //                 rivers.map( (item, index) => {
    //                     return (
    //                         <div>
    //                             <button
    //                             className='button'
    //                             onClick={ () => handleClick(item)}
    //                             >{item}</button>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }

    // const loading = () => {
    //     return <h3>loading...page is not loading</h3>
    // }

    // return riverInfo ? loaded() : loading()
    
    

};

export default RiverSelection





  // const check = rivers.map( (item, index) => {
    //     console.log(item)
    //     return (
    //         <div>
    //             {/* <h1>thing inside here?</h1> */}
    //             <h1>{item}</h1>
    //             {/* <button>{item}</button> */}
    //         </div>
    //     )
    // })