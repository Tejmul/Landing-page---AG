import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/countdownUtils';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  const [previousTime, setPreviousTime] = useState<TimeLeft>(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousTime(timeLeft);
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  const digitVariants = {
    initial: { opacity: 0, rotateX: -90 },
    animate: { opacity: 1, rotateX: 0 },
    exit: { opacity: 0, rotateX: 90 }
  };

  const renderTimeBlock = (value: number, label: string, changed: boolean) => {
    const paddedValue = value.toString().padStart(2, '0');

    return (
      <div className="flex flex-col items-center bg-dark-300 bg-opacity-60 backdrop-blur-sm 
                      px-4 py-3 rounded-xl shadow-lg">
        <motion.div 
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          animate={changed ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {paddedValue.split('').map((digit, i) => (
            <motion.span
              key={`${label}-${i}`}
              className="inline-block min-w-[1ch] text-center"
              variants={digitVariants}
              initial={changed ? "initial" : "animate"}
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {digit}
            </motion.span>
          ))}
        </motion.div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">{label}</span>
      </div>
    );
  };

  // Check if values have changed to trigger animation
  const daysChanged = previousTime.days !== timeLeft.days;
  const hoursChanged = previousTime.hours !== timeLeft.hours;
  const minutesChanged = previousTime.minutes !== timeLeft.minutes;
  const secondsChanged = previousTime.seconds !== timeLeft.seconds;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {renderTimeBlock(timeLeft.days, "DAYS", daysChanged)}
      {renderTimeBlock(timeLeft.hours, "HOURS", hoursChanged)}
      {renderTimeBlock(timeLeft.minutes, "MINUTES", minutesChanged)}
      {renderTimeBlock(timeLeft.seconds, "SECONDS", secondsChanged)}
    </div>
  );
};

export default CountdownTimer;