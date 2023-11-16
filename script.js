const commentBtn = document.getElementById("comment-button");

const createChildElement = () => {
  const container = createNewElement("div", "container");
  const inputElt = document.createElement("input");
  inputElt.type = "text";
  inputElt.placeholder = "Add a comment";
  inputElt.className = "container-input";

  const buttonElt = document.createElement("button");
  buttonElt.className = "add-comment";
  buttonElt.innerHTML = "Add";
  buttonElt.addEventListener("click", handleAddCommentButtonClick);

  container.appendChild(inputElt);
  container.appendChild(buttonElt);
  return container;
};

const createNewElement = (elt, className) => {
  const element = document.createElement(elt);
  element.className = className;
  return element;
};

const createLikeComponent = () => {
  const likeComponentDiv = createNewElement("div", "like-components");
  const likePara = createNewElement("p", "user-elt like");
  likePara.innerHTML = "Like👍🏻";
  const likeCounter = createNewElement("p", "like-count");
  likeComponentDiv.appendChild(likePara);
  likeComponentDiv.appendChild(likeCounter);
  likePara.addEventListener("click", handleLikeButtonClick);

  console.log(likeComponentDiv);
  return likeComponentDiv;
};

const createCommentSection = (comment) => {
  const mainDiv = createNewElement("div", "new-comment-container");
  const userComponentDiv = createNewElement("div", "user-components");
  const commentPara = createNewElement("p", "comment");
  commentPara.innerText = comment;

  const likeComponents = createLikeComponent();
  const replyPara = createNewElement("p", "user-elt reply");
  replyPara.innerHTML = "Reply";
  replyPara.addEventListener("click", handleReplyButtonClick);

  userComponentDiv.appendChild(likeComponents);
  userComponentDiv.appendChild(replyPara);

  mainDiv.appendChild(commentPara);
  mainDiv.appendChild(userComponentDiv);
  console.log(mainDiv);
  return mainDiv;
};

const handleReplyButtonClick = (e) => {
  const parentContainer = e.target.parentElement.parentElement;
  const container = createChildElement();
  parentContainer.appendChild(container);
};

const handleAddCommentButtonClick = (e) => {
  const inputElt = e.target.previousElementSibling;
  const parentContainerElt = e.target.parentElement;
  if (inputElt.value) {
    const commentSection = createCommentSection(inputElt.value);
    parentContainerElt.innerText = "";
    parentContainerElt.appendChild(commentSection);
  }
}

const handleLikeButtonClick = (e) => {
  const sibilingCountElt = e.target.nextElementSibling;
  const curValue = sibilingCountElt.innerText || 0;
  sibilingCountElt.innerText = parseInt(curValue) + 1;
};

commentBtn.addEventListener("click", (e) => {
  const parentContainer = e.target.parentElement;
  const container = createChildElement();
  parentContainer.appendChild(container);
});
