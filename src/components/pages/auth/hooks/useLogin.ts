import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { validationSchema } from '../validations/schema';

interface FormValues {
    email: string;
    password: string;
}

const initialValues: FormValues = {
    email: '',
    password: '',
};

export const useLogin = () => {
    const { handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues
    });

    const onSubmit = async(values: FormValues) => {
        // Handle form submission, e.g., send the data to the server
        console.log('Form submitted with values:', values);
        return {}
    };


    return {
        handleSubmit: handleSubmit(onSubmit),
        control,
        initialValues,
        reset,
        onSubmit,
        errors
    }
};
