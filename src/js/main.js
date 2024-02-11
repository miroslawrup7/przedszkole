const accordionsLoc = document.querySelectorAll(".faq-details .accordion");

if (accordionsLoc.length) {

    accordionsLoc.forEach((element) => {
        const titleRowsLoc = element.querySelectorAll(".row .title-row");

        const iconsLoc = element.querySelectorAll(".row .icon");
        const titlesLoc = element.querySelectorAll(".title-wrapper .title");
        const contentsLoc = element.querySelectorAll(".row .content-row");

        let arr = [...titleRowsLoc, ...contentsLoc];
        
        const activateElements = (activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc) => {
            if (!activatedElem.classList.contains("active")) {
            
                iconsLoc.forEach((el)=> {
                    el.classList.remove("active");
                })
                titlesLoc.forEach((el)=> {
                    el.classList.remove("active");
                })
                contentsLoc.forEach((elem)=> {
                    elem.classList.remove("active");
                })
    
                clickedIconLoc.classList.add("active");
                clickedTitleLoc.classList.add("active");
                clickedContentLoc.classList.add("active");

            } else {
           
                clickedIconLoc.classList.remove("active");
                clickedTitleLoc.classList.remove("active");
                clickedContentLoc.classList.remove("active");
            }
        }
        
        arr.forEach((elem)=> {
            elem.addEventListener("click", () => {

                const clickedRowLoc = elem.closest(".row");
    
                const clickedIconLoc = clickedRowLoc.querySelector(".icon");
                const clickedTitleLoc = clickedRowLoc.querySelector(".title");
                const clickedContentLoc = clickedRowLoc.querySelector(".content-row");

                if (elem.classList.contains("title-row")) {
                    const activatedElem = elem.querySelector(".title")
                    activateElements(activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc)
                }

                if (elem.classList.contains("content-row")) {
                    const activatedElem = elem
                    activateElements(activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc)
                }
            })
        })
    })
}

// contact form ----------------------------------------
// const inputWrapperLoc = document.querySelectorAll(".input-wrapper, .textarea-wrapper");
const inputWrapperLoc = document.querySelectorAll(".input-wrapper");

inputWrapperLoc.forEach((elem) => {

    elem.querySelector("input, textarea").value = "";

    elem.addEventListener("click", () => {
        elem.querySelector("label").classList.add("mini");
        elem.querySelector(".error").classList.add("mini");
        // elem.querySelector("input, textarea").classList.add("active");
        elem.querySelector("input").classList.add("active");
    })

    // elem.querySelector("input, textarea").addEventListener("blur", (event) => {
    elem.querySelector("input").addEventListener("blur", (event) => {
        if (!event.target.value) {
            elem.querySelector("label").classList.remove("mini");
            elem.querySelector(".error").classList.remove("mini");
            // elem.querySelector("input, textarea").classList.remove("active");
            elem.querySelector("input").classList.remove("active");
        }
    })
})

// contact form validation ----------------------------------------
const nameLoc = document.querySelector("#name");
const mailLoc = document.querySelector("#mail");
const messageLoc = document.querySelector("#message");

const buttonLoc = document.querySelector(".send-form");

let validationPass = true;

const validateEmpty = (e, elem) => {
    if (elem === undefined) {
        elem = e.target;
    }
    if (!elem.value) {
        elem.previousElementSibling.querySelector("span").innerText = "[ to pole jest wymagane ]";
        validationPass = false;
        elem.classList.add("error");
    } else {
        elem.previousElementSibling.querySelector("span").innerText = "";
        elem.classList.remove("error");
    }
};

const validateEmail = (e, elem) => {
    mailLoc.addEventListener("keyup", validateEmail);
    mailLoc.addEventListener("input", validateEmail);
    if (elem === undefined) {
        elem = e.target;
    }
    if (elem.value) {
        
        if (
            !String(elem.value)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        ) {
            elem.previousElementSibling.querySelector("span").innerText = " [ nieprawidłowy adres e-mail ]";
            validationPass = false;
            mailLoc.classList.add("error");
        } else {
            elem.previousElementSibling.querySelector("span").innerText = "";
            mailLoc.classList.remove("error");
        }
    }
};

const validateAll = () => {
    validationPass = true;
    validateEmpty(undefined, document.querySelector("#name"))
    validateEmpty(undefined, document.querySelector("#mail"))
    validateEmpty(undefined, document.querySelector("#message"))
    validateEmail(undefined, document.querySelector("#mail"))

    if (validationPass) {
        alert("Walidacja prawidłowa! :)");
    } else {
        alert("Walidacja nieprawidłowa! :(");
    }
}

nameLoc.addEventListener("blur", validateEmpty);
nameLoc.addEventListener("keyup", validateEmpty);

mailLoc.addEventListener("blur", validateEmpty);
mailLoc.addEventListener("keyup", validateEmpty);
mailLoc.addEventListener("blur", validateEmail);
mailLoc.addEventListener("change", validateEmail);

messageLoc.addEventListener("blur", validateEmpty);
messageLoc.addEventListener("keyup", validateEmpty);

buttonLoc.addEventListener("click", validateAll)