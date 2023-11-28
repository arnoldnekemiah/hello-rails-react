greetings = [
    "Hello!",
    "Hi Chesser!",
    "Greetings micronauts!",
    "Hello Microverse!",
    "Welcome to the world of programming!"
  ]
  
  greetings.each do |greeting|
    Message.create(content: greeting)
  end