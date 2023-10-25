import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ITransactions {
  id: number,
  description: string,
  type: "income" | "outcome",
  category: string,
  price: number,
  created_at: string
}

interface ITransactionsContextType {
  transactions: ITransactions[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionsContextType )

export function TransactionsProvider({children}: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);


  async function fetchTransactions(query?: string) {
    const respose = await api.get("/transactions", {
      params: {
        q: query
      }
    })

    setTransactions(respose.data)
  }


  useEffect(()=> {
    fetchTransactions()
  }, [])

  return(
    <TransactionsContext.Provider value={{transactions, fetchTransactions}} >
      {children}
    </TransactionsContext.Provider>
  )
}