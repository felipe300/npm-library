import { z } from "zod"
import { EventsConfigToDiscriminateUnion } from "./types"

export const createMessageProtocol = <
  T extends Record<string, z.ZodRawShape>,
  EventsAsToDiscriminateUnion extends { type: string } = EventsConfigToDiscriminateUnion<T>
> (opts: {
  events: T
}) => {
  return {
    createHandler: (sender: (event: EventsAsToDiscriminateUnion) => void) => {
      return (event: EventsAsToDiscriminateUnion) => {
        const eventSchema = z.object({
          ...opts.events[event.type],
          type: z.literal(event.type)
        })

        sender(eventSchema.parse(event) as EventsAsToDiscriminateUnion)
      }
    }
  }
}