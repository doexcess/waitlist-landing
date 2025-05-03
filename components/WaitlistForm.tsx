import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from './ui/icons/Icon';
import Image from 'next/image';

export function WaitlistForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant='outline'>Edit Profile</Button> */}
        <Button className='mt-6 inline-flex items-center gap-2 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full px-6 py-6 text-[#4045e1] dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 transition cursor-pointer'>
          <div className='flex -space-x-2'>
            <Image
              src='/icons/chat/avatars/image4.png'
              alt='avatar1'
              width={28}
              height={28}
              className='rounded-full border border-white'
            />
            <Image
              src='/icons/chat/avatars/image2.png'
              alt='avatar2'
              width={28}
              height={28}
              className='rounded-full border border-white'
            />
            <Image
              src='/icons/chat/avatars/image6.png'
              alt='avatar3'
              width={28}
              height={28}
              className='rounded-full border border-white'
            />
          </div>
          <span className='font-semibold'>Join the Waitlist</span>
          {/* <span className='text-[#4045e1]'></span> */}
          <Icon url='/images/arrow.png' width={25} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add to waitlist</DialogTitle>
          <DialogDescription>
            Join the waitlist to be among the first to get access.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='email' className='text-right'>
              Email
            </Label>
            <Input
              id='email'
              value='@peduarte'
              className='col-span-3'
              onChange={() => {}}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Join</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
