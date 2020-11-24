Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :products
      resources :bicycles

      get 'bicycles_query', to: 'bicycles#build_query'
    end
  end

  get '*path', to: 'pages#index', via: :all
end
