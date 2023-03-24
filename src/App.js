import React from "react";
import "./style.css";
import Slider from "./Components/horizontalSlider.js"

export default function App() {

  let array=[{
    image :"https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name:"Neelu Mishra",
    designation:"Frontend Engineer",
    company :"Google",
    experience:"4 year"
  },
    {
      image:"https://media.istockphoto.com/id/1432721352/photo/portrait-of-a-happy-latino-young-man-standing-holding-laptop-isolated-on-blue-background-copy.jpg?b=1&s=170667a&w=0&k=20&c=cuwndzVkJJD98D6jWSOOAIN4maO9_q7Bnny5ERUIRro=",
      name:"Aditi Jain" ,
      designation:"Backend Engineer",
      company :"Facebook",
      experience:"8 year"
    }
  ,
    {
      image:"https://media.istockphoto.com/id/1462632420/photo/smiling-student-with-backpack-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=t0pgwxPO3zey5Q9iTR58HBjFPF8TGE48KhTq2gdEC3I=",
      name:"Shubham Sharma",
      designation:"Product Engineer",
      company :"Google",
      experience:"4 year"
    },
  
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIpQSrodbioV87FctQef-Qa6ptnz37E89EA&usqp=CAU",
      name:"Parvat Singh",
      designation: "Quality Engineer",
      company :"Google",
      experience:"4 year"
    },
    {
      image:"https://media.istockphoto.com/id/1462632420/photo/smiling-student-with-backpack-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=t0pgwxPO3zey5Q9iTR58HBjFPF8TGE48KhTq2gdEC3I=",
      name:"Shubham Sharma",
      designation:"Product Engineer",
      company :"Google",
      experience:"4 year"
    },
  

    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIpQSrodbioV87FctQef-Qa6ptnz37E89EA&usqp=CAU",
      name:"Parvat Singh",
      designation: "Quality Engineer",
      company :"Google",
      experience:"4 year"
    },{
      image:"https://media.istockphoto.com/id/1462632420/photo/smiling-student-with-backpack-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=t0pgwxPO3zey5Q9iTR58HBjFPF8TGE48KhTq2gdEC3I=",
      name:"Shubham Sharma",
      designation:"Product Engineer",
      company :"Google",
      experience:"4 year"
    },{
    image :"https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name:"Neelu Mishra",
    designation:"Frontend Engineer",
    company :"Google",
    experience:"4 year"
  }
  
  ]

  return (
    <div>
      <h1 className="headingstyle">Know Your mentors</h1>
      <p  className="headingstyle">Work with a mentor who closely looks at your progress<br/>
      gives You personalized feedback and help you fill the gap<br/>
      in your knowledge</p>
      <div className="Parentstyle">
     {array.map((ele)=>
       <Slider image={ele.image} name={ele.name} designation={ele.designation}
       company ={ele.company} experience={ele.experience}
      />)
     } 
     </div>
    </div>
  );
}
