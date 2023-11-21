## GAS URL
<a href="https://script.google.com/d/144swsxTPpxDWS3XLE2gK1iO-gnCpqv6mTMJUHCGrBrEfW-Nj7EPoFpmB/edit?usp=sharing" target="_blank"> https://script.google.com/d/144swsxTPpxDWS3XLE2gK1iO-gnCpqv6mTMJUHCGrBrEfW-Nj7EPoFpmB/edit?usp=sharing </a>

## Summary
<p> This webpage serves as a way to check up on the daily prices of stocks and popular, recent mentions of the stock in the news. Through the implementation of many functions described below, such as the ones responsible for fetching the data, and the ones responsible for displaying the data, this webpage is able to process this information through a backend and display it using this frontend. The HTML serves as a way to structure both the input of information as well as the display/response of information.  </p>


## Constants

<dl>
<dt><a href="#GAS_URL">GAS_URL</a> : <code>string</code></dt>
<dd><p>URL for Google Apps Script.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#main">main()</a></dt>
<dd><p>Creates eventlistener for the analyze button</p>
</dd>
<dt><a href="#search">search()</a></dt>
<dd><p>Stores values that were typed in and inputs them into getDataFromGAS function</p>
</dd>
<dt><a href="#getDataFromGAS">getDataFromGAS(stock, top, url)</a></dt>
<dd><p>Fetches data from the Google Apps Script Backend and then checks for errors</p>
</dd>
<dt><a href="#updateInfo">updateInfo(data)</a></dt>
<dd><p>Updates the HTML given the fetched data.</p>
</dd>
<dt><a href="#reset">reset()</a></dt>
<dd><p>Resets the html, used when refreshing the info and when errors are thrown.</p>
</dd>
<dt><a href="#checkError">checkError(data)</a></dt>
<dd><p>Checks for errors in fetching the stock data and news data respectively. It then handles that error.</p>
<p>If there are no errors, it calls the updateInfo function in order to proceed normally with the data.</p>
</dd>
</dl>

<a name="GAS_URL"></a>

## GAS\_URL : <code>string</code>
URL for Google Apps Script.

**Kind**: global constant  
<a name="main"></a>

## main()
Creates eventlistener for the analyze button

**Kind**: global function  
<a name="search"></a>

## search()
Stores values that were typed in and inputs them into getDataFromGAS function

**Kind**: global function  
<a name="getDataFromGAS"></a>

## getDataFromGAS(stock, top, url)
Fetches data from the Google Apps Script Backend and then checks for errors

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| stock | <code>string</code> | The stock being searched. |
| top | <code>string</code> | The top value for the search. |
| url | <code>string</code> | The GAS URL. |

<a name="updateInfo"></a>

## updateInfo(data)
Updates the HTML given the fetched data.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The data to display. |

<a name="reset"></a>

## reset()
Resets the html, used when refreshing the info and when errors are thrown.

**Kind**: global function  
<a name="checkError"></a>

## checkError(data)
Checks for errors in fetching the stock data and news data respectively. It then handles that error.

If there are no errors, it calls the updateInfo function in order to proceed normally with the data.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The fetched data to check. |

