var photos = [
    {
      "image": "1.jpg",
      "width": 1800,
      "height": 1200
    },
    {
      "image": "2.jpg",
      "width": 1200,
      "height": 1800
    },
    {
      "image": "3.jpg",
      "width": 1200,
      "height": 1800
    },
    {
      "image": "4.jpg",
      "width": 1200,
      "height": 1800
    },
    {
      "image": "5.jpg",
      "width": 1800,
      "height": 1200
    },
    {
      "image": "6.jpg",
      "width": 1200,
      "height": 1800
    },
    {
      "image": "7.jpg",
      "width": 2000,
      "height": 600
    },
    {
      "image": "8.jpg",
      "width": 1200,
      "height": 1800
    },
    {
      "image": "9.jpg",
      "width": 1200,
      "height": 1800
    },
    {
      "image": "10.jpg",
      "width": 1800,
      "height": 1200
    },
    {
      "image": "11.jpg",
      "width": 1800,
      "height": 1350
    },
    {
      "image": "12.jpg",
      "width": 1800,
      "height": 1200
    },
    {
      "image": "13.jpg",
      "width": 2000,
      "height": 732
    }
]

function notGrid(cont, arr, targetH){

    /* #region init values */

    var maxWidth = cont.clientWidth;
    var container = cont;
    var targetHeight = targetH;

    var images = window[arr];
    var finalImages = [];
    
    for(var i = 0; i < images.length; i++) {
        var width = parseInt(images[i].width);
        var height = parseInt(images[i].height);
        width = width * (targetHeight / height); 

        var image = {
            'width': width,
            'height': targetHeight,
            'image': images[i].image
        }

        finalImages.push(image);
    }

    /* #endregion */
    
    drawGrid();

    /* #region functions */

    function drawGrid(){
        var rows = buildRows();

        for(var i = 0; i < rows.length; i++) {
            rows[i] = fitImagesInRow(rows[i]);

            rows[i] = normalizeImages(rows[i]);

            var difference = (maxWidth- getCumulativeWidth(rows[i]));
            var amountOfImages = rows[i].length;

            if(amountOfImages > 1 && difference < 10) {
                var addToEach = difference / amountOfImages;
                for(var n = 0; n < rows[i].length; n++) {
                    rows[i][n].width += addToEach;
                }

                rows[i] = normalizeImages(rows[i]);

                rows[i][rows[i].length-1].width += (maxWidth - getCumulativeWidth(rows[i]));
            }
        }

        container.innerHTML = renderGrid(rows);
    }

    function buildRows(){
        var currentRow = 0;
        var currentWidth = 0;
        var imageCounter = 0;
        var rows = [];

        while(finalImages[imageCounter]) {
            if(currentWidth >= maxWidth) {
                currentRow++;
                currentWidth = 0;
            }
            if(!rows[currentRow]) {
                rows[currentRow] = [];
            }

            rows[currentRow].push(finalImages[imageCounter]);
            currentWidth += finalImages[imageCounter].width;

            imageCounter++;
        };

        return rows;
    }

    function normalizeImage(image) {
        image.width =  parseInt(image.width);
        image.height = parseInt(image.height);
        return image;
    }

    function normalizeImages(images) {
        for(var i = 0; i < images.length; i++) {
            normalizeImage(images[i]);
        }
        return images;
    }

    function fitImagesInRow(images) {
        while(getCumulativeWidth(images) > maxWidth) {
            for(var i = 0; i < images.length; i++) {
                images[i] = makeSmaller(images[i]);
            }
        };

        return images;
    };

    function renderGrid(rows) {
        var output = '';
        var num=1;
        for(var i = 0; i < rows.length; i++) {
            output += '<div class="image-row">';
            for(var n = 0; n < rows[i].length; n++) {
                var image = rows[i][n];
                output += '<div class="zoomer" onclick="openModal();currentSlide('+num+')" class="hover-shadow" style="width:'
                + Math.ceil(image.width) + 'px;height:' + image.height + 'px;"><img src="' + image.image + '" width="' 
                + Math.ceil(image.width) + '" height="' + image.height + '" /></div>';
                num++;
            }
            output += '</div>';
        }

        return output;
    }

    function makeSmaller(image, amount) {
        amount = amount || 1;

        var newHeight = image.height - amount;
        image.width = (image.width * (newHeight / image.height));
        image.height = newHeight;

        return image;
    };

    function getCumulativeWidth(images) {
        var width = 0;

        for(var i = 0; i < images.length; i++) {
            width += images[i].width;
        }

        width += (images.length-1);//*this.borderOffset;

        return width;
    };

    /* #endregion */
}

notGrid(document.getElementById('gallery'),'photos',750);
$(window).on('resize', function(){
  notGrid(document.getElementById('gallery'),'photos',750);
});