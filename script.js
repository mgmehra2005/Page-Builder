// This function add navigation button
const addnavButton = () => {
    let navItem = document.getElementById("navLinks");
    let navText = document.getElementById("newButtonTitle").value;
    let navLink = document.getElementById("newButtonLink").value;

    if (navText == "" || navLink == "")
    {
        alert("Fields Cannont be Empty");
        
    } else {

        let newItem = document.createElement("button");
        newItem.id = 'navLink'+(navItem.childElementCount)
        newItem.className = "navLink";
        newItem.innerText = navText;
        newItem.addEventListener("click", () => {
            location.href = navLink;
        });
        navItem.append(newItem)
        console.log("Button Added");
    }
}

// This function delete the last Button of navigation link
const deleteNavButton = () => {
    let navContainer = document.getElementById("navLinks");

    if (navContainer.childElementCount == 0) {
        alert("No More Buttons to Remove");
        return;
    } else {
        let lastButton = navContainer.lastElementChild;
        lastButton.remove();
        console.log("Button Removed - ", lastButton.id)
    }
}

// This function adds the banner Image
const addBannerImage = () => {
    let bannerContainer = document.getElementById("bannerImage");
    let source = document.getElementById("bannerImageURL").value;

    if (source == "") {
        alert("Image URL is required");
        return
    }

    let altText = "Banner Image";
    let id = "bannerImageSpace";

    let bannerImage = document.createElement("img");
    bannerImage.src = source;
    bannerImage.alt = altText;
    bannerImage.id = id;

    bannerContainer.insertAdjacentElement("afterbegin", bannerImage);
    console.log("Banner Image Added");
}

// This function removes the banner Image
const removeBannerImage = () => {
    let parentContainer = document.getElementById("bannerImage");
    if (parentContainer.firstElementChild.getAttribute("id") == "bannerImageSpace") {
        let bannerImage = document.getElementById("bannerImageSpace");
        bannerImage.remove();
        console.log("Banner image removed");
    } else {
        alert("Image Not set");
        console.log("Element Can't be removed");
    }
}

// This function adds the profile Image
const addProfileImage = () => {
    let profileContainer = document.getElementById("profileImage");
    let source = document.getElementById("profileImageURL").value;

    if (source == "") {
        alert("Image URL is required");
        return
    }

    let altText = "Profile Image";
    let id = "profileImageSpace";

    let profileImage = document.createElement("img");
    profileImage.src = source;
    profileImage.alt = altText;
    profileImage.id = id;

    profileContainer.insertAdjacentElement("afterbegin", profileImage);
    console.log("Profile Image Added");
}

// This function removes the profile Image
const removeProfileImage = () => {
    let parentContainer = document.getElementById("profileImage");
    if (parentContainer.firstElementChild != null) {
        let profileImage = document.getElementById("profileImageSpace");
        profileImage.remove();
        console.log("profile image removed");
    } else {
        alert("Image Not set");
        console.log("Element Can't be removed");
    }
}

// This function sets Title
const setTitle = () => {
    let title = document.getElementById("titleInput").value;
    let titleContainer = document.getElementById("userTitle");
    if (title == "") {
        alert("Title Cann't be empty.");
        console.log("No title given")
        return
    } else {
        titleContainer.innerText = title;
        console.log("Title changed");
    }
}


// This function sets Tagline
const setTagline = () => {
    let tagline = document.getElementById("taglineInput").value;
    let taglineContainer = document.getElementById("tagline");
    if (tagline == "") {
        alert("Tagline Cann't be empty.");
        console.log("No tagline given")
        return
    } else {
        taglineContainer.innerText = tagline;
        console.log("Tagline changed");
    }
}

