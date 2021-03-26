function addSomePics(event){

    document.querySelector("#postImage").addEventListener("change", function(e){
        const file = e.target.files[0];
        let formData = new FormData()
            formData.append("upload_preset", "thatOneAnswer")
            formData.append("file", file)
            console.log(formData)
            fetch('http://res.cloudinary.com/t-o-a/image/upload',
            {
                method: "POST",
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).catch(err => {
                console.log(err)
            })
    })
    }