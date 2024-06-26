import React, { useState } from 'react';
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const App: React.FC = () => {
    const [events, setEvents] = useState([]);

        const notifications = [
            {
                title: "Évènement ajouté",
                description: "Sébastien BORTENLANGER a créé l'évènement “Soutenances projet” le mercredi 12 juin.",
                date: "12 juin"
            },
            {
                title: "Évènement ajouté",
                description: "Édith CHAN a créé l'évènement “Réunion profs” le jeudi 13 juin.",
                date: "13 juin"
            },
            {
                title: "Évènement ajouté",
                description: "Ibler VILLEGAS a créé l'évènement “Soutenances projet” le vendredi 7 juin.",
                date: "7 juin"
            }
        ];


    return (
        <>
            <div className="sidebar">
                <div className="header">
                    <h2>Hey, Zakia!</h2>
                </div>
                <div className="menuItem">
                    <img src="/icons/profil.png" alt="profile" className="menuIcon" />
                    <span className="menuText">Mon profil</span>
                </div>
                <div className="menuItem">
                    <img src="/icons/calender.png" alt="calendar" className="menuIcon" />
                    <span className="menuText">Calendrier</span>
                </div>
                <div className="menuItem">
                    <img src="/icons/cloche.png" alt="notifications" className="menuIcon" />
                    <span className="menuText">Notifications</span>
                </div>
                <div className="menuItem">
                    <img src="/icons/alert.png" alt="alerts" className="menuIcon" />
                    <span className="menuText">Alertes</span>
                </div>
                <div className="menuItem">
                    <img src="/icons/task.png" alt="tasks" className="menuIcon" />
                    <span className="menuText">Tâches</span>
                </div>
                <div className="menuItem">
                    <img src="/icons/settings.png" alt="settings" className="menuIcon" />
                    <span className="menuText">Paramètres</span>
                </div>
            </div>
            <div className="notifications-page">
                <h2 className="notations_title">Notifications</h2>
                {notifications.map((notification, index) => (
                    <div className="notification-item" key={index}>
                        <div className="notification-dot"></div>
                        <div className="notification-content">
                            <h3>{notification.title}</h3>
                            <p>{notification.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default App;