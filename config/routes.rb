Rails.application.routes.draw do
  resources :posts do
    collection do
      get '/all' => 'posts#show_all'
    end
  end
  root 'pages#home'
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
