
document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = "3px solid yellow";
    friendContainer.style.padding = "10px";
});

function addBackgrounColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue";
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `<h3 class="friend-name">New Friend</h3>
    <p>Expedita, quae?</p>`;
    friendContainer.appendChild(newFriend);
});