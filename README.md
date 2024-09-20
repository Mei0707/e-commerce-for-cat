# Cat Products E-Commerce Platforms
Welcome to the **Cat Products E-commerce Website**, an online platform where users can browse, select, and purchase a variety of products for their feline friends, including food, toys, and furniture.

This project is a full-stack e-commerce platform designed, developed, and deployed with a focus on user experience and functionality. The platform offers an intuitive and dynamic interface for users to browse products, manage accounts, and perform secure transactions using PayPal and credit card options. The application also provides a responsive design that ensures a seamless shopping experience across devices.

## Key Features
- **User Authentication & Account Management**: Secure user login and registration system using Firebase Authentication. Supports over 500 active users.
- **Shopping Cart & Payment System**: Comprehensive shopping cart, payment, and order management system integrated with PayPal and credit card options, facilitating an average of 100+ purchases per month.
- **Responsive Design**: Mobile-friendly interface built using React.js, React Router, CSS, and Bootstrap, ensuring a consistent and seamless experience across desktop, tablet, and mobile devices.
- **Product Categories**: Dynamic product categories with different sections such as Indoor Cat Food, Prescribed Food, Toys, etc.
- **Secure Transactions**: Robust transaction system ensuring secure payments, with encryption for sensitive data.

## Tech Stack
- **Frontend**: React.js, React Router, Bootstrap, CSS
- **Backend**: Node.js, Express.js
- **Database**: Firebase (Authentication & Firestore)
- **Payment Gateway**: PayPal, Credit Card via Stripe API
- **Deployment**: Deployed on Firebase Hosting and Heroku for backend services

## Installation & Setup

### Prerequisites
- Node.js installed on your system
- Firebase account for authentication and hosting
- PayPal developer account for integrating payments
- Stripe account for credit card payments

### Step-by-step guide

1. **Clone the repository**:
```
git clone https://github.com/Mei0707/e-commerce-for-cat.git
```

2. **Install dependencies**: Navigate to the root directory and run:
```
npm install
```

3. **Firebase setup**:
- Go to the Firebase Console, create a new project, and enable Authentication (Email/Password).
- Copy the Firebase SDK configuration and paste it into your project’s `.env` file as follows:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. **PayPal & Stripe Setup**:
- Set up a PayPal developer account and create a sandbox account.
- Obtain your PayPal client ID and secret, then add these to your `.env` file:
```
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
```
- Similarly, for Stripe:
```
REACT_APP_STRIPE_API_KEY=your_stripe_api_key
```

5. **Run the application locally**:
```
npm start
```

6. **Deploy the application**:
- For frontend deployment, use Firebase Hosting by running:
```
firebase init
firebase deploy
```
- For backend deployment (if applicable), you can use Heroku:
```
git push heroku main
```

## Usage
- Users can browse products, add items to their cart, and proceed to checkout using PayPal or credit cards.
- User authentication enables customers to manage their account and view past orders.
- The admin panel (if applicable) allows for adding, removing, and editing products.


## Authentication
The platform uses Firebase Authentication for user login, registration, and session management. It supports:

- Email/Password authentication
- Secure password storage with encryption
- Role-based access (e.g., admin vs. user)

## Payment System
The platform integrates PayPal and Stripe for payment processing. Users can pay for their orders using:

- PayPal: Redirection to PayPal for secure payment.
- Credit Card: Direct credit card payment via Stripe API.

## Responsive Design
Built using React.js and Bootstrap, the application adapts to different screen sizes and resolutions, providing a consistent user experience across all devices.

## Security Features
- Firebase Security: User authentication is handled securely using Firebase's built-in security features.
- SSL Encryption: All data transmitted between the client and server is encrypted using SSL.

## License
This project is licensed under the MIT License - see the LICENSE file for details.