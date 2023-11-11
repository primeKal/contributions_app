import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welocome home page
      <div>
        <Link href="/route1">Route1</Link>
        <Link href={"/route2"}>Route2</Link>
      </div>
    </main>
  )
}
