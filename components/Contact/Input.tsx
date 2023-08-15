import { UseFormRegister, Path } from 'react-hook-form';

type ReactHookFormRules = {
    required?: {
        value: boolean
        message: string
    }
    minLength?: {
        value: number
        message: string
    }
    maxLength?: {
        value: number
        message: string
    }
    pattern?: {
        value: RegExp
        message: string
    }
}

type ReactHookFormValues = {
    name: string
    email: string
    subject: string
    message: string
}

type InputProps = {
    type: string
    placeholder: string
    isError: boolean
    errorMessage: string | undefined
    register: UseFormRegister<ReactHookFormValues>
    label: Path<ReactHookFormValues>
    rules: ReactHookFormRules
    textarea?: boolean
    className?: string
}

const Input = ({ type, placeholder, errorMessage, rules, register, label, textarea, className }: InputProps) => {
    const SizedInput = textarea ? 'textarea' : 'input'
    return (
        <div className='relative w-full'>
            <SizedInput type={type} placeholder={placeholder} className={`${errorMessage && 'border-red-500'}
            ${textarea && 'translate-y-[8px]'} ${className} input`}
                {...register(label, rules)} />
            {errorMessage !== undefined && <p className='absolute top-full'>{errorMessage}</p>}
        </div>
    );
}

export default Input;