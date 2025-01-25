export default function Footer() {
  const fullYear = new Date().getFullYear()
  return (
    <footer className='w-full flex justify-center items-center'>
      <span className='text-md font-semibold text-muted-foreground'>
        Copyright - {fullYear} All rights reserved.
      </span>
    </footer>
  )
}

