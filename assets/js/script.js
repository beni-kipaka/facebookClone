window.onload = () => {
    var btn = document.getElementById("create-account-button");
    var btn_add_post = document.getElementById("add-post");
    var users_item = document.getElementsByClassName("users-item");
    var close_modal = document.getElementById("close-modal");
    var close_register = document.getElementById("close-register");
    var close_messenger = document.getElementById("close-messenger");
    var overlay = document.getElementById("overlay");
    var messenger = document.getElementById("messenger");

    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            var popup = document.getElementById("register-popup");
            popup.style.display = "block";
            overlay.style.display = "block";
        })

    }

    if (close_register) {
        close_register.addEventListener("click", () => {
            var popup = document.getElementById("register-popup");
            popup.style.display = "none";
            overlay.style.display = "none";
        })

    }

    if (btn_add_post) {

        btn_add_post.addEventListener("click", () => {
            var modal = document.getElementById("modal-post");
            modal.style.display = "block"
            overlay.style.display = "block"
        })
    }
    if (close_modal) {
        close_modal.addEventListener("click", () => {
            var modal = document.getElementById("modal-post");
            modal.style.display = "none"
            overlay.style.display = "none"
        })

    }
    if(users_item.length){
        for (let index = 0; index < users_item.length; index++) {
            const user_item = users_item[index];
            user_item.addEventListener("click", ()=>{
                messenger.style.display = "block"
                let messages = document.getElementById("messages");
                messages.scrollTop = messages.scrollHeight;
                console.log(messages.scrollTop);
            })
            
        }

        if(close_messenger){
            close_messenger.addEventListener("click", ()=>{
                messenger.style.display = "none"
            })
        }
    }


}