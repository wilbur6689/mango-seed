import React, { useState } from 'react';
import '../stylesheets/App.css';
import Calendar from 'react-calendar';
import '../stylesheets/calendar.css';

function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  
  function handleAddEvent(event) {
    setEvents(prevEvents => [...prevEvents, event]);
  }

  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <div className="calendar-container">
        {/* your calendar component goes here */}
        <Calendar onChange={setDate} value={date} />
      </div>
      <h2>Add an Event</h2>
      <form onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          handleAddEvent({
            date: formData.get('date'),
            title: formData.get('title'),
            description: formData.get('description'),
          });
          event.target.reset();
        }}
      >
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" required />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea name="description"></textarea>
        </div>
        <button type="submit">Add Event</button>
      </form>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarPage;
