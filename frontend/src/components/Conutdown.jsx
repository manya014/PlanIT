import React, { useState, useEffect, useCallback, useMemo } from 'react';
const Countdown = ({ dueDate }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        if (!dueDate) {
            setTimeLeft('No Due Date');
            return;
        }

        const interval = setInterval(() => {
            const now = new Date();
            const due = new Date(dueDate);
            const difference = due.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                setTimeLeft('Overdue');
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [dueDate]);

    return (
        <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
            timeLeft.includes('Overdue') ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
        }`}>
            {timeLeft}
        </span>
    );
};
export default Countdown;