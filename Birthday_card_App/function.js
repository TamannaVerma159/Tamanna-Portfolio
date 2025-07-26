// function generateCard() {
//     const recipientName = document.getElementById("recipientName").value;
//     const message = document.getElementById("message").value;
//     const borderColor = document.getElementById("borderColor").value;
//     const borderStyle = document.getElementById("borderStyle").value;
//     const fontStyle = document.getElementById("fontStyle").value;

//     const cardHTML = `
//         <div class="card" style="border: 5px ${borderStyle} ${borderColor};">
//             <h2 style="font-family: ${fontStyle};">Happy Birthday, ${recipientName}!</h2>
//             <p style="font-family: ${fontStyle};">${message}</p>
//         </div>
//     `;

//     document.getElementById("cardPreview").innerHTML = cardHTML;
// }
function generateCard() {
    const recipientName = document.getElementById("recipientName").value;
    const message = document.getElementById("message").value;
    const borderColor = document.getElementById("borderColor").value;
    const borderStyle = document.getElementById("borderStyle").value;
    const fontStyle = document.getElementById("fontStyle").value;

    const imageUpload = document.getElementById("imageUpload");
    const selectedImage = imageUpload.files[0];

    if (!selectedImage) {
        alert("Please select an image for the card background.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const backgroundImage = event.target.result;

        const cardHTML = `
            <div class="card" style="border: 5px ${borderStyle} ${borderColor}; background-image: url(${backgroundImage});">
                <h2 style="font-family: ${fontStyle};">Happy Birthday, ${recipientName}!</h2>
                <p style="font-family: ${fontStyle};">${message}</p>
            </div>
        `;

        document.getElementById("cardPreview").innerHTML = cardHTML;
    };

    reader.readAsDataURL(selectedImage);
}
