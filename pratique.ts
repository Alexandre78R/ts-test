
// Ex 0
const anExampleVariable: string = "Hello World";
console.log(anExampleVariable);

// Ex 1
type Message = {
  from: string;
  message: string;
  isRead?: boolean;
};

const message1: Message = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2: Message = { from: "Alice", message: "Hi Bob!" };

// Ex 2
const messages: Message[] = [message1, message2];

function readMessages(messages: Message[]): Number { 
    const updatedMessages = messages.map(message => ({
        ...message,
        isRead: true,
    }));
   console.log(updatedMessages);
   return updatedMessages.length;
}

readMessages(messages);

// Ex 3

type Notif = {
  at: number;
  state: "unread" | "read"; // Définissez les états possibles ici
};

const notification1: Notif = { at: 1694011133, state: "unread" };
const notification2: Notif = { at: 1694011532, state: "read" };


// Ex 4 
function readNotificationOrMessage(notificationOrMessage: Notif | Message): void {
    if ('from' in notificationOrMessage) {
        console.log("message lue", notificationOrMessage);
        notificationOrMessage.isRead = true; 
    } else {
        console.log("Notification Lue")
        notificationOrMessage.state = "read";
    }
}

readNotificationOrMessage(notification1); 
readNotificationOrMessage(message2); 