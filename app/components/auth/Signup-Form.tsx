import { Form } from "@remix-run/react"
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'


export default function SignupForm() {
  return (
    <div className='w-full flex justify-center items-center min-h-screen '>
      <Form className='flex flex-col justify-center items-center gap-2' method="post">
        <Label className="flex flex-col gap-1" htmlFor="username">
          Username
          <Input type="text" name='username' placeholder="johndoe1" />
        </Label>
        <Label htmlFor="email">
          Email
          <Input type="email" name='email' placeholder="johndoe1@example.com" />
        </Label>
        <Label htmlFor="password">
          Password
          <Input type="password" name='username' placeholder="**********" />
        </Label>
        <Button className="w-full" type="submit">Submit</Button>
      </Form>
    </div>

  )
}

