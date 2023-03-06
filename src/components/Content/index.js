import React from 'react'
import ComponentFooter from '../ComponentFooter'
import List from './List'

function Content() {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

               <List></List>
            </section>
            <ComponentFooter></ComponentFooter>
        </>

    )
}

export default Content