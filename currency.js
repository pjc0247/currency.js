"use strict";

class Currency
{
  static buildUri(code1, code2) {
    // select * from yahoo.finance.xchange where pair in ("USDMXN")
    let query = `select * from yahoo.finance.xchange where pair in ("${code1 + code2}")`;
    return `https://query.yahooapis.com/v1/public/yql?q=${escape(query)}&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&format=json`;
  }
  static query(code1, code2) {
    let uri = this.buildUri(code1, code2);
    return new Promise(function(resolve, reject){
      FlyJSONP.get({
        url: uri,
        success: function (data) {
          resolve(data.query.results.rate);
        },
        error: function (error) {
          reject(error);
        }
      });
    });  
  }
}
