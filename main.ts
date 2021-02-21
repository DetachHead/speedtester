import { default as settings } from "./settings.ts";

const url =
  `http://speedtest-${settings.location}.vocus.net:8080/download?&size=${settings.size}`;
console.log("starting infinite speedtest at " + url);
let i = 1;
setInterval(async () => {
  try {
    await fetch(url);
    console.log("success #" + i);
  } catch (err) {
    console.log(`error #${i}:`);
    console.log(err);
  } finally {
    i++;
  }
}, settings.frequency);
