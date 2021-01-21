const dragElements = document.querySelectorAll(".tagging-element");
const elName = document.querySelectorAll(".tagging-element-name");
const closingEl = document.querySelectorAll(".delete");
const droppableArea = document.querySelector(".tagging-wrapper");

elName.forEach((element, indOfEl) => element.addEventListener("click", () => {
    closingEl.forEach((closeEl, indOfClosingEl) => {
        if (indOfEl === indOfClosingEl) {
            closeEl.style.visibility = "visible";
        } else {
            closeEl.style.visibility = "hidden";
        }
    })
}));

closingEl.forEach((closeEl) => {
    closeEl.addEventListener("click", (event) => {
        event.target.parentNode.remove();
    })
});

for(let i = 0; i < dragElements.length; i++){
    dragElement(dragElements[i]);
}

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        console.log(elmnt.offsetTop)
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

