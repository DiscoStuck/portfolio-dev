// emailjs
import emailjs from 'emailjs-com'

// react hook form
import { useForm, SubmitHandler } from 'react-hook-form'

// button
import Button from '../../components/Button';
import Input from './Input';

type IFormInput = {
    name: string
    email: string
    subject: string
    message: string
}

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
console.log(serviceId, templateId, publicKey)


const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

    const sendEmail = (formData: Record<string, unknown>) => {

        emailjs
            .send(serviceId!, templateId!, formData, publicKey!)
            .then(
                (result) => {
                    console.log(result.text);
                    reset()
                },
                (error) => {
                    console.log(error.text);
                }
            );

    };

    return (
        <section className='h-full lg:h-screen py-[25vh] lg:py-0 flex w-full justify-center'>
            <div className='container text-center lg:text-left flex flex-col
      items-center h-full relative lg:justify-center xl:pr-40 xl:mt-[40px]'>
                {/* form */}
                <form
                    className='flex flex-col gap-12 xl:w-[80%] lg:w-full md:w-[600px] lg:flex-row items-center lg:justify-center'
                    onSubmit={handleSubmit(sendEmail)}
                >
                    <div className='flex-1 flex flex-col gap-y-8 w-full'>
                        {/* text */}
                        <h2 className='h2 text-center'>
                            Let's <span className='text-accent'>connect.</span>
                        </h2 >
                        {/* input */}
                        <div className='flex gap-x-6 w-full'>
                            <Input
                                type='text' placeholder='name' isError={true}
                                errorMessage={errors.name?.message}
                                rules={{
                                    required: { value: true, message: 'Name is required' },
                                    minLength: { value: 3, message: 'Name is too short' },
                                    maxLength: { value: 40, message: 'Name is too long' },
                                    pattern: { value: /^[A-Za-z]+$/, message: 'Invalid name' }
                                }}
                                register={register} label='name'
                            />
                            <Input
                                type='text' placeholder='email' isError={true}
                                errorMessage={errors.email?.message}
                                rules={{
                                    required: { value: true, message: 'Email is required' },
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' }
                                }}
                                register={register} label='email'
                            />
                        </div>
                        <Input
                            type='text' placeholder='subject' isError={true}
                            errorMessage={errors.subject?.message}
                            rules={{
                                required: { value: true, message: 'Subject is required' },
                                maxLength: { value: 10, message: 'Subject is too long' }
                            }}
                            register={register} label='subject'
                        />
                    </div>
                    <div className='flex-1 flex flex-col gap-y-8 w-full'>
                        <Input
                            type='text' placeholder='message' isError={true}
                            errorMessage={errors.message?.message}
                            rules={{
                                required: { value: true, message: 'Message is required' },
                                maxLength: { value: 300, message: 'Message is too long' }
                            }}
                            register={register} label='message' textarea className='textarea h-[174px]'
                        />
                        <Button text="Let's talk" paddingY={4} className='w-full' />
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Form