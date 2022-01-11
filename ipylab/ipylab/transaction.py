import web3

web3.eth.send_transaction({
  'to': '0xd3CdA913deB6f67967B99D67aCDFa1712C293601',
  'from': web3.eth.coinbase,
  'value': 12345
})