import React from 'react'
import {FaReact} from 'react-icons/fa'

export const Header = () => {

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/zelda.jpg" alt="Todoist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add" data-testid="quick-add-task-action">+</li>
                        <li className="settings__darkmode" data-testid="dark-mode-action"><FaReact/></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};