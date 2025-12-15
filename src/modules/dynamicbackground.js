// ********************************Dynamic Backgrounds********************************

// Pull Image List and URL from JSON using fetch (Later!)
const imageList = {
    "0" : "dear-1.jpg",
    "2" : "dear-2.jpg",
    "4" : "dear-3.jpg",
    "6" : "dear-4.jpg",
    "8" : "dear-5.jpg",
    "10" : "dear-6.jpg",
    "12" : "dear-7.jpg",
    "14" : "dear-8.jpg",
    "16" : "dear-9.jpg",
    "18" : "dear-10.jpg",
    "20" : "dear-11.jpg", 
    "22" : "dear-12.jpg",
}

const url = "../test_assets/background_images/Lakeside/"

// document.body.style.backgroundImage = `url(${url + imageList[0]})`

let lastBracket = null

const getBracket = () => {
    const bracketKeys = Object.keys(imageList).map(Number).sort((a,b) => a-b)
    const hourOfDay = new Date().getHours()

    if (bracketKeys.includes(hourOfDay)) return hourOfDay

    // Find the largest key smaller than hourOfDay
    for (let i = 0; i < bracketKeys.length; i++) {
        if (bracketKeys[i] > hourOfDay) {
            return bracketKeys[i - 1] !== undefined ? bracketKeys[i - 1] : bracketKeys[0]
        }
    }

    // If hourOfDay is larger than all keys, pick the last key
    return bracketKeys[bracketKeys.length - 1]
}

export const update = () => {
    const currentBracket = getBracket()
    
    if (currentBracket === lastBracket) return
    document.body.style.backgroundImage = `url(${url + imageList[currentBracket]})`
    lastBracket = currentBracket 
}