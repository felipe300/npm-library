import { z } from "zod"
import { createMessageProtocol } from "./createMessageProtocol"

const messageBus = createMessageProtocol({
  events: {
    LOG_IN: {
      username: z.string(),
      password: z.string()
    },
    LOG_OUT: {}
  }
})

const send = messageBus.createSender(window.postMessage)

const handler = messageBus.createReceiver((event) => { })

// window.addEventListener("message", (event) => {
//   event.data
// })

// sender("LOG_IN", { username: "foo", password: "bar" })