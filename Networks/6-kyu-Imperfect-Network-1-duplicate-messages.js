/**
 * Imperfect Network #1 (duplicate messages)
 * https://www.codewars.com/kata/52092a7cea29118405000027/train/javascript
 *
 */

function NetworkClient(sendFunction, callback) {
  this.sendFunction = sendFunction
  this.callback = callback

  this.id = 0
  this.messages = []
}

NetworkClient.prototype.send = function (data) {
  const message = {
    id: this.id++,
    data,
  }

  this.sendFunction(JSON.stringify(message))
}

NetworkClient.prototype.recv = function (data) {
  const message = JSON.parse(data)

  if (!this.messages.includes(message.id)) {
    this.messages.push(message.id)
    this.callback(message.data)
  }
}
