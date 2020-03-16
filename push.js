var push = require('web-push')

let vapidKeys = {
    publicKey: 'BAfXHoIiSxF4WV7wNacXE-Qjs1T7ZLpLQkAlYuNSem0OtXiLp5Aut6y2g2N1QO708ZE4B6uHFWpSPhKACP6rZ4o',
    privateKey: 'OEs6ZXzs9tpqr0WO7iw3PZUNMS9RY3KOphCURgMHOlU'
  }

  push.setVapidDetails('mailto.test@code.co.th', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {endpoint:"https://fcm.googleapis.com/fcm/send/czhjfjMr-Cc:APA91bG6l7QpP2oHjNXc0gxBkMc0kJrYjh1ph02r8nBCXgZaA56TwwXrHipvpSiF6JAWdgaZElSZNGK2zncDS39NfAddkS5aZb4n8OBFz5Ah-MVWThobGTR76h5V1n847ngKktprr8IB",
  expirationTime: null,
  keys: {"p256dh":"BHDOhv9Q_QRd2K-gKhxnc-clJpY6T5DVytJpQk1LoKyFs1UUexashrSDG51hFCuN2HOdLU4VLJ3BvY33zgymcjQ",
  auth: "zHif4ttqSgQukQiW6YA-xw"
}};
  push.sendNotification(sub, 'test message')