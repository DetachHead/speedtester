# speedtester
repeatedly downloads from speedtest.net servers to trick ISPs that throttle you except when you're running a speedtest

yes this is actually a thing ISP's do. if you think your speedtest results don't match your actual speeds you should give this a shot.

![](https://i.imgur.com/zIYXmmL.png)

## how to use
1. make a `settings.json` in the same folder as main.js with the following:
  ```jsonc
  {
    "location": "syd",  //speedtest.net server location (i've only tested this with regions in australia)
    "size": 10000,      //size of downloads in bytes
    "frequency": 500    //frequency of downloads in ms
  }
  ```
2. open cmd and run `npm install`
3. run `node main`

## disclaimer
this stopped happening to me a while ago so i can't really show any evidence of it working but i figured i should put it up on here in case it helps somebody else.
while it solved my network issues in the past i obviously can't guarantee it will work for you.
