var push = require('web-push')

let vapidKeys = {
    publicKey: 'BAfXHoIiSxF4WV7wNacXE-Qjs1T7ZLpLQkAlYuNSem0OtXiLp5Aut6y2g2N1QO708ZE4B6uHFWpSPhKACP6rZ4o',
    privateKey: 'OEs6ZXzs9tpqr0WO7iw3PZUNMS9RY3KOphCURgMHOlU'
  }

  push.setVapidDetails('mailto.test@code.co.th', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub ={};
  push.sendNotification(sub, 'test message')