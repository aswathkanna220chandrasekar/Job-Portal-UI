let jobs = [
    {
        title: "Python Developer",
        company: "Tech Solutions",
        location: "Chennai",
        type: "Full-time",
        salary: "₹3 - 5 LPA",
        description: "Develop applications using Python."
    },
    {
        title: "Frontend Developer",
        company: "Web Creators",
        location: "Coimbatore",
        type: "Full-time",
        salary: "₹3 - 4 LPA",
        description: "Build responsive websites using HTML, CSS and JavaScript."
    },
    {
        title: "Web Development Intern",
        company: "Digital World",
        location: "Madurai",
        type: "Internship",
        salary: "₹8,000/month",
        description: "Learn web development and work on projects."
    },
    {
        title: "JavaScript Developer",
        company: "Code Masters",
        location: "Remote",
        type: "Part-time",
        salary: "₹15,000/month",
        description: "Create interactive web applications."
    },
    {
        title: "Full Stack Developer",
        company: "Smart Tech",
        location: "Chennai",
        type: "Full-time",
        salary: "₹4 - 6 LPA",
        description: "Develop frontend and backend applications."
    },
    {
        title: "Python Intern",
        company: "Innovate Labs",
        location: "Coimbatore",
        type: "Internship",
        salary: "₹10,000/month",
        description: "Practice Python programming and database skills."
    }
];


function displayJobs(jobData) {
    let jobList = document.getElementById("jobList");

    jobList.innerHTML = "";

    document.getElementById("jobCount").textContent =
        jobData.length + " jobs found";

    if (jobData.length === 0) {
        jobList.innerHTML = "<p>No jobs found. Try another search.</p>";
        return;
    }

    jobData.forEach(function(job, index) {
        jobList.innerHTML +=`
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <span class="job-type">${job.type}</span>
                <p>${job.description}</p>

                <button onclick="viewDetails(${index})">
                    View Details
                </button>

                <button onclick="applyJob('${job.title.replace(/'/g, "\\'")}') ">
                    Apply Now
                </button >
            </div >
    `;
    });
}

function searchJobs() {
    let search = document.getElementById("searchInput").value.toLowerCase();

    let location = document.getElementById("locationFilter").value;
    let type = document.getElementById("typeFilter").value;

    let filteredJobs = jobs.filter(function(job) {
        return (
            (job.title.toLowerCase().includes(search) ||
             job.company.toLowerCase().includes(search)) &&
            (location === "" || job.location === location) &&
            (type === "" || job.type === type)
        );
    });

    displayJobs(filteredJobs);
}


function viewDetails(index) {
    let job = jobs[index];

    alert(
        "Job Title: " + job.title +
        "\nCompany: " + job.company +
        "\nLocation: " + job.location +
        "\nJob Type: " + job.type +
        "\nSalary: " + job.salary +
        "\nDescription: " + job.description
    );
}

function applyJob(title) {
    alert("You selected to apply for: " + title);
}


displayJobs(jobs);

document.getElementById("searchInput").addEventListener("input", searchJobs);

document.getElementById("locationFilter").addEventListener("change", searchJobs);
document.getElementById("typeFilter").addEventListener("change", searchJobs);
