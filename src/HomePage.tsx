import StudentDetails from "./StudentDetails.tsx";

const HomePage=()=>{
    const students=[
        {
            name:"Jhon Doe",
            age:25,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslgCuD5qWrnfLWGVjh0yuPIQxU6G3g8HV8Q&s'
        },
        {
            name:"Jhon Doe",
            age:25,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslgCuD5qWrnfLWGVjh0yuPIQxU6G3g8HV8Q&s'
        },
        {

            name:"JANE Doe",
            age:25
        }
    ]

    return (<> <h1 className='text-2xl font-semibold'>HomePage</h1>
        {students.map((student,index)=>(
            <StudentDetails key={index} name={student.name} age={student.age} image={student.image}/>
        ))}


</>)
}
export default HomePage