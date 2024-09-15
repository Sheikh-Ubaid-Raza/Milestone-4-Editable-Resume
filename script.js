var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skills').value;
    var resumeHtml = "\n    <h2><b> Editable Resume </b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name : </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email : </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone : </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Address : </b><span contenteditable=\"true\">").concat(address, "</span></p>\n    <br>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <br>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <br>\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skill, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing!');
    }
});
