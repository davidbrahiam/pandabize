if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_pandabize', domain: 'localhost:3005'
else
  Rails.application.config.session_store :cookie_store, key: '_pandabize' 
end