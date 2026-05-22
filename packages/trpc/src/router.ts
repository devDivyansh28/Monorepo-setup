import { publicProcedure , router} from "./trpc.js";

export const appRouter = router({
    health: publicProcedure.query(
        ()=>{

            return {
                message : "Hello I am Working"

            }
        }
    )
})


export type AppRouter = typeof appRouter;