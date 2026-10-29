const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Course = ({ course }) => {
  console.log({course})
  const sum = course.parts.reduce((accumulator, part) => {
    console.log(accumulator)
    return accumulator + part.exercises
  },0)
  console.log({sum})
  return (
    
    <div>
      <h1> {course.name} </h1>
      
      {course.parts.map(part => (

        <Part
          key={part.id}
          part={part.name}
          exercises={part.exercises}
        />
      ))}
      <b>
        total of {sum} exercises
      </b>
    </div>
    )
} 

export default Course