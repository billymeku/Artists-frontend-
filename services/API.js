class API {
    // move our initial fetch into a function here 

    static addArtists() {
        fetch("http://localhost:3000/artists")
            .then(resp => resp.json())
            .then(artists => {
                artists.forEach(artist => {
                    const { id, name, gender, age, height, image} = artist
                    new Artist(id, name, gender, age, height, image)
                })
            })
    }
    static createArtists(e) {
        // debugger
        e.preventDefault()
        let data = {
            'name': e.target.name.value,
            'gender': e.target.gender.value,
            'age': e.target.age.value,
            'height': e.target.height.value,
            'image': e.target.img.value,
            'glams_attributes': [{
                'glam_squad': e.target.glam_squad.value,
                'makeup': e.target.makeup.value,
                'hair': e.target.hair.value,
                'wardrobe': e.target.wardrobe.value
            }]
        };
        fetch('http://localhost:3000/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            // grab our fetch response
            .then(resp => resp.json())
            .then(artist => {
                // debugger
                const { id, name, gender, age, height, image } = artist
                new Artist(id, name, gender, age, height, image)
                document.getElementById('artist-form').reset()
            })
    }
    // clearForm() {
    //     document.getElementById("name").value = ""
    //     document.getElementById("gender").value = ""
    //     document.getElementById("age").value = ""
    //     document.getElementById("height").value = ""
    // }

}
