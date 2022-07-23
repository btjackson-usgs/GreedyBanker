const { ethers, Contract } = require('ethers')

/*** ignore sound
const player = require('play-sound')(opts = {})
**/
/** Using nodemailer instead of sound **/
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
 
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Barry T Jackson 👻" <bigbarry97@hotmail.com>', // sender address
    to: "bigbarry97@hotmail.com, bigbarry97@gmail.com", // list of receivers
    subject: "Large Transaction  ✔", // Subject line
    text: "Large Transaction was made", // plain text body
    html: "<b>Large Transaction was made</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
	
	
	
	
	
	
	
	*///////////

const rpcURL = 'https://cloudflare-eth.com/'
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const CONTRACT_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' // USDC
const ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
let contract = new Contract(CONTRACT_ADDRESS, ABI, provider);

// Note: USDC uses 6 decimal places
const TRANSFER_THRESHOLD = 100000000000 // wei


/*** Using the same custom mailer in the footer below ***********/
/****
	page = http://leakingpockets.com/BJ/email.php 

  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Barry T Jackson 👻" <bigbarry97@hotmail.com>', // sender address
    to: "bigbarry97@hotmail.com, bigbarry97@gmail.com", // list of receivers
    subject: "Large Transaction  ✔", // Subject line
    text: "Large Transaction was made", // plain text body
    html: "<b>Large Transaction was made</b>", // html body
  });
/**
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  
}
 
 
 
  const name = await contract.name()
  console.log(`Whale tracker started!\nListening for large transfers on ${name}`)

  contract.on('Transfer', (from, to, amount, data) => {
    // Note: not all ERC-20 tokens index `amount`
    // Use this instead of Ethers.js query filters
    // https://docs.ethers.io/v5/concepts/events/
    if(amount.toNumber() >= TRANSFER_THRESHOLD) {
     /** playSound()**/
	 
      console.log(`Larg Amount is  amount.toNumber()  for ${name}: https://etherscan.io/tx/${data.transactionHash}`)
    }

  })
}

main()