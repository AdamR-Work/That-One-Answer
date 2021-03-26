//Creates the Answer page with the title and description

async function addPage(event){

    event.preventDefault();
    const title = document.querySelector('textarea[name="formTitle"]').value;//
    const description = document.querySelector('textarea[name="formDescription"]').value;
    // const category_id = document.querySelector('select[name="formCats"]').value;
// ADD THE Page.data via the route 
    const response = await fetch(`/api/answer`,{
        method: 'POST',
        body: JSON.stringify({
          user_id,

          title,
          description,
          // category_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {//trying to get it to create page after assigning title& description
        document.location.replace('/')
      } else {
        console.log(response)
     -   alert(response.statusText);
      }
    }
    document.querySelector('.new').addEventListener('submit', addPage);
