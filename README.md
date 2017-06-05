# Email Service API

a RESTful API that accepts the necessary information and sends emails

using [emailer-js](https://www.npmjs.com/package/emailer-js)

![](https://cloud.githubusercontent.com/assets/4859095/26795459/4d1b453a-4a58-11e7-9147-98dfedd46680.png)

## Getting Started

### Prerequisites

```
nodejs
```

### Setup Environment Variables

Update the development environment with your email service API keys

e.g. [SENDGRID_API_KEY] on (https://app.sendgrid.com/settings/api_keys)

```bash
echo "
export SENDGRID_API_KEY='YOUR_SENDGRID_API_KEY'

export MAILGUN_API_KEY='YOUR_MAILGUN_API_KEY'
export MAILGUN_DOMAIN='YOUR_MAILGUN_DOMAIN'

export SES_ACCESS_KEY='YOUR_SES_ACCESS_KEY'
export SES_SECRET_KEY='YOUR_SES_SECRET_KEY'
" > emailer.env
echo "emailer.env" >> .gitignore
source ./emailer.env
```

### Installing

```
npm install --save emailer-js-api
```

## Running the tests

You need to set the NODE_ENV environment variable to 'test' and install devDependencies before you run test

```
npm test
```

## Usage

Run
```
npm start
```
Open http://127.0.0.1:3000/

Click "Send Email" on nav menu

Input correct email information then click "Send" button

<img src="https://cloud.githubusercontent.com/assets/4859095/26797583/eebe3170-4a5f-11e7-844c-6b40a25d5a05.png" width="400">

## TODO

* **UI Improvement**
* **More Test Cases**
* **Host**

## Authors

* **Amanda Xiang** - *Initial work* - [Amanda Xiang](https://github.com/jialixiang)

See also the list of [contributors](https://github.com/jialixiang/emailer-js-api/contributors) who participated in this project.

## License

