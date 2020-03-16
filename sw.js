self.addEventListener('push', () => {
    self.registration.senNotification('test message', {})
});
