'use client'
import {useState} from 'react'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'

const inputStyling =
  'w-full rounded-md border bg-white px-3 py-2 text-black shadow ring-offset-background file:flex file:border-0 file:bg-transparent file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:px-5 xl:py-3 xl:text-base'

const textareaStyling =
  '3xl:text-2xl flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-black shadow ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xl:text-base'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const encodedFormData = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodedFormData.toString(),
      })

      if (!response.ok) {
        console.log('Failed to send message')
        throw new Error(`response status: ${response.status}`)
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      const responseData = await response.json()
      console.log(responseData.message)
      alert('Message successfully sent!')
    } catch (err) {
      console.error(err)
      alert('Error, please try again.')
    }
  }
  return (
    <form
      className='w-full space-y-4 sm:space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8'
      onSubmit={handleSubmit}
    >
      <Label htmlFor='name' className='sr-only'>
        Name
      </Label>
      <Input
        type='text'
        id='name'
        name='name'
        placeholder='Your Name'
        autoComplete='on'
        value={formData.name}
        onChange={handleInputChange}
        className={`${inputStyling}`}
        required
      />
      <Label htmlFor='email' className='sr-only'>
        Email
      </Label>
      <Input
        type='email'
        id='email'
        name='email'
        placeholder='Your Email'
        autoComplete='on'
        value={formData.email}
        onChange={handleInputChange}
        className={`${inputStyling}`}
        required
      />

      <Label htmlFor='subject' className='sr-only'>
        Subject
      </Label>
      <Input
        type='text'
        id='subject'
        name='subject'
        placeholder='Subject'
        autoComplete='on'
        value={formData.subject}
        onChange={handleInputChange}
        className={`${inputStyling}`}
        required
      />
      <Label htmlFor='message' className='sr-only'>
        Message
      </Label>
      <Textarea
        id='message'
        name='message'
        rows={4}
        placeholder='Your Message'
        value={formData.message}
        onChange={handleInputChange}
        className={`${textareaStyling}`}
        required
      />
      <div className='flex items-center justify-center pt-2'>
        <Button className='uppercase tracking-tight' size='dynamic' type='submit' variant='shimmer'>
          <span className='text-sm'>Send Message</span>
        </Button>
      </div>
    </form>
  )
}
