Rails.application.routes.draw do
  root 'greetings#random_greeting'

  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end
end
