import * as yup from 'yup';

export const stepsValidationSchema = [
  yup.object().shape({}),
  yup.object().shape({
    companyCode: yup
      .number()
      .required('Company Code is required')
      .typeError('The information does not match'),
    companyName: yup.string().required('Company Name is required'),
    companyRegistration: yup.string().required('Surname is required'),
  }),
  yup.object().shape({
    name: yup.string().required('Name is required'),
    surname: yup.string().required('Surname is required'),
    jobTitle: yup.string().required('Job title is required'),
    countryCode: yup
      .number()
      .typeError('Country code should be a valid number')
      .positive()
      .min(1)
      .required('Country code is required'),
    phoneNumber: yup
      .number()
      .typeError('Phone number should be a valid number')
      .positive()
      .min(1)
      .required('Phone is required'),
    privacyPolicy: yup.bool().oneOf([true], 'Privacy policy title is required'),
    partnership: yup.bool().oneOf([true], 'Partnership policy title is required'),
  }),
];
