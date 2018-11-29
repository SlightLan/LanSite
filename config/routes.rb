Rails.application.routes.draw do
  root 'homepage#show'
  resources :query_infos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
