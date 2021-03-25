// Creates the Answer page with the title and description

// async function addPage(event){

//     event.preventDefault();
//     const title = document.querySelector('input[????????]').value;//
//     const description = document.querySelector('input[????????]').value;
// // ADD THE Page.data via the route 
//     const response = await fetch(`./api/answer`,{
//         method: 'POST',
//         body: JSON.stringify({
//           title,
//           description
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
    
//       if (response.ok) {//trying to get it to create page after assigning title& description
//         document.location.replace('/answer/'+ this.id ); // is this "id" refrencing the one just created. we will see
//       } else {
//         alert(response.statusText);
//       }
//     }