import { useEffect } from 'react';

function JavaScriptMockTest() {
  useEffect(() => {
    window.location.href = 'https://www.w3schools.com/quiztest/quiztest.asp?qtest=JavaScript';
  }, []);

  return null;
}

export default JavaScriptMockTest;
