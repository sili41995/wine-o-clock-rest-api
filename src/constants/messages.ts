import ProfileSettings from './profileSettings';

const enum Messages {
  dbConnectSuccess = 'Database connection successful',
  firstNameReqErr = 'Missing required first name field',
  lastNameReqErr = 'Missing required last name field',
  restorePassMsg='Password recovery email sent',
  // taskRequiredErr = 'Missing required task field',
  // deadlineRequiredErr = 'Missing required deadline field',
  // missingFileErr = 'File is absent',
  // wrongPasswordErr = 'Password is wrong',
  emptyStringErr = 'Value cannot be the empty string',
  missingFieldsErr = 'Missing fields',
  duplicateEmailErr = 'Email already use',
  // invalidDateErr = 'To get monthly progress, you need to specify the valid year and month',
  incorrectCredentialsErr = 'Email or password is wrong',
  passwordReqErr = 'Missing required password field',
  passwordMinLengthErr = `Password length must be at least ${ProfileSettings.passMinLength} characters long`,
  passwordMaxLengthErr = `Password length must be no more than ${ProfileSettings.passMaxLength} characters long`,
  passwordRepeatErr = 'The entered passwords must be the same',
  passwordRepeatReqErr = 'Missing required password repeat field',
  emailReqErr = 'Missing required email field',
  emailRegExpErr = 'Email must be letters, digits, dot, special symbols and @',
  phoneNumberReqErr = 'Missing required phone number field',
  phoneNumberRegExErr = 'Phone number must be digits and can start with character +',
}

export default Messages;
