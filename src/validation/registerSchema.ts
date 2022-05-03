import * as yup from 'yup';

const registerSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email('Invalid email address').required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Oops! You need a password longer than 8 characters with numbers and letters.',
    )
    .required(),
});

export default registerSchema;
