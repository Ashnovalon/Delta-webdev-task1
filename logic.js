document.addEventListener('DOMContentLoaded', () => {
    // Set background color for all grid boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'rgb(192, 192, 192)';
    });
    // Define images with their respective IDs and source paths
    fiximage();
    btimer();
    
    const pauseButton = document.getElementById('pauseButton');
    const resumeButton = document.getElementById('resumeButton');
    const resetButton = document.getElementById('resetButton');
    const pauseMenu = document.getElementById('pauseMenu');
    pauseMenu.style.display = 'none';
    pauseButton.addEventListener('click', () => {
        pauseMenu.style.display = 'flex';
        isPaused =true;
    });

    resumeButton.addEventListener('click', () => {
        pauseMenu.style.display = 'none';
        isPaused = false;
    });

    resetButton.addEventListener('click', () => {
        fiximage();
        btimer();
        pauseMenu.style.display = 'none';
    });
    
});
let currentRotationbr = 0;
let currentRotationrr = 0;
let currentRotationbs = 0;
let currentRotationrs = 0;
let isBlueTurn = true;

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        document.querySelectorAll('.box').forEach(b => {
            b.style.backgroundColor = 'rgb(192, 192, 192)'; // Remove border from all boxes
        });

        var newButtonsContainer = document.getElementById('rr');
        removeAllChildren(newButtonsContainer);
        const img = this.querySelector('img');
        // Check if the clicked box contains an image

        if (isBlueTurn) {
            if (img) {
                // Add green border to the clicked box
                this.style.backgroundColor = '#E3FAE3';
            }
            if (img.getAttribute('src').includes('BTitan')){
                
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col);      
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTank);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBRico);
                                surroundingBox.removeEventListener('click', moveBSemi);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.removeEventListener('click', moveRRico);
                                surroundingBox.removeEventListener('click', moveRSemi);
                                surroundingBox.removeEventListener('click', moveRTank);
                                surroundingBox.removeEventListener('click', moveRTitan);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveBTitan);
                            }
                        }
                    }
                }
            }

            if (img.getAttribute('src').includes('BTank')){
                
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col);      
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTitan);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBRico);
                                surroundingBox.removeEventListener('click', moveBSemi);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.removeEventListener('click', moveRRico);
                                surroundingBox.removeEventListener('click', moveRSemi);
                                surroundingBox.removeEventListener('click', moveRTank);
                                surroundingBox.removeEventListener('click', moveRTitan);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveBTank);
                            }
                        }
                    }
                }
            }

            if (img.getAttribute('src').includes('BCanon')){
                console.log('canon');
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col);       
    
                // Highlight surrounding boxes
                for (let c = -1; c <= 1; c++) {
                    const surroundingBox = document.querySelector(`.box[data-row="${row}"][data-col="${col + c}"]`);
                    if (surroundingBox && surroundingBox !== this) {
                        if(!surroundingBox.querySelector('img')){
                            surroundingBox.removeEventListener('click', moveBTank);
                            surroundingBox.removeEventListener('click', moveBTitan);
                            surroundingBox.removeEventListener('click', moveBRico);
                            surroundingBox.removeEventListener('click', moveBSemi);
                            surroundingBox.removeEventListener('click', moveRCanon);
                            surroundingBox.removeEventListener('click', moveRRico);
                            surroundingBox.removeEventListener('click', moveRSemi);
                            surroundingBox.removeEventListener('click', moveRTank);
                            surroundingBox.removeEventListener('click', moveRTitan);
                            surroundingBox.style.backgroundColor = 'lightgreen';
                            surroundingBox.addEventListener('click', moveBCanon);
                        }
                    }
                    
                }
            }

            if (img.getAttribute('src').includes('BRico')){
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col); 
                     
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTank);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBTitan);
                                surroundingBox.removeEventListener('click', moveBSemi);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.removeEventListener('click', moveRRico);
                                surroundingBox.removeEventListener('click', moveRSemi);
                                surroundingBox.removeEventListener('click', moveRTank);
                                surroundingBox.removeEventListener('click', moveRTitan);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveBRico);
                            }
                        }
                    }
                }
                // Create the first new button
                const imageToRotate = this.querySelector('img');
                
    
                var newButton1 = document.createElement('button');
                newButton1.innerText = 'Anti-Clock';
                newButton1.classList.add('left-btn'); // Add class for styling
                newButton1.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
        
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveBRico); // Remove click event listener from all boxes
                    });
                    console.log(currentRotationbr);
                    currentRotationbr = (currentRotationbr - 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationbr}deg)`;
                    console.log(currentRotationbr);
                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    blueturnended();
                });
    
                // Create the second new button
                var newButton2 = document.createElement('button');
                newButton2.innerText = 'Clockwise';
                newButton2.classList.add('right-btn'); // Add class for styling
                newButton2.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
                        
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveBRico); // Remove click event listener from all boxes
                    });
                    currentRotationbr = (currentRotationbr + 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationbr}deg)`;
                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    blueturnended();
                });
                var newButtonsContainer = document.getElementById('rr'); 
                newButtonsContainer.appendChild(newButton1);
                newButtonsContainer.appendChild(newButton2);
                document.getElementById('left-btn').style.display = 'block';
                document.getElementById('right-btn').style.display = 'block';
                // Get the container for new buttons    
            }

            if (img.getAttribute('src').includes('BSemi')){
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col); 
                     
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTank);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBRico);
                                surroundingBox.removeEventListener('click', moveBTitan);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.removeEventListener('click', moveRRico);
                                surroundingBox.removeEventListener('click', moveRSemi);
                                surroundingBox.removeEventListener('click', moveRTank);
                                surroundingBox.removeEventListener('click', moveRTitan);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveBSemi);
                            }
                        }
                    }
                }
                // Create the first new button
                const imageToRotate = this.querySelector('img');
                
    
                var newButton1 = document.createElement('button');
                newButton1.innerText = 'Anti-Clock';
                newButton1.classList.add('left-btn'); // Add class for styling
                newButton1.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
        
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveBSemi); // Remove click event listener from all boxes
                    });
                    console.log(currentRotationbs);
                    currentRotationbs = (currentRotationbs - 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationbs}deg)`;
                    console.log(currentRotationbs);
                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    blueturnended();
                });
    
                // Create the second new button
                var newButton2 = document.createElement('button');
                newButton2.innerText = 'Clockwise';
                newButton2.classList.add('right-btn'); // Add class for styling
                newButton2.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
                        
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveBSemi); // Remove click event listener from all boxes
                    });
                    currentRotationbs = (currentRotationbs + 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationbs}deg)`;
                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    blueturnended();
                });
                var newButtonsContainer = document.getElementById('rr'); 
                newButtonsContainer.appendChild(newButton1);
                newButtonsContainer.appendChild(newButton2);
                document.getElementById('left-btn').style.display = 'block';
                document.getElementById('right-btn').style.display = 'block';
                // Get the container for new buttons    
            }
        } else {

            if (img) {
                // Add green border to the clicked box
                this.style.backgroundColor = '#E3FAE3';
            }

            if (img.getAttribute('src').includes('RTitan')){
                console.log('titan');
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col);      
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTank);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBTitan);
                                surroundingBox.removeEventListener('click', moveBRico);
                                surroundingBox.removeEventListener('click', moveBSemi);
                                surroundingBox.removeEventListener('click', moveRRico);
                                surroundingBox.removeEventListener('click', moveRSemi);
                                surroundingBox.removeEventListener('click', moveRTank);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveRTitan);
                            }
                        }
                    }
                }
            }

            if (img.getAttribute('src').includes('RTank')){
                console.log('titan');
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col);      
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTank);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBTitan);
                                surroundingBox.removeEventListener('click', moveBRico);
                                surroundingBox.removeEventListener('click', moveBSemi);
                                surroundingBox.removeEventListener('click', moveRRico);
                                surroundingBox.removeEventListener('click', moveRSemi);
                                surroundingBox.removeEventListener('click', moveRTitan);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveRTank);
                            }
                        }
                    }
                }
            }

            if (img.getAttribute('src').includes('RCanon')){
                console.log('canon');
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col);       
                // Highlight surrounding boxes
                for (let c = -1; c <= 1; c++) {
                    const surroundingBox = document.querySelector(`.box[data-row="${row}"][data-col="${col + c}"]`);
                    if (surroundingBox && surroundingBox !== this) {
                        if(!surroundingBox.querySelector('img')){
                            surroundingBox.removeEventListener('click', moveBTank);
                            surroundingBox.removeEventListener('click', moveBCanon);
                            surroundingBox.removeEventListener('click', moveBTitan);
                            surroundingBox.removeEventListener('click', moveBRico);
                            surroundingBox.removeEventListener('click', moveBSemi);
                            surroundingBox.removeEventListener('click', moveRRico);
                            surroundingBox.removeEventListener('click', moveRSemi);
                            surroundingBox.removeEventListener('click', moveRTank);
                            surroundingBox.removeEventListener('click', moveRTitan);
                            surroundingBox.style.backgroundColor = 'lightgreen';
                            surroundingBox.addEventListener('click', moveRCanon);
                        }
                    }
                    
                }
            }

            if (img.getAttribute('src').includes('RRico')){
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col); 
                     
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTank);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBTitan);
                                surroundingBox.removeEventListener('click', moveBRico);
                                surroundingBox.removeEventListener('click', moveBSemi);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.removeEventListener('click', moveRSemi);
                                surroundingBox.removeEventListener('click', moveRTank);
                                surroundingBox.removeEventListener('click', moveRTitan);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveRRico);
                            }
                        }
                    }
                }
                // Create the first new button
                const imageToRotate = this.querySelector('img');
            
    
                var newButton1 = document.createElement('button');
                newButton1.innerText = 'Anti-Clock';
                newButton1.classList.add('left-btn'); // Add class for styling
                newButton1.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveRRico); // Remove click event listener from all boxes
                    });
                    currentRotationrr = (currentRotationrr - 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationrr}deg)`;
                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    redturnended();
                });
    
                // Create the second new button
                var newButton2 = document.createElement('button');
                newButton2.innerText = 'Clockwise';
                newButton2.classList.add('right-btn'); // Add class for styling
                newButton2.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveRRico); // Remove click event listener from all boxes
                    });
                    currentRotationrr = (currentRotationrr + 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationrr}deg)`;
            
                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    redturnended();
                });
                var newButtonsContainer = document.getElementById('rr'); 
                newButtonsContainer.appendChild(newButton1);
                newButtonsContainer.appendChild(newButton2);
                document.getElementById('left-btn').style.display = 'block';
                document.getElementById('right-btn').style.display = 'block';
                // Get the container for new buttons    
            }

            if (img.getAttribute('src').includes('RSemi')){
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                console.log(row, col); 
                     
                // Highlight surrounding boxes
                for (let r = -1; r <= 1; r++) {
                    for (let c = -1; c <= 1; c++) {
                        const surroundingBox = document.querySelector(`.box[data-row="${row + r}"][data-col="${col + c}"]`);
                        if (surroundingBox && surroundingBox !== this) {
                            if(!surroundingBox.querySelector('img')){
                                surroundingBox.removeEventListener('click', moveBTank);
                                surroundingBox.removeEventListener('click', moveBCanon);
                                surroundingBox.removeEventListener('click', moveBTitan);
                                surroundingBox.removeEventListener('click', moveBRico);
                                surroundingBox.removeEventListener('click', moveBSemi);
                                surroundingBox.removeEventListener('click', moveRRico);
                                surroundingBox.removeEventListener('click', moveRCanon);
                                surroundingBox.removeEventListener('click', moveRTank);
                                surroundingBox.removeEventListener('click', moveRTitan);
                                surroundingBox.style.backgroundColor = 'lightgreen';
                                surroundingBox.addEventListener('click', moveRSemi);
                            }
                        }
                    }
                }
                // Create the first new button
                const imageToRotate = this.querySelector('img');
            
    
                var newButton1 = document.createElement('button');
                newButton1.innerText = 'Anti-Clock';
                newButton1.classList.add('left-btn'); // Add class for styling
                newButton1.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveRSemi); // Remove click event listener from all boxes
                    });
                    currentRotationrs = (currentRotationrs - 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationrs}deg)`;
                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    redturnended();
                });
    
                // Create the second new button
                var newButton2 = document.createElement('button');
                newButton2.innerText = 'Clockwise';
                newButton2.classList.add('right-btn'); // Add class for styling
                newButton2.addEventListener('click', function() {
                    document.querySelectorAll('.box').forEach(b => {
                        b.style.border = '';
                        b.style.backgroundColor = 'rgb(192, 192, 192)';
                        b.removeEventListener('click', moveRSemi); // Remove click event listener from all boxes
                    });
                    currentRotationrs = (currentRotationrs + 90) % 360;
                    imageToRotate.style.transform = `rotate(${currentRotationrs}deg)`;

                    newButtonsContainer.removeChild(newButton1);
                    newButtonsContainer.removeChild(newButton2);
                    redturnended();
                });
                var newButtonsContainer = document.getElementById('rr'); 
                newButtonsContainer.appendChild(newButton1);
                newButtonsContainer.appendChild(newButton2);
                document.getElementById('left-btn').style.display = 'block';
                document.getElementById('right-btn').style.display = 'block';
                // Get the container for new buttons    
            }
        }
    });
});

function moveBTitan() {
    // Move titan to the clicked box
    const clickedBox = this;
    const titan = document.querySelector('img[src*="BTitan"]');
    titan.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(titan); // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveBTitan); // Remove click event listener from all boxes
    });
    blueturnended();
}

function moveRTitan() {
    // Move titan to the clicked box
    const clickedBox = this;
    const titan = document.querySelector('img[src*="RTitan"]');
    titan.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(titan); // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveRTitan); // Remove click event listener from all boxes
    });
    redturnended();
}

function moveBCanon() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="BCanon"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon); // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveBCanon); // Remove click event listener from all boxes
    });
    blueturnended();
}

function moveRCanon() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="RCanon"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon); // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveRCanon); // Remove click event listener from all boxes
    });
    redturnended();
}

function moveBTank() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="BTank"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon); // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveBTank); // Remove click event listener from all boxes
    });
    blueturnended();
}

function moveRTank() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="RTank"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon); // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveRTank); // Remove click event listener from all boxes
    });
    redturnended();
}

function moveBRico() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="BRico"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon); 
    var newButtonsContainer = document.getElementById('rr');
    removeAllChildren(newButtonsContainer);
    // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveBRico); // Remove click event listener from all boxes
    });
    blueturnended();
}

function moveRRico() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="RRico"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon);
    var newButtonsContainer = document.getElementById('rr');
    removeAllChildren(newButtonsContainer);
    // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveRRico); // Remove click event listener from all boxes
    });
    redturnended();
}

function moveBSemi() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="BSemi"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon);
    var newButtonsContainer = document.getElementById('rr');
    removeAllChildren(newButtonsContainer);
    // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveBSemi); // Remove click event listener from all boxes
    });
    blueturnended();
}

function moveRSemi() {
    // Move titan to the clicked box
    const clickedBox = this;
    const canon = document.querySelector('img[src*="RSemi"]');
    canon.parentNode.innerHTML = ''; // Remove king from the current box
    clickedBox.appendChild(canon);
    var newButtonsContainer = document.getElementById('rr');
    removeAllChildren(newButtonsContainer);
    // Move king to the clicked box
    // Remove border and background color from all boxes
    document.querySelectorAll('.box').forEach(b => {
        b.style.border = '';
        b.style.backgroundColor = 'rgb(192, 192, 192)';
        b.removeEventListener('click', moveRSemi); // Remove click event listener from all boxes
    });
    redturnended();
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
const imgb = document.createElement('img');
imgb.src = 'bullet.png';
const changePreviousBoxColor = (row, col, minRow) => {
    if (row >= minRow) {
        setTimeout(() => {
            const nextBox = document.querySelector(`.box[data-row="${row}"][data-col="${col}"]`);
            const prevBox = document.querySelector(`.box[data-row="${row + 1}"][data-col="${col}"]`);

            if (nextBox) {
                if (!nextBox.querySelector('img')) {
                    
                    nextBox.appendChild(imgb);
                    changePreviousBoxColor(row - 1, col, minRow);
            
                }

                if (nextBox.querySelector('img[src*="RTitan"]')) {
                    alert('hit red titan, BLUE WINS');
                    fiximage();
                    btimer();
                }

                if (nextBox.querySelector('img[src*="BTitan"]')) {
                    alert('hit blue titan, RED WINS');
                    fiximage();
                    btimer();
                }
            }
            if (prevBox) {
                prevBox.removeChild(imgb);
            }
        }, 250); // 2 seconds delay
    }
};

const changePreviousBoxColor2 = (row, col, maxRow) => {
    if (row <= maxRow) {
        setTimeout(() => {
            const nextBox = document.querySelector(`.box[data-row="${row}"][data-col="${col}"]`);
            const prevBox = document.querySelector(`.box[data-row="${row - 1}"][data-col="${col}"]`);

            if (nextBox) {
                if (!nextBox.querySelector('img')) {
                    
                    nextBox.appendChild(imgb);
                    changePreviousBoxColor2(row + 1, col, maxRow);
            
                }

                if (nextBox.querySelector('img[src*="RTitan"]')) {
                    alert('hit red titan, BLUE WINS');
                    fiximage();
                    btimer();
                }

                if (nextBox.querySelector('img[src*="BTitan"]')) {
                    alert('hit blue titan, RED WINS');
                    fiximage();
                    btimer();
                }
            }
            if (prevBox) {
                prevBox.removeChild(imgb);
            }
        }, 250); // 2 seconds delay
    }
};

function blueturnended(){
    isBlueTurn = false;
    const canon = document.querySelector('img[src*="BCanon"]');
    if (canon) {
        const parentBox = canon.parentElement;
        const row = parseInt(parentBox.dataset.row);
        const col = parseInt(parentBox.dataset.col);
        console.log(row, col);
        const changeNextBoxColor2 = (row, col, minRow) => {
            if (row >= minRow) {
                setTimeout(() => {
                    const prevBox = document.querySelector(`.box[data-row="${row+1}"][data-col="${col}"]`);
                    const nextBox = document.querySelector(`.box[data-row="${row}"][data-col="${col}"]`);
                    if (nextBox) {
                        if (!nextBox.querySelector('img')) {
                            nextBox.appendChild(imgb);
                            changeNextBoxColor2(row - 1, col, minRow);
                        }

                        if(nextBox.querySelector('img[src*="RTitan"]')){
                            alert('BLUE wins');
                            fiximage();
                            btimer();
                        }

                        if(nextBox.querySelector('img[src*="RRico"]')){
                            nextBox.appendChild(imgb);
                            setTimeout(() => {
                                nextBox.removeChild(imgb); 
                            }, 200);
                            const rrico = nextBox.querySelector('img[src*="RRico"]');
                            var RtoL = isrotated(rrico, 90) || isrotated(rrico, 270) ; //its actually Left_to_Right, shd be LtoR

                            if(!RtoL){
                                const RtoLBox = document.querySelector(`.box[data-row="${row}"][data-col="${col-1}"]`);
                                if(RtoLBox.querySelector('img[src*="RTitan"]')){
                                    
                                    setTimeout(() => {
                                        RtoLBox.appendChild(imgb);
                                        alert('BLUE wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(RtoLBox.querySelector('img[src*="RSemi"]')){
                                    const bsemi = RtoLBox.querySelector('img[src*="RSemi"]');
                                   
                                    var semicheck = isrotated(bsemi, 90);
                                    if(semicheck){
                                        setTimeout(() => {
                                            RtoLBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            RtoLBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor2(row + 1, col - 1, 9);
                                    }
                                }
                            }
                            if(RtoL){
                                const LtoRBox = document.querySelector(`.box[data-row="${row}"][data-col="${col+1}"]`);
                                if(LtoRBox.querySelector('img[src*="RTitan"]')){
                                    setTimeout(() => {
                                        alert('BLUE wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(LtoRBox.querySelector('img[src*="RSemi"]')){
                                    const bsemi = LtoRBox.querySelector('img[src*="RSemi"]');
                                   
                                    var semicheck = isrotated(bsemi, 180);
                                    if(semicheck){
                                        setTimeout(() => {
                                            LtoRBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            LtoRBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor2(row + 1, col + 1, 9);
                                    }
                                }
                            }
                        }

                        if(nextBox.querySelector('img[src*="RSemi"]')){
                            nextBox.appendChild(imgb);
                            setTimeout(() => {
                                nextBox.removeChild(imgb); 
                            }, 200);
                            const rsemi = nextBox.querySelector('img[src*="RSemi"]');
                            var RtoL = isrotated(rsemi, 180);
                            var LtoR = isrotated(rsemi, 90);

                            if(RtoL){
                                const RtoLBox = document.querySelector(`.box[data-row="${row}"][data-col="${col-1}"]`);
                                if(RtoLBox.querySelector('img[src*="RTitan"]')){
                                    
                                    setTimeout(() => {
                                        RtoLBox.appendChild(imgb);
                                        alert('BLUE wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(RtoLBox.querySelector('img[src*="RRico"]')){
                                    const rrico = RtoLBox.querySelector('img[src*="RRico"]');
                                   
                                    var ricocheck = isrotated(rrico, 90) || isrotated(rrico, 270);
                                    if(ricocheck){
                                        setTimeout(() => {
                                            RtoLBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            RtoLBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor2(row + 1, col - 1, 9);
                                    }
                                }
                            }
                            if(LtoR){
                                const LtoRBox = document.querySelector(`.box[data-row="${row}"][data-col="${col+1}"]`);
                                if(LtoRBox.querySelector('img[src*="RTitan"]')){
                                    setTimeout(() => {
                                        alert('BLUE wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(LtoRBox.querySelector('img[src*="RRico"]')){
                                    const rrico = LtoRBox.querySelector('img[src*="RRico"]');
                                   
                                    var ricocheck = isrotated(rrico, 0) || isrotated(rrico, 180);
                                    if(ricocheck){
                                        setTimeout(() => {
                                            LtoRBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            LtoRBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor2(row + 1, col + 1, 9);
                                    }
                                }
                            }
                        }
                    }
                    if (prevBox) {
                        prevBox.removeChild(imgb);
                    }
                }, 250); // 2 seconds delay
            }
        };

        // Start changing the color of boxes from the next row to the 8th row
        changeNextBoxColor2(row - 1, col, 0);

    }
    document.getElementById('tog').innerText = "Red's Turn";
    rtimer();
}

function redturnended(){
    isBlueTurn = true;
    const canon = document.querySelector('img[src*="RCanon"]');
    if (canon) {
        const parentBox = canon.parentElement;
        const row = parseInt(parentBox.dataset.row);
        const col = parseInt(parentBox.dataset.col);
        console.log(row, col);
        const changeNextBoxColor = (row, col, maxRow) => {
            if (row <= maxRow) {
                setTimeout(() => {
                    const prevBox = document.querySelector(`.box[data-row="${row-1}"][data-col="${col}"]`);
                    const nextBox = document.querySelector(`.box[data-row="${row}"][data-col="${col}"]`);
                    if (nextBox) {
                        if (!nextBox.querySelector('img')) {
                            nextBox.appendChild(imgb);
                            changeNextBoxColor(row + 1, col, maxRow);
                        }

                        if(nextBox.querySelector('img[src*="BTitan"]')){
                            alert('RED wins');
                            fiximage();
                            btimer();
                        }

                        if(nextBox.querySelector('img[src*="BRico"]')){
                            nextBox.appendChild(imgb);
                            setTimeout(() => {
                                nextBox.removeChild(imgb); 
                            }, 200);
                            const brico = nextBox.querySelector('img[src*="BRico"]');
                            var RtoL = isrotated(brico, 90) || isrotated(brico, 270) ;

                            if(RtoL){
                                const RtoLBox = document.querySelector(`.box[data-row="${row}"][data-col="${col-1}"]`);
                                if(RtoLBox.querySelector('img[src*="BTitan"]')){
                                    
                                    setTimeout(() => {
                                        RtoLBox.appendChild(imgb);
                                        alert('RED wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(RtoLBox.querySelector('img[src*="BSemi"]')){
                                    const bsemi = RtoLBox.querySelector('img[src*="BSemi"]');
                                   
                                    var semicheck = isrotated(bsemi, 0);
                                    if(semicheck){
                                        setTimeout(() => {
                                            RtoLBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            RtoLBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor(row - 1, col - 1, 1);
                                    }
                                }
                            }
                            if(!RtoL){
                                const LtoRBox = document.querySelector(`.box[data-row="${row}"][data-col="${col+1}"]`);
                                if(LtoRBox.querySelector('img[src*="BTitan"]')){
                                    setTimeout(() => {
                                        alert('RED wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(LtoRBox.querySelector('img[src*="BSemi"]')){
                                    const bsemi = LtoRBox.querySelector('img[src*="BSemi"]');
                                   
                                    var semicheck = isrotated(bsemi, 270);
                                    if(semicheck){
                                        setTimeout(() => {
                                            LtoRBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            LtoRBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor(row - 1, col + 1, 1);
                                    }
                                }
                            }
                        }

                        if(nextBox.querySelector('img[src*="BSemi"]')){
                            nextBox.appendChild(imgb);
                            setTimeout(() => {
                                nextBox.removeChild(imgb); 
                            }, 200);
                            const bsemi = nextBox.querySelector('img[src*="BSemi"]');
                            var RtoL = isrotated(bsemi, 270);
                            var LtoR = isrotated(bsemi, 0);

                            if(RtoL){
                                const RtoLBox = document.querySelector(`.box[data-row="${row}"][data-col="${col-1}"]`);
                                if(RtoLBox.querySelector('img[src*="BTitan"]')){
                                    
                                    setTimeout(() => {
                                        RtoLBox.appendChild(imgb);
                                        alert('RED wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(RtoLBox.querySelector('img[src*="BRico"]')){
                                    const brico = RtoLBox.querySelector('img[src*="BRico"]');
                                   
                                    var ricocheck = isrotated(brico, 0) || isrotated(brico, 180);
                                    if(ricocheck){
                                        setTimeout(() => {
                                            RtoLBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            RtoLBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor(row - 1, col - 1, 1);
                                    }
                                }
                            }
                            if(LtoR){
                                const LtoRBox = document.querySelector(`.box[data-row="${row}"][data-col="${col+1}"]`);
                                if(LtoRBox.querySelector('img[src*="BTitan"]')){
                                    setTimeout(() => {
                                        alert('RED wins'); 
                                        fiximage();
                                        btimer();
                                    }, 300);
                                }
                                if(LtoRBox.querySelector('img[src*="BRico"]')){
                                    const brico = LtoRBox.querySelector('img[src*="BRico"]');
                                   
                                    var ricocheck = isrotated(brico, 90) || isrotated(brico, 270);
                                    if(ricocheck){
                                        setTimeout(() => {
                                            LtoRBox.appendChild(imgb); 
                                        }, 10);
                                        setTimeout(() => {
                                            LtoRBox.removeChild(imgb); 
                                        }, 300);
                                        changePreviousBoxColor(row - 1, col + 1, 1);
                                    }
                                }
                            }
                        }
                    }
                    if (prevBox) {
                        prevBox.removeChild(imgb);
                    }
                }, 250); // 2 seconds delay
            }
        };

        // Start changing the color of boxes from the next row to the 8th row
        changeNextBoxColor(row + 1, col, 9);

    }
    
    document.getElementById('tog').innerText = "Blue's Turn";
    btimer();
}

function isrotated(mg, ang) {
    // Get the computed style of the image
    const style = window.getComputedStyle(mg);
    const transform = style.getPropertyValue('transform');

    // Check if the transform property is 'none'
    if (transform === 'none') {
        if(ang === 0){
            return true;
        }
        else{return false;}
    } else {
        // Extract the matrix values
        const values = transform.match(/matrix\(([^)]+)\)/)[1].split(', ');
        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        const c = parseFloat(values[2]);
        const d = parseFloat(values[3]);

        // Calculate the angle in degrees
        const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

        // Normalize the angle to [0, 360) range
        const normalizedAngle = (angle + 360) % 360;

        // Check if the angle is 90 degrees
        if (normalizedAngle === ang) {
            return true;
        } else if (normalizedAngle === 0) {
            return false;
        }
        else{
            return false;
        }
    }
}

function fiximage(){
    const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            removeAllChildren(box);
            box.removeEventListener('click', moveBTank);
            box.removeEventListener('click', moveBCanon);
            box.removeEventListener('click', moveBTitan);
            box.removeEventListener('click', moveBRico);
            box.removeEventListener('click', moveBSemi);
            box.removeEventListener('click', moveRRico);
            box.removeEventListener('click', moveRSemi);
            box.removeEventListener('click', moveRTank);
            box.removeEventListener('click', moveRCanon);
            box.removeEventListener('click', moveRTitan);
        });

    const images = [
        { id: 'b101', src: 'RCanon.png' },
        { id: 'b203', src: 'RRico.png' },
        { id: 'b105', src: 'RTank.png' },
        { id: 'b207', src: 'RSemi.png' },
        { id: 'b108', src: 'RTitan.png' },
        { id: 'b801', src: 'BCanon.png' },
        { id: 'b703', src: 'BRico.png' },
        { id: 'b805', src: 'BTank.png' },
        { id: 'b707', src: 'BSemi.png' },
        { id: 'b808', src: 'BTitan.png' }
    ];


    // Iterate over the images array and place each image in the corresponding grid item
    images.forEach(image => {
        const box = document.getElementById(image.id);
        if (box) {
            const img = document.createElement('img');
            img.src = image.src;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';// Ensure the image covers the entire box
            box.appendChild(img);
        } else {
            console.error(`Element with id ${image.id} not found`);
        }
    });
}

let countdown;
let isPaused=false; // Store the interval ID to clear the interval

function rtimer() {
    document.getElementById('tog').innerText = "Red's Turn";
    clearInterval(countdown); // Clear any existing timer
    let timeLeft = 45;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;

    countdown = setInterval(() => {
        if (timeLeft > 0 && !isPaused) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else if (timeLeft <= 0) {
            clearInterval(countdown);
            alert('BLUE wins');
            fiximage();
            btimer();
        }
    }, 1000);
}

function btimer() {
    document.getElementById('tog').innerText = "Blue's Turn";
    clearInterval(countdown); // Clear any existing timer
    let timeLeft = 45;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;

    countdown = setInterval(() => {
        if (timeLeft > 0 && !isPaused) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else if (timeLeft <= 0) {
            clearInterval(countdown);
            alert('RED wins');
            fiximage();
            btimer();
        }
    }, 1000);
}
