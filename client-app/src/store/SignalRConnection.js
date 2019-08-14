import * as SignalR from "@aspnet/signalr";

export const connection = new SignalR.HubConnectionBuilder()
  .withUrl("https://localhost:9000/social")
  .configureLogging(SignalR.LogLevel.Trace)
  .build();
