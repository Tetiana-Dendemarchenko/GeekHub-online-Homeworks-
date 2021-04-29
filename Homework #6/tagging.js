const draggableElement = document.querySelectorAll ( '.tagging-element' );
const elementName = document.querySelectorAll ( '.tagging-element-name' );
const closingElement = document.querySelectorAll ( ".delete" );
const droppableArea = document.querySelector ( '.tagging-wrapper' );
let draggableItem = {};

elementName.forEach ( (element, elementIndex) =>
    element.addEventListener ( 'click', () => {

        closingElement.forEach ( (closingEl, closingElementIndex) => {
            ( elementIndex === closingElementIndex ) ? closingEl.style.visibility = 'visible' :
                closingEl.style.visibility = 'hidden';
        } );

        draggableElement.forEach ( (draggableElement, draggableElementIndex) => {
            ( draggableElementIndex === elementIndex ) ? draggableElement.classList.add ( 'draggingElement' ) :
                draggableElement.classList.remove ( 'draggingElement' );
        } );

    } ) );

closingElement.forEach ( (closingEl) => {
    closingEl.addEventListener ( 'click', (event) => {
        event.target.parentNode.remove ();
    } );
} );

function formMovableElement() {
    return draggableItem.elem;
}

function positionChangeOnMouseDown({ pageX, pageY, target, which }) {
    const draggedElement = target.closest ( '.draggingElement' );
    if ( which !== 1 ) return;
    if ( ! draggedElement ) return;

    draggableItem.elem = draggedElement;
    draggableItem.downX = pageX;
    draggableItem.downY = pageY;
}

function positionChangeOnMouseMove(event) {
    if ( ! draggableItem.elem ) return;
    if ( ! draggableItem.movableElement ) {

        draggableItem.movableElement = formMovableElement ( event );

        let positionLeft = draggableItem.movableElement.getBoundingClientRect ().left + pageXOffset;
        let positionTop = draggableItem.movableElement.getBoundingClientRect ().top + pageYOffset;

        draggableItem.shiftX = draggableItem.downX - positionLeft;
        draggableItem.shiftY = draggableItem.downY - positionTop;

        startDraggingAction ();
    }

    let topPosition;
    topPosition = droppableArea.getBoundingClientRect ().top - 1;
    let bottomPosition;
    bottomPosition = droppableArea.getBoundingClientRect ().bottom - 1;
    let rightPosition;
    rightPosition = droppableArea.getBoundingClientRect ().right - 23;
    const { left: leftPosition } = droppableArea.getBoundingClientRect ();
    let closingBtn;
    closingBtn = draggableItem.elem.querySelector ( '.delete' );
    const { shiftX } = draggableItem;
    let posX = event.pageX - shiftX;
    let posY;
    posY = event.pageY - draggableItem.shiftY;
    posX = Math.min ( posX, rightPosition - draggableItem.movableElement.clientWidth );
    posX = Math.max ( posX, leftPosition );
    posY = Math.min ( posY, bottomPosition - draggableItem.movableElement.clientHeight );
    posY = Math.max ( posY, topPosition );

    draggableItem.movableElement.style.left = posX + 'px';
    draggableItem.movableElement.style.top = posY + 'px';

    ( parseInt ( draggableItem.movableElement.style.left ) >
        ( rightPosition - draggableItem.movableElement.clientWidth - closingBtn.clientWidth ) ) ?
        closingBtn.classList.add ( 'move-left' ) :
        closingBtn.classList.remove ( 'move-left' );
}

function positionChangeOnMouseUp() {
    draggableItem = {};
}

function startDraggingAction() {
    document.body.appendChild ( draggableItem.elem );
}

document.onmousemove = positionChangeOnMouseMove;
document.onmouseup = positionChangeOnMouseUp;
document.onmousedown = positionChangeOnMouseDown;

