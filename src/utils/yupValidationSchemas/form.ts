import * as yup from 'yup';

export const stepsValidationSchema = [
  yup.object().shape({}),
  yup.object().shape({
    companyCode: yup.string().required('Company Code is required'),
    // different company code rules in different countries. should have a deeper company code validation service
    companyName: yup.string().required('Company Name is required'),
  }),
  yup.object().shape({
    name: yup.string().required('Name is required'),
    surname: yup.string().required('Surname is required'),
    jobTitle: yup.string().required('Job title is required'),
    phoneCode: yup.number().required('Phone code is required'),
    email: yup.string().email('E-mail address must be valid').required('Email is required'),
    phoneNumber: yup
      .number()
      .typeError('Phone number should be a valid number')
      .positive()
      .min(1)
      .required('Phone number is required'),
    privacyPolicy: yup.bool().oneOf([true], 'Privacy policy needs to be checked'),
    partnership: yup.bool().oneOf([true], 'Partnership policy needs to be checked'),
  }),
  yup.object().shape({}),
  yup.object().shape({}),
  yup.object().shape({}),
];
