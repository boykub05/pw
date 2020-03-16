var push = require('web-push')

let vapidKeys = {
    publicKey: 'BAfXHoIiSxF4WV7wNacXE-Qjs1T7ZLpLQkAlYuNSem0OtXiLp5Aut6y2g2N1QO708ZE4B6uHFWpSPhKACP6rZ4o',
    privateKey: 'OEs6ZXzs9tpqr0WO7iw3PZUNMS9RY3KOphCURgMHOlU'
  }

  push.setVapidDetails('mailto:boykub05@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dyxpUKfEf1w:APA91bG5L0hOpDu8Vnce3M7OQ7JJeVwR5PBFC40PN9FvnRKMRGxQROztoK3J3H4LoQAGeAO5OpfEoOmpkTfT0x6I5GxT691EOzt0Ck-mgLPyipBh52757TAR-AmY7GdT29wfJZUfli46","expirationTime":null,"keys":{"p256dh":"BAa259HYGkgRUDTtPskKCdpAJPtmu5AGP8tP1YCZIOmJ_Xse-ERm5xRTSvpfuGkFJqssDA5p7U3cdj5k7aPaUr4","auth":"tWRQLnT3Hi2PlQ1jCB_uMw"}};
  push.sendNotification(sub, 'test message')