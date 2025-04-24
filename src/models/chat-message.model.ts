export interface ChatMessage {
  messageId: number;
  userId: number;
  messagesAt: string;
  message: string;
  imageUrl: string;
  messagesStatus: 'Sent' | 'Received' | 'Seen';
  messagesSession: string;
}
