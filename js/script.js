const userInboxButton = document.getElementById("user-menu-inbox-button");
const InboxMenu = document.getElementById("user-inbox-menu");

userInboxButton.addEventListener('click', () => {
    InboxMenu.classList.toggle("hidden");
    ProfileMenu.classList.add("hidden");
    BellMenu.classList.add("hidden");
});

const userProfileButton = document.getElementById("user-menu-profile-button");
const ProfileMenu = document.getElementById("user-profile-menu");

userProfileButton.addEventListener('click', () => {
    ProfileMenu.classList.toggle("hidden");
    InboxMenu.classList.add("hidden");
    BellMenu.classList.add("hidden");
});

const userBellButton = document.getElementById("user-menu-bell-button");
const BellMenu = document.getElementById("user-bell-menu");

userBellButton.addEventListener('click', () => {
    BellMenu.classList.toggle("hidden");
    InboxMenu.classList.add("hidden");
    ProfileMenu.classList.add("hidden");
})

