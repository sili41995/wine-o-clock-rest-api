### 1 signUp

    POST /api/auth/signup

req:

    {

    email: letters, digits, . and @

    password: 8-48 symbols

    passwordRepeat: 8-48 symbols

    phoneNumber: only + and numbers

    firstName: string

    lastName: string

    }

res:

    user info

### 2 signIn

    POST /api/auth/signin

req:

    {

    email: letters, digits, . and @

    password: 8-48 symbols

    }

res:

    user info

### 3 signOut PRIVATE

    POST /api/auth/signout

JWT in header Authorization

req:

    empty body

res:

    empty body

### 4 current PRIVATE

    GET /api/auth/current

JWT in header Authorization

req:

    empty body

res:

    user info

### 5 restore password

    POST /api/auth/restore-password

req:

    {

    email: letters, digits, . and @

    }

res:

    message

### 6 update password

    PATCH /api/auth/restore-password/:restorePasswordToken

req:

    {

    password: 8-48 symbols

    passwordRepeat: 8-48 symbols

    }

res:

    message

### 7 get allProducts

    GET /api/products

queries:

    {

    page: string,

    limit: string,

    title: string

    }

res:

    {

    products:

    {

    id: string;

    title: string;

    price: number;

    adminDiscountPercentage: number;

    description: string;

    quantity: number;

    bottleCapacity: number;

    alcohol: number;

    isNewCollection: boolean;

    isBestSeller: boolean;

    isSale: boolean;

    isWineTimePromotion: boolean;

    winemaking: string;

    grapeVarieties: string;

    tastingNotes: string;

    storeAndServeAdvices: string;

    foodPairing: string;

    reviewsAndAwards: string;

    wineColor: string;

    sugarConsistency: string;

    country: string;

    region: string;

    evaluation: number;

    comments: [];

    bottlesSoldCounter: number;

    imageUrl: string;

    },

    count: number

    }[]

### 8 get productById

    GET /api/products/{productId}

res:

    { productData }

### 9 add favotiteProduct

    POST /api/favorites

req:

    {

    productId: 24 symbols

    }

res:

    string[]

### 10 delete favotiteProduct

    DELETE /api/favorites/:id

res:

    string[]

### 11 get allFavorites

    GET /api/favorites

res:

    string[]

### 12 get cart

    GET /api/cart

res:

    {

    id: string;

    productId: string;

    amount: number

    }[]

### 13 add to cart

    POST /api/cart

req:

    {

    productId: string;

    amount: number | undefined = 1

    }

res:

    {

    id: string;

    productId: string;

    amount: number

    }

### 14 update product amount in cart

    PATCH /api/cart/amount/:id

req:

    {

    amount: number;

    }

res:

    {

    id: string;

    productId: string;

    amount: number

    }

### 15 delete product in cart

    DELETE /api/cart/:id

res:

    {

    id: string;

    productId: string;

    amount: number

    }
