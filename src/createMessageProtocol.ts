import { z } from "zod"
import { EventsConfigToDiscriminateUnion } from "./types"

export const createMessageProtocol = <
  T extends Record<string, z.ZodRawShape>,
  EventsAsToDiscriminateUnion = EventsConfigToDiscriminateUnion<T>
> (opts: {
  events: T
}) => {
  return {
    createSender: (func: (event: EventsAsToDiscriminateUnion) => void) => {
      return func
    },
    createReceiver: (func: (event: EventsAsToDiscriminateUnion) => void) => {
      return func
    }
  }
}