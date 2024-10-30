import {PieChart, Pie } from 'recharts';
const PChart = () => {
    const marks = [
        { "id": 1, "name": "Student 1", "math": 78, "physics": 82, "chemistry": 75 },
        { "id": 2, "name": "Student 2", "math": 85, "physics": 88, "chemistry": 80 },
        { "id": 3, "name": "Student 3", "math": 92, "physics": 90, "chemistry": 85 },
        { "id": 4, "name": "Student 4", "math": 67, "physics": 70, "chemistry": 65 },
        { "id": 5, "name": "Student 5", "math": 88, "physics": 84, "chemistry": 90 },
        { "id": 6, "name": "Student 6", "math": 74, "physics": 76, "chemistry": 72 },
        { "id": 7, "name": "Student 7", "math": 90, "physics": 89, "chemistry": 91 },
        { "id": 8, "name": "Student 8", "math": 81, "physics": 78, "chemistry": 79 },
        { "id": 9, "name": "Student 9", "math": 76, "physics": 73, "chemistry": 74 },
        { "id": 10, "name": "Student 10", "math": 95, "physics": 94, "chemistry": 97 }
    ];

    return (
        <div>
            <PieChart width={730} height={250}>
            <Pie data={marks} dataKey='math' nameKey='name' cx='50%' outerRadius={60} fill='#8884d8' />
            <Pie data={marks} dataKey='physics'nameKey="id" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>
    );
};

export default PChart;