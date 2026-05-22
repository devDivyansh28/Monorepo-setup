import { useState } from 'react'
import {createUserSchema} from "@monorepo/utils"

import type {SubmitEvent} from "react"

export default function Home() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error , setError] = useState("");

  const [success , setSuccess] = useState("");
  

  async function handleSubmit(e : SubmitEvent){
    e.preventDefault();
     const result = createUserSchema.safeParse({name,email,password});

     if(!result.success){
       const message = result.error.issues.map((issue)=>{
        issue.path.join(", ")
       })

       setError(message.join("\n"));
  }
    
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="John Doe " value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder="john@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button type="submit">Submit</button>
        
      </form>
    </main>
  )
}}