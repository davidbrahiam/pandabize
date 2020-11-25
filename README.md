# Pandabize Project

## Initialization

Install [brew](https://brew.sh/) manager

Install ruby

```
brew install ruby
```

Install yarn

```
brew install yarn
```

Install postgresql

```
brew install postgres
```

Clone this repo in your env

```
git clone https://github.com/davidbrahiam/pandabize.git
```

Move to pandabize dir

```
cd pandabize
```

Run Bundle install

```
bundle install
```

Run Yarn install
```
yarn install
```

Create the Database

```
rails db:create
```

Run Migrations

```
rails db:migrate
```

## Optional Step

Run seeds so you can get already an user and some bikes

```
rails db:seed
```

Now you have this user available to use

```
email: admin@gmail.com
pasword: admins
```

## Run Project

Run rails server

```
rails server
```

Go to `http://localhost:3009/`
