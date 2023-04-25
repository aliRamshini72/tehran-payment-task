import styled from "styled-components";
import {useEffect, useState} from "react";
import useDebounce from "../hooks/useDebounce";
import SearchInput from "../component/SearchInput";
import {httpGetCurrencies} from "../http/currencies/currenciesController";
import Currencies from "../component/Currencies";

const Page = styled.main`
  padding: 4rem;
`

const SearchBar = styled.div`
  margin: 1.5rem 0;
`

export default function CurrenciesPage() {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const debounceValue = useDebounce<string>(searchQuery, 1000);
    const [currencies, setCurrencies] = useState([]);
    const [filterCurrencies, setFilterCurrencies] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        getCurrencies()
    }, [])
    useEffect(() => {
        if (currencies.length > 0) {
            if (debounceValue) {
                const filterList = currencies.filter((p: any) =>
                    p.symbol.toLowerCase().includes(debounceValue.toLowerCase())
                    || p.name.toLowerCase().includes(debounceValue.toLowerCase()))
                setFilterCurrencies(filterList)
            } else setFilterCurrencies(currencies)
        }
    }, [debounceValue, currencies])
    const getCurrencies = async () => {
        const res = await httpGetCurrencies();
        if (!res.error) {
            setCurrencies(res)
        } else setErrorMessage(res.error)
    }
    return (
        <Page>
            <SearchBar>
                <SearchInput
                    value={searchQuery}
                    onChange={(value: string) => setSearchQuery(value)}
                    placeholder={"search currency"}/>
            </SearchBar>
            {errorMessage ? errorMessage : <Currencies items={filterCurrencies}/>}

        </Page>
    )
}