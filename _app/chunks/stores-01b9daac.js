var m=Object.defineProperty,g=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(s,t,e)=>t in s?m(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,o=(s,t)=>{for(var e in t||(t={}))l.call(t,e)&&c(s,e,t[e]);if(a)for(var e of a(t))p.call(t,e)&&c(s,e,t[e]);return s},d=(s,t)=>g(s,w(t));import{L as y,M as f}from"./vendor-c605688a.js";const S="",k="",_={receive_mint:{}},A=(s=S,t=k)=>({send:{amount:"150000000",recipient:s,recipient_code_hash:t,msg:y.exports.Buffer.from(JSON.stringify(_)).toString("base64")}}),C={exec:{gas:"500500"}},I="https://secret-4.api.trivium.network:1317",u="secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek",x=s=>new Promise(t=>setTimeout(t,s)),h=async(s,t,e=1200)=>{let n=0;for(;s();){if(n+=10,n>e)throw Error(t);await x(10)}};class P{constructor(t=!1,e="secret-4",n="secret1usycsk8ex8gj4t2uzg6sadkcw4jvflkjkxldk8"){if(this.connected=t,this.chainId=e,this.contractAddress=n,this.address="",this.permitParams={permit_name:"_permit",allowed_tokens:[this.contractAddress],permissions:["owner"]},typeof window!="undefined"){t=localStorage.getItem("connected")==="true";const i=localStorage.getItem("signature");i&&(this.signature=JSON.parse(i))}}async setupKeplr(){await h(()=>!window.keplr&&!window.getOfflineSigner&&!window.getEnigmaUtils,"Couldn't connect to Keplr. Make sure it is installed"),await window.keplr.enable(this.chainId);const t=window.getOfflineSigner(this.chainId),e=await t.getAccounts();this.address=e[0].address,this.client=new f(I,this.address,t,window.getEnigmaUtils(this.chainId),C),this.connected=!0,localStorage.setItem("connected","true")}async getSignature(){const{signature:t}=await window.keplr.signAmino(this.chainId,this.address,{chain_id:this.chainId,account_number:"0",sequence:"0",fee:{amount:[{denom:"uscrt",amount:"0"}],gas:"1"},msgs:[{type:"query_permit",value:this.permitParams}],memo:""},{preferNoSetFee:!0,preferNoSetMemo:!0});return this.signature=t,localStorage.setItem("signature",JSON.stringify(t)),t}async customQueryPermit(t){var r;const e={with_permit:{query:t,permit:{params:d(o({},this.permitParams),{chain_id:this.chainId}),signature:(r=this.signature)!=null?r:await this.getSignature()}}};return await this.client.queryContractSmart(this.contractAddress,e)}async customQuery(t){return await this.client.queryContractSmart(this.contractAddress,t)}async getToken(t){return await this.customQueryPermit({nft_dossier:{token_id:t}})}async transfer(t,e){return await this.client.execute(this.contractAddress,{transfer_nft:{token_id:t,recipient:e}})}async getTokens(){return await h(()=>!this.address,"Couldn't get tokens",5e3),await this.customQueryPermit({tokens:{owner:this.address}})}async hash(t=this.contractAddress){return await this.client.restClient.getCodeHashByContractAddr(t)}async swap(t="150"){const e={deposit:{}},n=[{denom:"uscrt",amount:t+"000000"}];return await this.client.execute(u,e,"",n)}async mint(){return await this.client.execute(u,A())}}const q=new P;export{q as w};