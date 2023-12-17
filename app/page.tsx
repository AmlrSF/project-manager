import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <div>
        <h1 className='mt-10 text-2xl font-bold  capitalize'>Welcome to project managment</h1>
        <p className='text-slate-600 mb-5 font-extralight texl-sm  max-w-[500px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ipsam eum deserunt, 
        reprehenderit perferendis natus dignissimos nisi voluptatem odio saepe possimus modi voluptas. Facere, assumenda.</p>
        <Link href="/newProject" className='text-white font-medium
      mt-10 bg-[#EF47BC] rounded-lg px-6 py-3 '>New Project</Link>
      </div>
    </div>
  )
}
