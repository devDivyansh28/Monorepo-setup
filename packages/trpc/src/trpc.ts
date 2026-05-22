import {initTRPC} from "@trpc/server"

const t = initTRPC.create();

export const router = t.router; // It helps to define function  

export const publicProcedure = t.procedure; // These are functions