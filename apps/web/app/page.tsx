"use client"

import { useState } from 'react'
import {createUserSchema} from "@monorepo/utils"

import type {SubmitEvent} from "react"
import axios from 'axios';

export default function Home() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error , setError] = useState("");

  const [success , setSuccess] = useState("");
  

  async function handleSubmit(e : SubmitEvent ){
    setError("")
    setSuccess("")
    e.preventDefault();
     const result = createUserSchema.safeParse({name,email,password});

     if(!result.success){
       const message = result.error.issues.map((issue)=>{
        issue.path.join(", ")
       })

       setError(message.join("\n"));

      }

      try{
       const response = await axios.post("http://localhost:5000/users",result.data)

       setSuccess("User created Successfully")
      }
      catch{
         setError("Some error occured")
      }
  }

  return (
    <main>
      <form onSubmit={handleSubmit} noValidate={true}>
        <input type="text" placeholder="John Doe " value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder="john@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button type="submit">Submit</button>

        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        
      </form>
    </main>
  )
}