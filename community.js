const parentElement = document.querySelector(".heroine");
function createPost() {
  // Create the post section element with the class "post"
  const postSection = document.createElement("section");
  postSection.className = "post";

  // Create the info div element with the class "info p-1"
  const infoDiv = document.createElement("div");
  infoDiv.className = "info p-1";

  // Create the profile image element
  const profileImage = document.createElement("img");
  profileImage.src = "Assets/man.png";
  profileImage.alt = "";
  infoDiv.appendChild(profileImage);

  // Create the username paragraph element
  const usernameParagraph = document.createElement("p");
  usernameParagraph.textContent = "Aditya Joshi";
  infoDiv.appendChild(usernameParagraph);

  // Append the info div to the post section
  postSection.appendChild(infoDiv);

  // Create the description div element with the class "description p-2"
  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "description p-2";

  // Create the description paragraph element
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.innerHTML = `${thread}<br /><span class="hashtags">#PanelDiscussion #InterSchoolDebate #LearningTogether</span>`;
  descriptionDiv.appendChild(descriptionParagraph);

  // Append the description div to the post section
  postSection.appendChild(descriptionDiv);

  // Create the image div element with the class "image"
  const imageDiv = document.createElement("div");
  imageDiv.className = "image";

  // Create the post image element
  const postImage = document.createElement("img");
  postImage.src = newPostSrc;
  postImage.alt = "";
  imageDiv.appendChild(postImage);

  // Append the image div to the post section
  postSection.appendChild(imageDiv);

  // Create the controls div element with the class "controls"
  const controlsDiv = document.createElement("div");
  controlsDiv.className = "controls";

  // Create the unfavourite image element
  const unfavouriteImage = document.createElement("img");
  unfavouriteImage.src = "Assets/unfavourite.png";
  unfavouriteImage.alt = "";
  controlsDiv.appendChild(unfavouriteImage);

  // Create the chat image element
  const chatImage = document.createElement("img");
  chatImage.src = "Assets/chat.png";
  chatImage.alt = "";
  controlsDiv.appendChild(chatImage);

  // Create the share image element
  const shareImage = document.createElement("img");
  shareImage.src = "Assets/share.png";
  shareImage.alt = "";
  controlsDiv.appendChild(shareImage);

  // Append the controls div to the post section
  postSection.appendChild(controlsDiv);

  // Select the parent element where you want to append the post section
  // Append the post section to the parent element
  parentElement.prepend(postSection);
}
let thread;
const postDesc = document.getElementById("post-desc");
postDesc.addEventListener("change", function () {
  thread = postDesc.value;
});
const postBtn = document.getElementById("post");
postBtn.addEventListener("click", function () {
  createPost();
});

const inpFile = document.getElementById("inpFile");
const previewImage = document.getElementById("previewImage");
const imageSection = document.getElementById("imageSection");
let newPostSrc;
inpFile.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    newPostSrc = event.target.result;
    console.log(newPostSrc);
    // previewImage.src = event.target.result;
    // previewImage.style.display = "block";

    // Set the background image of the section
    // imageSection.style.backgroundImage = `url('${event.target.result}')`;
  };

  reader.readAsDataURL(file);
});
