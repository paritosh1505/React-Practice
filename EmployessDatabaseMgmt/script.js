(async function fetchdata() {
  try {
    const loaddata = () => {
      console.log("ggggggg");
    };
    const header = new Headers();
    header.append("Content-Type", "application/json");
    const response = await fetch("data.json", {
      headers: header,
    });

    let data = await response.json();
    const empInfo = document.getElementById("empInfo");
    data.forEach((items) => {
      const container = document.createElement("div");

      const createbutton = document.createElement("button");
      createbutton.textContent = "DEL";
      const ele = document.createElement("span");

      container.classList.add("employee__information--name");
      const fullname = items.firstName + " " + items.lastName;
      ele.textContent = fullname;

      //container.innerHTML = fullname;
      container.append(ele);
      container.append(createbutton);
      empInfo.append(container);
      ele.addEventListener("click", () => {
        displayEmpdetail(items);
      });
      createbutton.addEventListener("click", () => {
        deleteItem(container);
      });
    });
  } catch (error) {
    console.log("Error is" + error);
  }
})();

function displayEmpdetail(itemval) {
  console.log("vallll");
  const eleval = document.getElementById("empDetail");
  eleval.innerHTML = "";
  const empdetail = document.createElement("div");
  empdetail.style.display = "flex"; // Set display to flex
  empdetail.style.flexDirection = "column"; // Set flex direction to column
  const empname = document.createElement("div");
  const fullname = itemval.firstName + " " + itemval.lastName;
  const image = document.createElement("img");
  image.src = itemval.imageUrl;
  image.height = "100";
  image.width = "100";
  empname.textContent = fullname;
  empdetail.append(image);
  empdetail.append(empname);

  const empemail = document.createElement("div");
  empemail.textContent = itemval.email;
  empdetail.append(empemail);
  const empage = document.createElement("div");

  empage.textContent = itemval.age;

  empdetail.append(empage);
  const emphone = document.createElement("div");
  emphone.textContent = itemval.contactNumber;
  empdetail.append(emphone);
  eleval.append(empdetail);
  empdetail.style.justifyContent = "center";
  empdetail.style.alignItems = "center";
  empdetail.style.top = "50%";
}

const addbutton = document.querySelector(".header__button");
const formentry = document.querySelector(".formPopup");
addbutton.addEventListener("click", () => {
  formentry.style.display = "block";
});

function addUserItem(itemval) {
  console.log("asssssssss");
  const buttonval = document.createElement("button");
  const empInfo = document.getElementById("empInfo");
  buttonval.textContent = "DEL";
  const eleval = document.createElement("div");
  eleval.classList.add("employee__information--name");
  const ele = document.createElement("span");

  ele.textContent = itemval.firstName + " " + itemval.lastName;
  eleval.append(ele);
  eleval.append(buttonval);
  empInfo.append(eleval);
  eleval.addEventListener("click", () => {
    displayEmpdetail(itemval);
  });
}
function deleteItem(itemval) {
  itemval.remove();
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const dob = document.getElementById("dob").value;
  const profilepage = document.getElementById("url").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const unixdob = Math.floor(Date.parse(dob) / 1000);
  const current = Math.floor(Date.now() / 1000);
  const timediff = current - unixdob;
  const age = Math.floor(timediff / (60 * 60 * 24 * 365));
  console.log("******************", unixdob);
  console.log("******************", age);

  const userInput = {
    firstName: fname,
    lastName: lname,
    age: age,
    imageUrl: profilepage,
    email: email,
    contactNumber: phone,
  };
  const jsondata = JSON.stringify(userInput);
  formentry.style.display = "none";
  addUserItem(userInput);
});
