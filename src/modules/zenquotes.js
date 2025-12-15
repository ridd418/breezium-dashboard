// ********************************Quotes API********************************
const getData = async () => {
    const base = "http://zenquotes.localhost/api"
    try {
        console.log('Fetching new quote...')
        const res = await fetch(`${base}/random`)
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        const data = await res.json()
        console.log('New quote fetched!')
        return data
    } catch (err) {
        console.error('Failed to fetch quote from API:', err)
    }
}

let DATA = JSON.parse(localStorage.getItem('quote_data'))

const getToday = () => {
    const now = new Date()

    const [y, m, d] = [
        now.getUTCFullYear(),
        now.getUTCMonth() + 1,
        now.getUTCDate()
    ]

    return `${y}${m}${d}`
}

const cacheQuote = async () => {
    DATA = {quote: (await getData())[0], lastFetched: getToday()}

    localStorage.setItem('quote_data', JSON.stringify(DATA))
}

if (!DATA || DATA.lastFetched !== getToday()) await cacheQuote()

const {a, q} = DATA.quote
const quoteEl = document.getElementById('quote')
quoteEl.innerHTML = `<blockquote>&ldquo;${q}&rdquo;<cite>&mdash; ${a}</cite></blockquote>`