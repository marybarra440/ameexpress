import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg: "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      },
    ]
  },
  {
    id: '0002',
    firstName: 'Allan',
    lastName: 'Jeffrey Dyson',
    email: 'a***@gmail.com',
    username: 'Allankaley1956',
    password: 'Blessed@123',
    createdAt: '2026-1-4', // y-m-d
    transactionCode: '7894',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876543210',
        balance: 12000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Paypal',
            category: '****4389',
            date: 'Dec 28, 2025',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Paypal',
            category: '****1663',
            date: 'Dec 27, 2025',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Paypal',
            category: '****3667',
            date: 'Dec 26, 2025',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Paypal',
            category: '****2535',
            date: 'Dec 25, 2025',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Paypal',
            category: '****7543',
            date: 'Dec 24, 2025',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Paypal',
            category: '****3774',
            date: 'Dec 23, 2025',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Paypal',
            category: '****3667',
            date: 'Dec 22, 2025',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Paypal',
            category: '****4654',
            date: 'Dec 21, 2025',
            amount: 1500.0,
            status: 'success'
          },
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false,
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456789012',
        cardHolder: 'Allan Jeffrey Dyson',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        balance: 1652000.0,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      },
    ]
  }
];