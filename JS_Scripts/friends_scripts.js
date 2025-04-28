

const posts = [
    {
        name: "Hammical Barca",
        pfp: "../Images/pfp.png"
    },
    {
        name: "The Dog",
        pfp: "../Images/pfp.png"
    },
    {
        name: "Test 1",
        pfp: "../Images/pfp.png"
    },
    {
        name: "Test 2",
        pfp: "../Images/pfp.png"
    },
    {
        name: "Test 3",
        pfp: "../Images/pfp.png"
    },
    {
        name: "Test 5",
        pfp: "../Images/pfp.png"
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