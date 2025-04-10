export interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp?: Date;
  isError?: boolean;
  isTyping?: boolean;
}
