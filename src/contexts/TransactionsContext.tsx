import { ReactNode, createContext, useEffect, useState } from "react";

interface ITransactions {
  id: number,
  description: string,
  type: "income" | "outcome",
  category: string,
  price: number,
  created_at: string
}

interface ITransactionsContextType {
  transactions: ITransactions[],
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContextType )

export function TransactionsProvider({children}: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);


  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json()

    setTransactions(data)
  }


  useEffect(()=> {
    loadTransactions()
  }, [])

  return(
    <TransactionsContext.Provider value={{transactions}} >
      {children}
    </TransactionsContext.Provider>
  )
}