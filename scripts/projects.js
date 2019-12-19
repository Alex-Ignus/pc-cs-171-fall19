function viewProject(evt, projName) {
    var i, projects;
    projects = document.getElementsByClassName("project-details");
    for (i = 0; i < projects.length; i++) {
        projects[i].style.display = "none";
    }
    document.getElementById(projName).style.display = "block";
}
