import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  var sum = 0;
  var i;
  for(i in props.parts){
    sum = sum + props.parts[i].exercises;
  }
  return (
    <p>Total number of exercises = {sum}</p>
  )
}

const App = () => {
  const course = {
    name :'Half Stack application development', 
    parts : [
              {name : 'Fundamentals of React', exercises : 10},
              {name : 'Using props to pass data', exercises : 7},
              {name : 'State of a component', exercises : 14}
          ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts}  />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App