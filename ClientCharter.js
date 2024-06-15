function toggleSection(id) {
    // choose element by id
    var content = document.getElementById(id);
    // check the current display if there is block hide it
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        // if not show
        content.style.display = "block";
    }
}
