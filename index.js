// Code your whale tracker script here!
    const { ethers,
 Contract } = require('ethers')

const rpcURL = 'https://cloudflare-eth.com/'
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const CONTRACT_ADDRESS  = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

const contract  =  new ethers.Contract(CONTRACT_ADDRESS, ABI, provider)

const main = async() => {
	const block = await provider.getBlockNumber();
	
	console.log("running "+block);
}

main();