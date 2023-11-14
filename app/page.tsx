import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Welcome home page
        </div>
        <div>
          <Link href="/route1">Route1</Link>
          <Link href={"/route2"}>Route2</Link>
        </div>
      </main>
    </>
  )
}
