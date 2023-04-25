import fetch, {Method} from './../axiosHelper'

export async function httpGetCurrencies() {
    return await fetch(`/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=true`, Method.GET, null);
}
