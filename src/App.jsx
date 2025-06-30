import { useState, useEffect } from 'react';
import PostList from './features/posts/PostList';
import Login from './features/auth/Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('moderatorUser');
    if (savedUser) setUser(savedUser);
  }, []);

  return user ? <PostList /> : <Login onLogin={setUser} />;
}

export default App;
