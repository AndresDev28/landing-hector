import Image from "next/image"

export function BackgroundHero() {
  return (
    <div className='relative w-full h-full'>
      <Image src="/hero-image1.jpg" 
      alt="Hero Image" 
      fill 
      className="object-cover" 
      priority
      />
    </div>
  )
}
