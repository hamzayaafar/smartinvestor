
/**
 * URL for fetching Google Apps Script.
 * @constant
 * @type {string}
 */
const GAS_URL = 'https://script.google.com/macros/s/AKfycbymi8k45iZ4kgcjtl23iUG-dweMy4CIacmgzOemxQHLvqzkKZMZseA9AA-dEu67Bg6g/exec'

/**
 * Creates eventlistener for the analyze button
 */
function main () {
  document.getElementById('submit').addEventListener('click', search)
}

try {
  main()
} catch (e) {
  console.error(e)
}
/**
 * Stores values that were typed in and inputs them into getDataFromGAS function
 */
function search () {
  const stock = document.getElementById('stockInput').value
  const top = document.getElementById('topInput').value
  getDataFromGAS(stock, top, GAS_URL)
}

/**
 * Fetches data from the Google Apps Script Backend and then checks for errors
 *
 * @param {string} stock - The stock being searched.
 * @param {string} top - The top value for the search.
 * @param {string} url - The GAS URL.
 */
async function getDataFromGAS (stock, top, url) {
  try {
    // fetches GAS data
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ stock, top })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error('Error fetching')
    }
    // calls on checkError to check data for errors and then update HTML
    checkError(data)
  } catch (error) {
    console.error('Fetch error:', error)
  }
}
/**
 * Updates the HTML given the fetched data.
 *
 * @param {Object} data - The data to display.
 */
function updateInfo (data) {
  // resets HTML remove previous data
  reset()
  // scroll-box is hidden by default, and also hidden after an error is thrown, this makes it visible when updating.
  document.getElementById('scroll-box').style.visibility = 'visible'
  // Updates stock price HTML div with respective data
  document.getElementById('scrollBox1').innerHTML =
     `<b>Daily Price Data</b><br><br>
      <b>Date:</b> ${data.updated}<br><br>
      <b>Open: </b> ${data.stock['1. open']}<br><br>
      <b>High: </b> ${data.stock['2. high']}<br><br>
      <b>Low: </b> ${data.stock['3. low']}<br><br>
      <b>Close: </b> ${data.stock['4. close']}<br><br>
      <b>Volume: </b> ${data.stock['5. volume']}<br><br>`

  // Updates news HTML div with respective data
  document.getElementById('scrollBox2').innerHTML =
    `<b> Top News Articles </b> <br>(As of ${data.newsDate}) <br><br>`
  // Since number of articles is variable, the for loop ensures only the requested articles are shown.
  for (const article of data.news) {
    document.getElementById('scrollBox2').innerHTML +=
      `Source: <a target="_blank" href=${article.url}> ${article.source.name} </a> <br><br> Title: ${article.title} <br><br><br>`
  }
}

/**
 * Resets the html, used when refreshing the info and when errors are thrown.
 */
function reset () {
  document.getElementById('scrollBox1').innerHTML = ''
  document.getElementById('scrollBox2').innerHTML = ''
}

/**
 * Checks for errors in fetching the stock data and news data respectively. It then handles that error.
 *
 * If there are no errors, it calls the updateInfo function in order to proceed normally with the data.
 * @param {Object} data - The fetched data to check.
 */
function checkError (data) {
  const alert = document.getElementById('scrollinst')

  let errors = false
  let errorMessage = ''
  // if error found when fetching stock data, error message is defined and boolean is set to true.
  if (data.stockstatus !== 'Success') {
    errorMessage = 'Error Finding Stock Data'
    errors = true
  }
  // if error found when fetching news data, error message is defined and boolean is set to true.
  if (data.newsstatus !== 'Success') {
    errorMessage += (errorMessage ? ' | ' : '') + 'Error Finding News Data'
    errors = true
  }

  if (!errors) {
    // if no error found, calls the update function and sets instructions in HTML.
    updateInfo(data)
    alert.innerHTML = `Scroll in each box to see more info about <b>${data.stockname}</b>!`
  } else {
    // if error is found, hides scroll-boxes and shows error message in HTML.
    document.getElementById('scroll-box').style.visibility = 'hidden'
    alert.innerHTML = errorMessage
  }
}
