import { MdHeight } from 'react-icons/md';
import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarksData = [
        { "id": 1, "student": "Student 1", "math": 78, "physics": 82, "chemistry": 75 },
        { "id": 2, "student": "Student 2", "math": 85, "physics": 88, "chemistry": 80 },
        { "id": 3, "student": "Student 3", "math": 92, "physics": 90, "chemistry": 85 },
        { "id": 4, "student": "Student 4", "math": 67, "physics": 70, "chemistry": 65 },
        { "id": 5, "student": "Student 5", "math": 88, "physics": 84, "chemistry": 90 },
        { "id": 6, "student": "Student 6", "math": 74, "physics": 76, "chemistry": 72 },
        { "id": 7, "student": "Student 7", "math": 90, "physics": 89, "chemistry": 91 },
        { "id": 8, "student": "Student 8", "math": 81, "physics": 78, "chemistry": 79 },
        { "id": 9, "student": "Student 9", "math": 76, "physics": 73, "chemistry": 74 },
        { "id": 10, "student": "Student 10", "math": 95, "physics": 94, "chemistry": 97 }
    ]

    return (
        <div>
            <Lchart width={500} height={400} data={subjectMarksData}>
                <XAxis dataKey='student' />
                <Line dataKey='math'></Line>
                <Line dataKey='physics' stroke='red'></Line>
                <Line dataKey='chemistry' stroke='green'></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;
