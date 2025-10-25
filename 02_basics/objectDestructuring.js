const course ={
    coursename : "js in hindi",
    price :"999",
    courseInstructor: "Keerthan"
}
// just another way to print course instructor
const {courseInstructor:instructor} = course
console.log(instructor);

//  {                           json
//     "name":"Keerthan",
//     "coursename": "js in hindi",
//     "price" : "free"
// }