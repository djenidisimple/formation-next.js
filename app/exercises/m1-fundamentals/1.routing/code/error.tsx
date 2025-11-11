'use client' // Error boundaries must be Client Components
 
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { TriangleAlert } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Card 
      className="
        grid grid-cols-[4%_94%] 
        gap-0 px-2 pb-3.5 pt-1.5
        border-red-900 text-red-900 text-sm
        rounded-md
      "
    >
        <CardTitle className='p-2 pt-2.5'>
            <TriangleAlert size={16}/>
        </CardTitle>
        <CardContent className='p-0 px-1'>
            <div className='flex flex-col gap-0.5'>
                <span className='block'>Error.tsx</span>
                <span className='block'>Please refresh the page or try again later</span>
            </div>
            <div className='flex gap-2'>
                <Button
                    variant={"outline"}
                    onClick={reset}
                >
                    Reset
                </Button>
                <Link
                    href={""}
                    className={buttonVariants({ variant: "outline" })}
                >
                    Remove error
                </Link>
            </div>
        </CardContent>
    </Card>
  )
}