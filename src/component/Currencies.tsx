import styled from "styled-components";
import SparklineChart from "./SparklineChart";


const CurrencyCard = styled.div`
  box-shadow: 1px 1px 1px 1px #e2e2e2;
  padding: 1rem;
  border-radius: .25rem;
`

const CurrencyItem = ({currency}: { currency: any }) => {
    return (
        <CurrencyCard>
            <Currency/>
            <SparklineChart prices={[]} percent={100}/>
            <Price/>
            <PercentTag/>
            {currency.name}
        </CurrencyCard>
    )
}


export default function Currencies({items}: { items: any[] }) {
    return (
        <>
            {items.map((item: any) => <CurrencyItem key={item.id} currency={item}/>)}
        </>
    )
}