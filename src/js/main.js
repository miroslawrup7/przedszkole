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