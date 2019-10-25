import React, {useState} from 'react'
import {FaReact} from 'react-icons/fa'
import { AddTask } from '../AddTask';

export const Header = ({darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src={!darkMode ? "/images/logo.png" : "/images/zelda.jpg"} alt="Todoist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li 
                            className="settings__add" 
                            data-testid="quick-add-task-action"
                        >
                            <button 
                                type="button"
                                onClick={() => {
                                    setShowQuickAddTask(true); 
                                    setShouldShowMain(true);
                                }}
                            >
                                +
                            </button>
                        </li>
                        <li 
                            className="settings__darkmode" 
                            data-testid="dark-mode-action"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <FaReact/>
                        </li>
                    </ul>
                </div>
            </nav>

            <AddTask 
                showAddTaskMain={false} 
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    );
};