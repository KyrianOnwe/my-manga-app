Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :reviews, only: [:create, :index, :show, :patch]
  resources :mangas, only: [:index, :create, :show, :patch, :destroy]
  post "/login", to: "sessions#create"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  delete '/logout', to: "sessions#destroy"
  get '/auth', to: "users#show"



  # Defines the root path route ("/")
  root "mangas#index"
end
