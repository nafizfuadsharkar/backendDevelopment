// form handling
// handle backend process of forms and make sure data coming from any frondend library, fw, templating engines, we still handle is at the brackend process .

// install cookie-parser

// session and cookie:
// amra kichu data frontend er browser e rakhte pari. and jokhon amra kono req backend e kori, tokhon frontend er save data backend e chole jay

// amra fb te ke ekta pic dekhate bollam, amake login korte bollo, login kore pic niye abar amk logout kore dilo, abar kichu korte chaile abar login korte bollo, amk jeno fb mone rakhe bar bar jeno amk bhule na jay tai amra kichu data dei, egula browser e save thake . frontend e browser e jeta thake, oitake bole cookie, server e connected hoye thake cookie diye eta ke bole session. oi string ta choriye dilei logout hoye jay.  Cookie means the data which saved in my browser.  login theke logout porjonto ekta session.

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ami jokhon frontend e data input dei oita onno language e convert hoye then server e jabe, as string(blob), which is not directly readable. amra oi blob ke readable kori then server bujhte pare eta, uporer 2ta line etar jonnoi likhchi.  

// amar computer er sob data blob hishebe server e jay ek jaygay elomelo bhabe 
