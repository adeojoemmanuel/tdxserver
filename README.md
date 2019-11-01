hotel automate api
- set up for dev

	1) `git clone https://github.com/adeojoemmanuel/tdxserver.git`

	2) `cd tdxserver`

	3) `npm install`

- serve project 

	`node server`

# register account

## Base URL : 'https://10.0.0.1/api/'

- *POST* `/register`

```js
{
    email : required, 11, int
    password : required, 11, int
    phone : required, 11, int
}
```




- run test

	`npm test`

