import React, { useState } from 'react';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const App: React.FC = () => {

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
            <div className="profile-page">
                <h1>Mon profil</h1>
                <div className="profile-content">
                    <div className="profile-details">
                        <div className="profile-row">
                            <strong>Nom :</strong>
                            <span>Zakia KAZI</span>
                        </div>
                        <div className="profile-row">
                            <strong>Email :</strong>
                            <span>zakia.kazi@gmail.com</span>
                        </div>
                        <div className="profile-row">
                            <strong>Mot de passe :</strong>
                            <span>********</span>
                        </div>
                        <div className="profile-row">
                            <strong>N° de téléphone :</strong>
                            <span>06 12 34 56 78</span>
                        </div>
                        <div className="profile-row">
                            <strong>Statut :</strong>
                            <span>Professeur(e)</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;