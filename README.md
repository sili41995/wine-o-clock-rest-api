# 1 signUp

POST /api/auth/signup

{

  email: letters, digits, . and @
  
  password: 8-48 symbols
  
  phoneNumber: only + and numbers
  
  firstName: string
  
  lastName: string
  
}

# 2 signIn

POST /api/auth/signin

{

  email: letters, digits, . and @
  
  password: 8-48 symbols
  
}

# 3 signOut PRIVATE

POST /api/auth/signout

JWT in header Authorization

# 4 current PRIVATE

GET /api/auth/current

JWT in header Authorization
