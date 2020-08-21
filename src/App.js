import React from 'react';
import Accordion from './components/accordion'
const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is most used JS Library'
  },
  {
    title: 'How you use React?',
    content: 'React is used by creating components'
  }

]
export default () => {

  return (<div><Accordion items={items} /></div>)
}
