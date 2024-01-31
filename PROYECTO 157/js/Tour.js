AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Torre Eiffel",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "Nueva York",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
    
      prevoiusXPosition = posX;

    

      // Elemento de borde
      const borderEL = this.createBorder(item.id, position)
      // Elemento de miniatura
      const thumbnails = this.createThumbnails(item)
      borderEL.appendChild(thumbnails)
     
      // Elemento del texto del título
      
      
      this.placesContainer.appendChild(borderEL);
    }
    
  },
  createBorder: function(id, position){
    const entityEL = document.createElement ("a-entity")
    entityEL.setAttribute("id", id)
    entityEL.setAttribute("visible", true)
    entityEL.setAttribute("geometry", {
      primitive:"ring",
      radiusInner: 9,
      radiusOuter: 10,
      
    })
    entityEL.setAttribute("position", position)
    entityEL.setAttribute("material", {
      color: "yellow",
      opacity: "1"
    })
    return entityEL
  },
  createThumbnails: function (item){
    const entityEL = document.createElement ("a-entity")
 
    entityEL.setAttribute("visible", true)
    entityEL.setAttribute("geometry", {
      primitive: "circle",
      radius:9,
      
    })
    entityEL.setAttribute("material", {
      src: item.url
    })
    return entityEL
  }
    
});
