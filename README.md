### 1 signUp

POST /api/auth/signup

req: {

  email: letters, digits, . and @
  
  password: 8-48 symbols

  passwordRepeat: 8-48 symbols
  
  phoneNumber: only + and numbers
  
  firstName: string
  
  lastName: string
  
}

res: user info

### 2 signIn

POST /api/auth/signin

req: {

  email: letters, digits, . and @
  
  password: 8-48 symbols
  
}

res: user info

### 3 signOut PRIVATE

POST /api/auth/signout

JWT in header Authorization

req: empty body

res: empty body

### 4 current PRIVATE

GET /api/auth/current

JWT in header Authorization

req: empty body

res: user info

### 5 restore password

POST /api/auth/restore-password

req: {

  email: letters, digits, . and @
  
}

res: message

### 6 update password

PATCH /api/auth/restore-password/:restorePasswordToken

req: {

  password: 8-48 symbols

  passwordRepeat: 8-48 symbols
  
}

res: message
