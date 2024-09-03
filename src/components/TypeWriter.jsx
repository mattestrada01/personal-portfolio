import React, { useEffect, useState } from 'react';

const Typewriter = ({ phrases, speed = 50, deleteSpeed = 50, delay = 2000, deleteDelay = 1500 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (isPaused) {
      // If paused, delay before typing or deleting starts again
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (isDeleting) {
          setIsDeleting(false);
        } else {
          setIsDeleting(true);
        }
      }, isDeleting ? deleteDelay : delay);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
      }, deleteSpeed);

      if (text === '') {
        setIsPaused(true);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    } else {
      // Typing 
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
      }, speed);

      if (text === currentPhrase) {
        // Finished typing 
        setIsPaused(true);
      }
    }

    // Blinking cursor
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearInterval(blinkTimeout);
    };
  }, [text, isDeleting, phraseIndex, phrases, speed, deleteSpeed, isPaused, delay, deleteDelay]);

  return (
    <span style={{ color: '#00FFFF' }}>
      {text}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};

export default Typewriter;
