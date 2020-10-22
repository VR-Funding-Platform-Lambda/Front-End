import * as yup from 'yup';

const formSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Please enter an email address'),
    password: yup.string().min(6,'Please enter a valid password').required('Please enter a password'),
    fullName: yup.string().min(3,'Please enter name that is longer than 3 characters').required('Please enter name that is longer than 3 characters')
});
export default formSchema;