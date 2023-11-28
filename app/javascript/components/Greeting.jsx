import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch('/greetings/random')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={() => history.push('/')}>...loading greeting</button>
    </div>
  );
};

export default Greeting;
