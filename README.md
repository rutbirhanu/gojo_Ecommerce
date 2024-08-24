# gojo_Ecommerce


## Prerequisites
- Node.js 
- npm 
- MongoDB
- Firebase account


## Installation
  - cd Backend ====> npm install
  - cd Gojo_Frontend  =====> npm install


## Set up environment variables
  - MONGODB_CONNECTION=YOUR_MONGODB_CONNECTION_STRING
  - JWT_SECRET=YOUR_JWT_SECRET

##Files to be created (From Firebase )

  - file named "firebase.js" inside the src directory holding and include the information from firebase and it most likely looks like this
  
const firebaseConfig = {
  apiKey: "AIzaSyBaDvJDenMtqkqzkBFWGW67NEzuv06AKVI",
  authDomain: "your-app-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456",
  measurementId: "G-XYZ123ABC"
};



    
  - and file named "serviceAccounKey.json" inside the backend main directory and include values that somehow look like this 
    {
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account-email@your-project-id.iam.gserviceaccount.com",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/identitytoolkit/v3/relyingparty/publicKeys"
}


    
