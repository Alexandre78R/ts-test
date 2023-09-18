"use strict";
// Ex 0
const anExampleVariable = "Hello World";
console.log(anExampleVariable);
const message1 = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2 = { from: "Alice", message: "Hi Bob!" };
// Ex 2
const messages = [message1, message2];
function readMessages(messages) {
    const updatedMessages = messages.map(message => (Object.assign(Object.assign({}, message), { isRead: true })));
    console.log(updatedMessages);
    return updatedMessages.length;
}
readMessages(messages);
const notification1 = { at: 1694011133, state: "unread" };
const notification2 = { at: 1694011532, state: "read" };
// Ex 4 
function readNotificationOrMessage(notificationOrMessage) {
    if ('from' in notificationOrMessage) {
        console.log("message lue", notificationOrMessage);
        notificationOrMessage.isRead = true;
    }
    else {
        console.log("Notification Lue");
        notificationOrMessage.state = "read";
    }
}
readNotificationOrMessage(notification1);
readNotificationOrMessage(message2);
