const fetch = require('node-fetch');

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "<REQUIRED>");

const url = 'https://strainraygorodskijv1.p.rapidapi.com/getAllStrains';

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'StrainraygorodskijV1.p.rapidapi.com'
  },
  body: encodedParams
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));