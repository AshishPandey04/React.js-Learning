import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
 const [amount , setAmount] = useState(0)
 const [from,setFrom]=useState("usd")
 const [to,setTo]=useState("inr")
 const [convertedAmount , setConvertedAmount] = useState(0)


 const currencyInfo = useCurrencyInfo(from)
 const options =Object.keys(currencyInfo)

 const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)

 }

 const convert =()=>{
  setConvertedAmount( amount  *currencyInfo[to])
 }
 

 
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-around items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400')`,
      }}
  >
   {/* <div className="bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-lg rounded-lg border border-gray-300 p-6 sm:p-8 md:p-10 text-center m-4 sm:m-8 md:m-12">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">CURRENCY</h1>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mt-2">CONVERTER</h1>
</div> */}

<div className="bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-lg rounded-lg border border-gray-300 p-6 sm:p-8 md:p-10 text-center m-4 sm:m-8 md:m-12">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-600">
    CURRENCY
  </h1>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mt-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-600">
    CONVERTER
  </h1>
</div>
           <div className="max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=> setFrom(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount) => setAmount(amount)}
                        
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={to}
                          amountDisable
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" 
                  onClick={()=> convert}>
                      Convert { from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          {/* </div> */}
      </div>
  </div>
);
}

export default App
