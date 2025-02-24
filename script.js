// Fetching necessary elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var gradYearInput = document.getElementById('grad-year');
var workExperienceInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
// Resume output fields
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeDegree = document.getElementById('resume-degree');
var resumeSchool = document.getElementById('resume-school');
var resumeGradYear = document.getElementById('resume-grad-year');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Buttons
var generateResumeButton = document.getElementById('generate-resume');
var shareResumeButton = document.getElementById('share-resume');
var downloadPdfButton = document.getElementById('download-pdf');
// Generate Resume functionality
generateResumeButton.addEventListener('click', function () {
    // Fill resume with input data
    resumeName.textContent = nameInput.value || 'Not provided';
    resumeEmail.textContent = emailInput.value || 'Not provided';
    resumeDegree.textContent = degreeInput.value || 'Not provided';
    resumeSchool.textContent = schoolInput.value || 'Not provided';
    resumeGradYear.textContent = gradYearInput.value || 'Not provided';
    resumeWorkExperience.textContent = workExperienceInput.value || 'Not provided';
    resumeSkills.textContent = skillsInput.value || 'Not provided';
    // Show the resume
    document.getElementById('resume').style.display = 'block';
});
// Generate unique URL
shareResumeButton.addEventListener('click', function () {
    var baseUrl = window.location.href;
    var resumeId = btoa("".concat(nameInput.value, "-").concat(emailInput.value));
    var shareableUrl = "".concat(baseUrl, "?resumeId=").concat(resumeId);
    alert("Your unique resume URL: ".concat(shareableUrl));
    navigator.clipboard.writeText(shareableUrl); // Copy the URL to clipboard
});
// Download Resume as PDF
downloadPdfButton.addEventListener('click', function () {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    // Fill PDF content
    doc.text("Name: ".concat(resumeName.textContent), 10, 10);
    doc.text("Email: ".concat(resumeEmail.textContent), 10, 20);
    doc.text("Degree: ".concat(resumeDegree.textContent), 10, 30);
    doc.text("School: ".concat(resumeSchool.textContent), 10, 40);
    doc.text("Graduation Year: ".concat(resumeGradYear.textContent), 10, 50);
    doc.text("Work Experience: ".concat(resumeWorkExperience.textContent), 10, 60);
    doc.text("Skills: ".concat(resumeSkills.textContent), 10, 70);
    // Save as PDF
    doc.save('resume.pdf');
});
// Load resume from URL if present
// window.onload =

