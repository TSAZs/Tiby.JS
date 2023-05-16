![TibyAi.js Logo](https://cdn.discordapp.com/attachments/839189307637497890/1107968423654342726/TibyAI.JS.png "TibyAI.js")

### 🚀 Introduction
A simple official npm package used to fetch tiby api (Official TSAZ Product)

### 💿 Setup
```
npm install tiby.js
```
```javascript
// your nodejs workspace
const Tiby = require("tiby.js");
const client = new Tiby.Client();
```

### 📟 Question
```javascript
// your nodejs workspace
const Tiby = require("tiby.js");
const client = new Tiby.Client();

client.question("Ciao tiby").then(res => {
    console.log(res)
})
```

### 📽 Function
```javascript
// your nodejs workspace
const Tiby = require("tiby.js");
const client = new Tiby.Client();

async function AskToTiby(qst) {
    let res = await client.question(qst);
    return res;
}

console.log(AskToTiby("ciao"));
```
