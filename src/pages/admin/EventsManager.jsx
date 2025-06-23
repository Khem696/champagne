import { useState } from 'react';
import '../../styles/admin.css';

export const EventsManager = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = () => {
    // TODO: Implement event creation logic
    console.log('Add event clicked');
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    // TODO: Implement event editing logic
    console.log('Edit event:', event);
  };

  const handleDeleteEvent = (eventId) => {
    // TODO: Implement event deletion logic
    console.log('Delete event:', eventId);
  };

  return (
    <div className="events-manager">
      <div className="page-header">
        <h1>Events Manager</h1>
        <button onClick={handleAddEvent} className="add-button">
          Add New Event
        </button>
      </div>

      <div className="events-list">
        {events.length === 0 ? (
          <p>No events found. Create your first event!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.status}</td>
                  <td>
                    <button onClick={() => handleEditEvent(event)}>Edit</button>
                    <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedEvent && (
        <div className="event-editor">
          {/* Event editing form will go here */}
        </div>
      )}
    </div>
  );
};

export default EventsManager; 