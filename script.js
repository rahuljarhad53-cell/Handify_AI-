// ===================================
// HANDIFY AI - ASSIGNMENT GENERATOR
// ===================================

const $ = (id) => document.getElementById(id);

// Sample assignment content
const sampleContent = `Artificial Intelligence (AI) is a branch of computer science that aims to create machines capable of performing tasks that usually require human intelligence.

AI systems can learn from data, recognize patterns, solve problems, and understand language. Common examples include virtual assistants, recommendation systems, image recognition, and translation tools.

AI is used in education to support learning, in healthcare to help analyze information, and in transport to improve navigation.

In conclusion, Artificial Intelligence is an important technology with many practical applications. It should be developed and used responsibly.`;

// Update the assignment word count
function updateWordCount() {
    const text = $("content").value.trim();

    const count = text
        ? text.split(/\s+/).length
        : 0;

    $("wordCount").textContent =
        `${count} word${count === 1 ? "" : "s"}`;
}

// Update assignment preview
function updatePreview() {
    const title =
        $("assignmentTitle").value.trim() ||
        "Untitled Assignment";

    const subject =
        $("subject").value.trim() ||
        "ASSIGNMENT";

    const student =
        $("studentName").value.trim();

    const content =
        $("content").value;

    const paper = $("paperPreview");
    const previewContent = $("previewContent");

    // Display assignment details
    $("previewTitle").textContent = title;

    $("previewSubject").textContent =
        subject.toUpperCase();

    $("previewStudent").textContent =
        student ? `Name: ${student}` : "";

    // textContent safely displays user-entered text
    previewContent.textContent =
        content || "Your assignment will appear here.";

    // Handwriting font options
    const fonts = {
        caveat: "'Caveat', cursive",
        patrick: "'Patrick Hand', cursive",
        kalam: "'Kalam', cursive"
    };

    const selectedFont =
        fonts[$("handwriting").value] || fonts.caveat;

    // Apply the selected handwriting style
    $("previewTitle").style.fontFamily = selectedFont;

    $("previewStudent").style.fontFamily = selectedFont;

    previewContent.style.fontFamily = selectedFont;

    // Apply font size
    previewContent.style.fontSize =
        `${$("fontSize").value}px`;

    // Apply line spacing
    previewContent.style.lineHeight =
        $("lineSpacing").value;

    // Apply paper style
    paper.classList.remove(
        "ruled",
        "plain",
        "grid"
    );

    paper.classList.add(
        $("paperStyle").value
    );

    // Update word count
    updateWordCount();
}

// Update button
$("updateBtn").addEventListener(
    "click",
    updatePreview
);

// Update preview whenever the user changes content
[
    "assignmentTitle",
    "subject",
    "studentName",
    "content",
    "handwriting",
    "fontSize",
    "lineSpacing",
    "paperStyle"
].forEach((id) => {
    $(id).addEventListener(
        "input",
        updatePreview
    );

    $(id).addEventListener(
        "change",
        updatePreview
    );
});

// Insert sample assignment
$("sampleBtn").addEventListener(
    "click",
    function () {
        $("content").value = sampleContent;

        updatePreview();
    }
);

// Print or save assignment as PDF
$("printBtn").addEventListener(
    "click",
    function () {
        updatePreview();

        window.print();
    }
);

// Scroll to the assignment preview
$("fullscreenBtn").addEventListener(
    "click",
    function () {
        $("paperPreview").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
);

// Initialize the website
updatePreview();