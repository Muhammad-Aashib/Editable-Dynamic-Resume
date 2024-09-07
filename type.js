var form = document.getElementById('Dynamic Resume');
var resumeOutput = document.getElementById('resume output');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Retrieve form values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var education = document.getElementById('education').value.trim();
    var workExperience = document.getElementById('work-experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Basic validation
    if (!name || !email || !education || !workExperience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // Email validation (basic check)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Split skills by comma and trim whitespace
    var skillsArray = skills.split(',').map(function (skill) { return skill.trim(); });
    // Generate resume content
    var resumeHTML = "\n        <h1>".concat(name, "</h1>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Work Experience</h2>\n        <p>").concat(workExperience, "</p>\n        <h2>Skills</h2>\n        <ul>\n            ").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n    ");
    // Display the generated resume
    resumeOutput.innerHTML = resumeHTML;
});
