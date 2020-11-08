json.extract! user, :id, :username, :email, :password, :confirmation_password, :role, :credit_card, :created_at, :updated_at
json.url user_url(user, format: :json)
