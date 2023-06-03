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
  usernameParagraph.textContent = "Keshav Aneja";
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
  unfavouriteImage.className = "like";
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
  closePlayer();
});

const man = document.getElementById("man");
const inpFile = document.getElementById("inpFile");
const previewImage = document.getElementById("previewImage");
const imageSection = document.getElementById("imageSection");
const textUpload = document.querySelector(".text-upload");
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
//Functionality to enlarge the post section
let isOpen = false;
// let open = document.getElementById("openUp");
const screen = document.querySelector(".post-method");
const openPlayer = function () {
  screen.classList.toggle("overlay-player");
  screen.style.width = "60vw";
  screen.style.height = "70vh";
  screen.style.borderRadius = "50px";
  man.style.display = "none";
  postDesc.style.width = "90%";
  postDesc.style.height = "40%";
  textUpload.style.display = "inline-block";
  postBtn.style.width = "50%";

  //   postDesc.widt;
  isOpen = true;
};
const closePlayer = function () {
  screen.classList.toggle("overlay-player");
  screen.style.width = "100%";
  screen.style.height = "120px";
  postDesc.style.width = "55%";
  postDesc.style.height = "50px";
  man.style.display = "inherit";
  textUpload.style.display = "none";
  postBtn.style.width = "";
  postDesc.value = "";
  isOpen = false;
};

postDesc.addEventListener("click", function () {
  if (!isOpen) {
    openPlayer();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && isOpen) {
    closePlayer();
  }
});

const like = document.querySelectorAll(".like");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    like[i].src = "Assets/favourite.png";
    like[i].style.filter = "invert(0)";
  });
}
