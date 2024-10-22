// JavaScript to handle modal functionality
const modal = document.getElementById("chatbotModal");
const openChatbotBtn = document.getElementById("openChatbotBtn");
const closeChatbotBtn = document.getElementById("closeChatbotBtn");

// Open the modal
openChatbotBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
closeChatbotBtn.onclick = function() {
    modal.style.display = "none";
    
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
