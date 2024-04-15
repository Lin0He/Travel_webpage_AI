import React from 'react'
import './test.css'

const Test = () => {
  return (
    <div class="kanban-board">
    <h1>Bento Kanbanboard Design</h1>
    <div class="top-row">
        <div class="block large blue"></div>
        <div class="block large lavender"></div>
    </div>
    <div class="middle-row">
        <div class="block small yellow"></div>
        <div class="block small pink"></div>
    </div>
    <div class="bottom-row">
        <div class="block xlarge green"></div>
    </div>
</div>

  )
}

export default Test