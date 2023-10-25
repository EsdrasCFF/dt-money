import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ITransactions {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  created_at: string
}

interface IcreateTransactionProps {
  category: string
  price: number
  type: 'income' | 'outcome'
  description: string
}

interface ITransactionsContextType {
  transactions: ITransactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: IcreateTransactionProps) => Promise<void>
}

interface ITransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function fetchTransactions(query?: string) {
    const respose = await api.get('/transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(respose.data)
  }

  async function createTransaction(data: IcreateTransactionProps) {
    const { category, description, price, type } = data

    const response = await api.post('/transactions', {
      category,
      price,
      description,
      type,
      created_at: new Date(),
    })

    setTransactions((prevState) => [response.data, ...prevState])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
