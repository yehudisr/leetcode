// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices) {
    let maxProfit = 0;
    
    let minBuyPrice = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      if (minBuyPrice > prices[i]) {
        minBuyPrice = prices[i];
      }
  
      const currentProfit = prices[i] - minBuyPrice;
  
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  
    return maxProfit;
  }


  prices = [7,1,5,3,6,4]
  maxProfit(prices)