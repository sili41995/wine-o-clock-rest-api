import ProfileSettings from './profileSettings';

const enum Messages {
  dbConnectSuccess = 'Database connection successful',
  firstNameReqErr = 'Missing required first name field',
  lastNameReqErr = 'Missing required last name field',
  // taskRequiredErr = 'Missing required task field',
  // deadlineRequiredErr = 'Missing required deadline field',
  // incorrectCredentialsErr = 'Email or password is wrong',
  // missingFileErr = 'File is absent',
  // wrongPasswordErr = 'Password is wrong',
  emptyStringErr = 'Value cannot be the empty string',
  missingFieldsErr = 'Missing fields',
  duplicateEmailErr = 'Email already use',
  // invalidDateErr = 'To get monthly progress, you need to specify the valid year and month',
  passwordReqErr = 'Missing required password field',
  passwordMinLengthErr = `Password length must be at least ${ProfileSettings.passMinLength} characters long`,
  passwordMaxLengthErr = `Password length must be no more than ${ProfileSettings.passMaxLength} characters long`,
  passwordRepeatErr = 'The entered passwords must be the same',
  passwordRepeatReqErr = 'Missing required password repeat field',
  emailReqErr = 'Missing required email field',
  emailRegExpErr = 'Email must be letters, digits, dot, _____ and @',
  phoneNumberReqErr = 'Missing required phone number field',
  phoneNumberRegExErr = 'Phone number must be digits and can start with character +',
}

export default Messages;
