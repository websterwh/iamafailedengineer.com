body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: black; /* Set the background color of the page to black */
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
}

#text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    cursor: pointer;
    z-index: 1; /* Ensure text appears above the image */
    color: white; /* Set text color to white */
}

#image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain; /* Ensures image fits while preserving aspect ratio */
    object-position: center; /* Centers the image */
    z-index: 0; /* Ensure image appears behind the text */
}

.hidden {
    display: none;
}

.fade-in {
    animation: fadeIn 1s ease-out forwards;
}

.fade-out {
    animation: fadeOut 1s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
