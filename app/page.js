"use client"
import BeautifulButton from "@/components/button"

export default function Home() {
  return (
    <div className="bg-dark-100 min-h-screen flex flex-col justify-center items-center">
    <main className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Join with Balkrishna Universe</h2>
      <div className="mb-8">
        <BeautifulButton text="Meet Now" href="/now" gradient={true} />
      </div>
    </main>
  </div>
    
      
       
      
     


    
  )
}
