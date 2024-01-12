import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';

export const rxStompConfig: InjectableRxStompConfig = {
   // Set your WebSocket endpoint URL
   brokerURL: 'ws://localhost:8011/websocket',   // Uncomment the line below if you need to specify custom headers
   // connectHeaders: { Authorization: 'Bearer my-access-token' },
   // Uncomment the line below to enable debug mode
   // debug: (msg: string): void => { console.log(new Date(), msg); },
   // Additional configuration options:
  //  heartbeatIncoming: 0, // Disable incoming heartbeat
  //  heartbeatOutgoing: 20000, // Set outgoing heartbeat interval to 20 seconds
  //  reconnectDelay: 5000, // Set delay for reconnect attempts to 5 seconds
   // onConnect: () => { console.log('Connected to WebSocket'); }, // Custom onConnect callback
   // onDisconnect: () => { console.log('Disconnected from WebSocket'); }, // Custom onDisconnect callback
};
