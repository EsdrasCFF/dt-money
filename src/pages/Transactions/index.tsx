import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions () {
  return(
    <div>
      <Header/>
      <Summary/>


      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%" >Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income" >
                  R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            
            <tr>
              <td width="50%" >ALimentação</td>
              <td>
                <PriceHighLight variant="outcome" >
                  - R$ 300,00
                </PriceHighLight>
              </td>
              <td>Despesa</td>
              <td>13/04/2022</td>
            </tr>
            
            <tr>
              <td width="50%" >Aluguek</td>
              <td>
                <PriceHighLight variant="outcome" >
                  - R$ 2500,00
                </PriceHighLight>
              </td>
              <td>Despesa</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
     
      </TransactionsContainer>
    </div>
  )
}