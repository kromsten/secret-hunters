const contractAddress = "";
const hash = "";


const mintMsg : object = {
    receive_mint: {}
};


export const snip20SendMsg = (a : string = contractAddress, h : string = hash) => {
    return {
        send: {
            amount: "150000000",
            recipient: a,
            recipient_code_hash: h,
            msg: Buffer.from(JSON.stringify(mintMsg)).toString('base64')        
        }
    }
}


export const customFees = {

    exec: {
        gas: "500500",
    },

  }