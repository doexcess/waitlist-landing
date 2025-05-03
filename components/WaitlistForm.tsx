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
import { useState } from 'react';
import axios from 'axios';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response: any = await axios.post('/api/subscribe', { email, name });

      if (response.status === 200) {
        let msg = response.data.message;

        if (
          msg !==
          'This email address already exists in the list. However, any additional information will be updated in the existing contact.'
        ) {
          msg =
            'Thanks for joining the waitlist! Pls check your mailbox to confirm the subscription.';
        }

        setMessage(msg);
        setName('');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form onSubmit={handleSubmit} className='space-y-4'>
          <DialogHeader>
            <DialogTitle>Add to waitlist</DialogTitle>
            <DialogDescription>
              Join the waitlist to be among the first to get access.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input
                type='name'
                id='name'
                value={name}
                className='col-span-3'
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='email' className='text-right'>
                Email
              </Label>
              <Input
                type='email'
                id='email'
                value={email}
                className='col-span-3'
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          {message && (
            <p
              className={`text-sm ${
                message.includes('Thanks') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}

          <DialogFooter>
            <Button type='submit' className='cursor-pointer'>
              {isSubmitting ? 'Submitting...' : 'Join'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
