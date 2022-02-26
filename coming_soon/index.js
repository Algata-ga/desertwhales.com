function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
HTMLElement.prototype.serialize = function () {
    var res = "";
    var elements = this.querySelectorAll("input, select, textarea");
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        if (e.name) {
            res = res + `${e.name}=${e.value}&`;
        }
    }
    return res;
};

ready(() => {
    document.getElementById("modal_open").addEventListener("click", () => {
        document.getElementById("modal").classList.toggle("hide");
    });
    document.getElementById("modal_close").addEventListener("click", () => {
        document.getElementById("modal").classList.toggle("hide");
    });

    document.getElementById("notify_form").addEventListener(
        "submit",
        function (e) {
            const google_script_url =
                "https://script.google.com/macros/s/AKfycbwAG6fIYgduI1hrT_RDnXkv78CElLL5itlMuNgulFM-00oP7bqn8xV0dr5My29N8Xff/exec";

            const request = new XMLHttpRequest();
            request.open("POST", google_script_url, true);
            request.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );
            const data = document.getElementById("notify_form").serialize();
            try {
                request.send(data);
                document.getElementById("notify_form").reset();
                e.preventDefault();
                document.getElementById("modal").classList.toggle("hide");
            } catch (err) {
                alert("Sending failed.");
                window.location.reload();
            }
        },
        false
    );
});
