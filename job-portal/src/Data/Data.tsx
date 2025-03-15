import { faFileCircleCheck,faBriefcase,faUserCheck } from "@fortawesome/free-solid-svg-icons";

const companyName=["Adobe","Amazon","Apple","Atlassian","Cisco","Cognizant","Dell","Google"];
export default companyName;

export const work=[
    {
        "symbol":faFileCircleCheck,
        "name":"Build Your Resume",
        "desc":"Create a standout resume with your skills."
    },
    {
        "symbol":faBriefcase,
        "name":"Apply for Job",
        "desc":"Find and apply for jobs that match your skills."
    },
    {
        "symbol":faUserCheck,
        "name":"Get Hired",
        "desc":"Connect with employers an start your new job."
    }
];

export const testimonials=[
    {
        "name":"Micael Jackel",
        "testimonial":"This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating":5
    },
    {
        "name":"Amba Jhumba",
        "testimonial":"Found my dream job within a week! The application process was smooth.",
        "rating":5
    },
    {
        "name":"Ben Tennyson",
        "testimonial":"I secured a job offer within days of applying. Exceptional user experience and support.",
        "rating":4
    },
    {
        "name":"Aman Rathod",
        "testimonial":"Highly efficient job portal with excellent resources. Helped me land a great position.",
        "rating":3.5
    }


];
export const footerLinks=[

    {title:"Product", links: ["Find Job","Find Company","Find Employee"]},
    {title:"Company", links: ["About Us","Contact Us","Privacy Policy","Terms & Conditions"]},
    {title:"Support", links: ["Help & Support","Feedback","FAQs"]}
]

