// Searches answers by title

async function addPage(event){

    event.preventDefault();
    
    const title = document.querySelector('textarea[name="formTitle"]').value;
    console.log(title)


    const response = await fetch(`/api/answer`,{
        method: 'GET',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/answer');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.searchbar-form').addEventListener('submit', addPage);