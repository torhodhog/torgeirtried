'use client'

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailPops {
   token: string

}

const VerifyEmail = ({token}: VerifyEmailPops) => {

   const {data, isLoading, isError} = trpc.auth.verifyEmail.useQuery({
      token
   })
   if(isError){
      return (<div className="flex flex-col items-center gap-2">
         <XCircle className="h-8 w-8 text-red-800"/>
         <h3 className="font-semibold text-xl">Det har oppstått et problem</h3>
         <p className="text-muted-foreground text-sm">
            Denne identifikatoren er ugyldig eller har utløpt. Vennligst prøv igjen.
         </p>
      </div>
   )}
   if(data?.success){
      return(
         <div className="flex h-full flex-col items-center justify-center">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
               <Image 
               src='/hippo-email-sent.png'
               fill
               alt="the email was sent"
               />
            </div>
            <h3 className="font-semibold text-2xl">Alt er klart</h3>
            <p className="text-muted-foreground text-center mt-1">Takk for at du verifiserte din epost</p>
            <Link className={buttonVariants({className: 'mt-4' })} href='/sign-in'>Logg inn</Link>
         </div>
      )
   }

   if(isLoading){
      return(
         <div className="flex flex-col items-center gap-2">
         <Loader2 className="animate-spin h-8 w-8 text-zinc-300"/>
         <h3 className="font-semibold text-xl">Verifiserer...</h3>
         <p className="text-muted-foreground text-sm">
            Dette vil ikke ta lang tid.
         </p>
      </div>
   )}  
      
   }



export default VerifyEmail;