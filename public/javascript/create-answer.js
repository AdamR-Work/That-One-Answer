//Creates the Answer page with the title and description


async function addPage(event){

    event.preventDefault();
    const title = document.querySelector('textarea[name="formTitle"]').value;//
    const description = document.querySelector('textarea[name="formDescription"]').value;
    const category_id = document.querySelector('select[name="formCats"]').value;
    
    // ADD THE Page.data via the route 
    const response = await fetch(`/api/answer`,{
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          category_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
    

    

    document.querySelector('.new').addEventListener('submit', addPage);

// attempt 4
     // const location = newAnswer.id;
    //  if (response.ok) {//trying to get it to create page after assigning title& description
    //      const newAnswer = await response.json();
    
    //     const newID = newAnswer.id;
    //     console.log(newID)
    //     res.render('/answer/'+newID)
    //   } else {
    //     // console.log(response)
    //  -   alert(response.statusText);
    //   }


// attempt 6
    // .then(dbnewAnswer => {
    //   const answer = dbnewAnswer.map(answer => answer.get({plain:true}));
    //   console.log(answer);
    //   res.render('answer', answer);
    // })
  