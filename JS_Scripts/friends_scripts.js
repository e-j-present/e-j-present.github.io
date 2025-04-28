

const posts = [
    {
        name: "Hamilcar Barca",
        pfp: "../Images/hamical-barca.png"
    },
    {
        name: "Philip V of Macedon",
        pfp: "../Images/phillip.png"
    },
    {
        name: "Mago Barca",
        pfp: "../Images/mago.png"
    },
    {
        name: "Hasdrubal Barca",
        pfp: "../Images/hasdrubal.png"
    },
    {
        name: "Antiochus III the Great",
        pfp: "../Images/antiochus.png"
    },
    {
        name: "Maharbal",
        pfp: "../Images/maharbal.png"
    },
    {
        name: "Syphax",
        pfp: "../Images/syphax.png"
    },
    {
        name: "Michael the Elephant Breeder ",
        pfp: "../Images/michael.png"
    },
    {
        name: "The Mines of Spain ",
        pfp: "../Images/mine.png"
    },
]


const friendContainer = document.getElementById("friend-content");

function render_friends(){
    posts.forEach((post) => {
        const postEl = document.createElement("div");
        postEl.className = "friend-post";

        postEl.innerHTML = `
            <img class="friend-profile-pic" src=${post.pfp}>
            <strong class="friend-name">${post.name}</strong>
        `;

        friendContainer.appendChild(postEl);

    });

}

render_friends(); 