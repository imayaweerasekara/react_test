interface StudentDetailsProps {
    name: string
    age?: number
    image?: string
}
const StudentDetails  = ({name,age=18,image}:StudentDetailsProps) => {

    return (
        <div className="bg-gray-200 p-4">
            <h5 className='text-lg font-medium mb-1'> Name:{name}</h5>
            <h5 className='text-lg font-medium'>Age: {age}</h5>
            {image && <img
                src={image} alt='studentDetails'
                className='w-40 rounded-4xl'

            />}

        </div>)
}

export default StudentDetails