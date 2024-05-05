# 1 signUp

POST /api/auth/signup

req: {

  email: letters, digits, . and @
  
  password: 8-48 symbols
  
  phoneNumber: only + and numbers
  
  firstName: string
  
  lastName: string
  
}

res: user info

# 2 signIn

POST /api/auth/signin

req: {

  email: letters, digits, . and @
  
  password: 8-48 symbols
  
}

res: user info

# 3 signOut PRIVATE

POST /api/auth/signout

JWT in header Authorization

req: empty body

res: empty body

# 4 current PRIVATE

GET /api/auth/current

JWT in header Authorization

req: empty body

res: user info
