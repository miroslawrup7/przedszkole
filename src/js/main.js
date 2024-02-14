const accordionsLoc = document.querySelectorAll(".accordion");
const jobDetailsLoc = document.querySelector(".job-details");

if (accordionsLoc.length) {

    accordionsLoc.forEach((element) => {
        const titleRowsLoc = element.querySelectorAll(".row .title-row");

        const iconsLoc = element.querySelectorAll(".row .icon");
        const titlesLoc = element.querySelectorAll(".title-wrapper .title");

        const contentsLoc = element.querySelectorAll(".row .content-row");
              
        let arr = [...titleRowsLoc, ...contentsLoc];
        
        const activateElements = (activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc, target) => {
            if (!activatedElem.classList.contains("active")) {
            
                if (jobDetailsLoc) {

                    if (target.classList.contains("title")) {
                        iconsLoc.forEach((el)=> {
                            el.classList.remove("active");
                        })
                        titlesLoc.forEach((el)=> {
                            el.classList.remove("active");
                        })
                        
                        contentsLoc.forEach((elem)=> {
                            elem.classList.remove("active");
                        })
                    }
                } else {
                    iconsLoc.forEach((el)=> {
                        el.classList.remove("active");
                    })
                    titlesLoc.forEach((el)=> {
                        el.classList.remove("active");
                    })
                    
                    contentsLoc.forEach((elem)=> {
                        elem.classList.remove("active");
                    })
                }
                
                clickedIconLoc.classList.add("active");
                clickedTitleLoc.classList.add("active");
                clickedContentLoc.classList.add("active");

            } else {
                
                if (jobDetailsLoc) {
                    if (target.classList.contains("title")) {
                        clickedContentLoc.classList.remove("active");
                        clickedIconLoc.classList.remove("active");
                        clickedTitleLoc.classList.remove("active");
                    }
                } else {
                    clickedContentLoc.classList.remove("active");
                    clickedIconLoc.classList.remove("active");
                    clickedTitleLoc.classList.remove("active");
                }
            }
        }
        
        arr.forEach((elem)=> {
            elem.addEventListener("click", (e) => {

                const target = e.target

                const clickedRowLoc = elem.closest(".row");
    
                const clickedIconLoc = clickedRowLoc.querySelector(".icon");
                const clickedTitleLoc = clickedRowLoc.querySelector(".title");

                const clickedContentLoc = clickedRowLoc.querySelector(".content-row");
                
                if (elem.classList.contains("title-row")) {
                    const activatedElem = elem.querySelector(".title")
                    activateElements(activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc, target)
                }

                if (elem.classList.contains("content-row")) {
                    const activatedElem = elem
                    activateElements(activatedElem, clickedIconLoc, clickedTitleLoc, clickedContentLoc, target)
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
        event.target.value = event.target.value.trim()
        if (!event.target.value) {
            elem.querySelector("label").classList.remove("mini");
            elem.querySelector(".error").classList.remove("mini");
            // elem.querySelector("input, textarea").classList.remove("active");
            elem.querySelector("input").classList.remove("active");
        }
    })
})

// contact form validation ----------------------------------------

const contactFormWrapperLoc = document.querySelector(".contact-form-wrapper")
const contactFormWrapper_EnrolmentLoc = document.querySelector(".contact-form-wrapper.enrolment")

if (contactFormWrapperLoc) {
    const nameLoc = document.querySelector("#name");
    const surnameLoc = document.querySelector("#surname");

    const childNameLoc = document.querySelector("#child_name");
    const ageLoc = document.querySelector("#age");
    const startLoc = document.querySelector("#start");

    const mailLoc = document.querySelector("#mail");
    const phoneLoc = document.querySelector("#phone");
    const messageLoc = document.querySelector("#message");
    const rodoCheckboxLoc = document.querySelector("#agreement_1");
    const buttonLoc = document.querySelector(".send-form");

    const textInputsArray = [...contactFormWrapperLoc.querySelectorAll("input[type=text], textarea")]
    
    let validationPass = true;
    
    const validateEmpty = (e, elem, allValidate) => {
        if (elem === undefined) {
            elem = e.target;
        }

        let empty;

        if (elem.id === "agreement_1") {
            if (!elem.checked) {
                empty = false
            } else {
                empty = true
            }
        } else {
            if (!elem.value) {
                empty = false
            } else {
                empty = true
            }
        }

        let allTextInputsAreNotEmpty = false
        allTextInputsAreNotEmpty = textInputsArray.some(element => (element.value !== ""));
    
        if (!empty) {
            if (allValidate) {
                validationPass = false;
                if (elem.id === "agreement_1") {
                    elem.previousElementSibling.innerText = "[ to pole jest wymagane ]";
                    elem.nextElementSibling.classList.add("error");
                } else {
                    elem.previousElementSibling.querySelector("span").innerText = "[ to pole jest wymagane ]"
                    elem.classList.add("error");
                }
            } else {

                if (!allTextInputsAreNotEmpty && rodoCheckboxLoc.checked === false) {
                        
                    if (elem.id === "agreement_1") {
                        elem.previousElementSibling.innerText = "";
                        elem.nextElementSibling.classList.remove("error");
                    } else {
                        elem.previousElementSibling.querySelector("span").innerText = "";
                        elem.classList.remove("error");
                    }
                    
                    nameLoc.previousElementSibling.querySelector("span").innerText = "";
                    nameLoc.classList.remove("error");
                    surnameLoc.previousElementSibling.querySelector("span").innerText = "";
                    surnameLoc.classList.remove("error");
                    mailLoc.previousElementSibling.querySelector("span").innerText = "";
                    mailLoc.classList.remove("error");
                    phoneLoc.previousElementSibling.querySelector("span").innerText = "";
                    phoneLoc.classList.remove("error");
                    messageLoc.previousElementSibling.querySelector("span").innerText = "";
                    messageLoc.classList.remove("error");
                    rodoCheckboxLoc.previousElementSibling.innerText = "";
                    rodoCheckboxLoc.nextElementSibling.classList.remove("error");

                    if (contactFormWrapper_EnrolmentLoc) {
                        childNameLoc.previousElementSibling.querySelector("span").innerText = "";
                        childNameLoc.classList.remove("error");
                        ageLoc.previousElementSibling.querySelector("span").innerText = "";
                        ageLoc.classList.remove("error");
                        startLoc.previousElementSibling.querySelector("span").innerText = "";
                        startLoc.classList.remove("error");
                    }
               
                } else {
    
                    validationPass = false;
                    if (elem.id === "agreement_1") {
                        elem.previousElementSibling.innerText = "[ to pole jest wymagane ]";
                        elem.nextElementSibling.classList.add("error");
                    } else {
                        elem.previousElementSibling.querySelector("span").innerText = "[ to pole jest wymagane ]";
                        elem.classList.add("error");
                    }
                }
            }
            
        } else {
            if (elem.id === "agreement_1") {
                elem.previousElementSibling.innerText = "";
                elem.nextElementSibling.classList.remove("error");
            } else {
                elem.previousElementSibling.querySelector("span").innerText = "";
                elem.classList.remove("error");
            }
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
    
    const validatePhone = (e, elem) => {
        phoneLoc.addEventListener("keyup", validatePhone);
        phoneLoc.addEventListener("input", validatePhone);
        if (elem === undefined) {
            elem = e.target;
        }
        if (elem.value) {
            elem.value = elem.value.replace(/\s|\-/g, '')
            
            if (
                !String(elem.value)
                    .toLowerCase()
                    .match(
                        /(?<!.)((\+48)?[ ]?\d{9})(?!.)/
                    )
            ) {
                elem.previousElementSibling.querySelector("span").innerText = " [ nieprawidłowy nr telefonu ]";
                validationPass = false;
                phoneLoc.classList.add("error");
            } else {
                elem.previousElementSibling.querySelector("span").innerText = "";
                phoneLoc.classList.remove("error");
            }
        }
    };
    
    const validateAll = () => {
        validationPass = true;
        validateEmpty(undefined, document.querySelector("#name"), true)
        validateEmpty(undefined, document.querySelector("#surname"), true)

        if (contactFormWrapper_EnrolmentLoc) {
            validateEmpty(undefined, document.querySelector("#child_name"), true)
            validateEmpty(undefined, document.querySelector("#age"), true)
            validateEmpty(undefined, document.querySelector("#start"), true)
        }

        validateEmpty(undefined, document.querySelector("#mail"), true)
        validateEmpty(undefined, document.querySelector("#phone"), true)

        validateEmpty(undefined, document.querySelector("#message"), true)

        validateEmpty(undefined, document.querySelector("#agreement_1"), true)
    
        validatePhone(undefined, document.querySelector("#phone"))
        validateEmail(undefined, document.querySelector("#mail"))

        if (validationPass) {
            alert("Walidacja prawidłowa! :)");
        } else {
            alert("Walidacja nieprawidłowa! :(");
        }
    }
    
    nameLoc.addEventListener("blur", validateEmpty);
    nameLoc.addEventListener("keyup", validateEmpty);
    
    surnameLoc.addEventListener("blur", validateEmpty);
    surnameLoc.addEventListener("keyup", validateEmpty);
    
    mailLoc.addEventListener("blur", validateEmpty);
    mailLoc.addEventListener("keyup", validateEmpty);
    mailLoc.addEventListener("blur", validateEmail);
    mailLoc.addEventListener("change", validateEmail);
    
    phoneLoc.addEventListener("blur", validateEmpty);
    phoneLoc.addEventListener("keyup", validateEmpty);
    phoneLoc.addEventListener("blur", validatePhone);
    phoneLoc.addEventListener("change", validatePhone);
    
    messageLoc.value = "";
    messageLoc.addEventListener("blur", validateEmpty);
    messageLoc.addEventListener("keyup", validateEmpty);

    rodoCheckboxLoc.checked = false;
    rodoCheckboxLoc.addEventListener("change", validateEmpty);
    
    buttonLoc.addEventListener("click", validateAll);

    if (contactFormWrapper_EnrolmentLoc) {
        childNameLoc.addEventListener("blur", validateEmpty);
        childNameLoc.addEventListener("keyup", validateEmpty);
        
        ageLoc.addEventListener("blur", validateEmpty);
        ageLoc.addEventListener("keyup", validateEmpty);

        startLoc.addEventListener("blur", validateEmpty);
        startLoc.addEventListener("keyup", validateEmpty);
    }
}

