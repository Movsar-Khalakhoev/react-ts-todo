import React from 'react'
import {useHistory} from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory()
  const returnHandler = () => {
    history.push('/')
  }

  return (
    <>
      <h1>Станица информации</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ad amet dicta expedita libero nemo perspiciatis quis reiciendis
        repellat repellendus saepe sunt, totam vel veniam.
        Accusamus commodi ducimus iure quisquam recusandae
        sapiente tenetur vel voluptatem? Ab alias doloribus
        quasi quidem repellendus!
      </p>
      <button className='btn' onClick={returnHandler}>Вернуться к списку задач</button>
    </>
  )
}

export default AboutPage
