import { useState } from "react";

const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const totalDays = getDaysInMonth(currentYear, currentMonth);
    const startDay = getFirstDayOfMonth(currentYear, currentMonth);

    const days = [];
    for (let i = 0; i < startDay; i++) days.push(<div key={`empty-${i}`} className="p-1"></div>);
    for (let i = 1; i <= totalDays; i++) {
        const isToday = today.getDate() === i && today.getMonth() === currentMonth && today.getFullYear() === currentYear;
        const className = `p-1 rounded-lg text-center text-sm font-medium ${isToday ? 'bg-purple-500 text-white' : ''}`;
        days.push(<div key={i} className={className}>{i}</div>);
    }

    const prevMonth = () => {
        setCurrentMonth(prev => prev === 0 ? 11 : prev - 1);
        if (currentMonth === 0) setCurrentYear(prev => prev - 1);
    };

    const nextMonth = () => {
        setCurrentMonth(prev => prev === 11 ? 0 : prev + 1);
        if (currentMonth === 11) setCurrentYear(prev => prev + 1);
    };

    return (
        <div className="bg-white p-3 rounded-2xl shadow-md w-64">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <button onClick={prevMonth} className="text-gray-600 hover:text-gray-800 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                <h2 className="text-sm font-bold text-gray-800">{monthNames[currentMonth]} {currentYear}</h2>
                <button onClick={nextMonth} className="text-gray-600 hover:text-gray-800 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-1">
                {weekDays.map(day => <div key={day} className="font-semibold">{day}</div>)}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1">
                {days}
            </div>
        </div>
    );
};

export default Calendar;
